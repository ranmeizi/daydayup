const e = [
    [1, 7],
    [9, 3]
]
// 二阶行列式 计算
function _2hls(a) {
    return a[0][0] * a[1][1] - a[1][0] * a[0][1]
}
console.log(_2hls(e))

// 三阶行列式计算
const e3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function _3hls(a) {
    return a[0][0] * a[1][1] * a[2][2] +
        a[0][1] * a[1][2] * a[2][0] +
        a[1][0] * a[2][1] * a[0][2] -
        a[0][2] * a[1][1] * a[2][0] -
        a[0][1] * a[1][0] * a[2][2] -
        a[0][0] * a[1][2] * a[2][1]
}
console.log(_3hls(e3))

// 逆序数
function nxs(a) {
    let num = 0
    a.forEach((n, i) => {
        a.slice(i + 1, a.length).forEach(n1 => {
            if (n > n1) num++
        })
    })
    return num
}
console.log(nxs([4, 2, 1, 3]))
console.log(nxs([1, 2, 3, 4]))