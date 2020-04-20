import echarts from 'echarts'
import 'echarts-gl'
import world from './world2.json'
import Overlay from 'ol/Overlay';
import { transform } from 'ol/proj'

var dataCount = 0;
var CHUNK_COUNT = 230;
var ROOT_PATH = '/api'
function fetchData(idx) {
  if (idx >= CHUNK_COUNT) {
    return;
  }
  var dataURL = ROOT_PATH + '/data/asset/data/gps/gps_' + idx + '.bin';
  var xhr = new XMLHttpRequest();
  xhr.open('GET', dataURL, true);
  xhr.responseType = 'arraybuffer';

  xhr.onload = function (e) {
    var rawData = new Int32Array(this.response);
    var data = new Float32Array(rawData.length);
    var addedDataCount = rawData.length / 2;
    for (var i = 0; i < rawData.length; i += 2) {
      data[i] = rawData[i + 1] / 1e7;
      data[i + 1] = rawData[i] / 1e7;
    }

    myChart.appendData({
      seriesIndex: 0,
      data: data
    });

    fetchData(idx + 1);
  }

  xhr.send();
}

const option = {
  backgroundColor: 'transparent',
  title: {
    text: '10000000 GPS Points',
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  geo: {
    show: false,
    map: 'world',
    roam: true,
    label: {
      emphasis: {
        show: false
      }
    },
    zoom: 1.3,
    silent: true,
    itemStyle: {
      normal: {
        areaColor: 'transparent',
        borderColor: '#111'
      },
      emphasis: {
        areaColor: 'transparent'
      }
    }
  },
  series: [{
    name: '弱',
    type: 'scatterGL',
    progressive: 1e6,
    coordinateSystem: 'geo',
    symbolSize: 1,
    zoomScale: 0.002,
    blendMode: 'lighter',
    large: true,
    itemStyle: {
      color: 'rgb(20, 15, 2)'
    },
    postEffect: {
      enable: true
    },
    silent: true,
    dimensions: ['lng', 'lat'],
    data: new Float32Array()
  }]
};

fetchData(0);

var myChart = echarts.init(document.getElementById('echarts'));
echarts.registerMap('world', world)

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

setTimeout(() => {
  var ec = new Overlay({
    positioning: 'center-center',
    position: transform([0, 0], "EPSG:4326", 'EPSG:102113'),
    element: document.getElementById('echarts')
  });
  window.map.addOverlay(ec);
}, 1000)
