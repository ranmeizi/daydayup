function List() {
  this.listSize = 0
  this.pos = 0
  this.dataStore = []
}

/**
 * append 在列表的末尾添加新元素
 * @param {any} element 元素
 */
List.prototype.append = function (element) {
  this.dataStore[this.listSize++] = element
}

/**
 * clear 清空列表中所有元素
 */
List.prototype.clear = function () {
  this.dataStore = []
  this.listSize = 0
  this.pos = 0
}

/**
 * 从列表中删除元素
 * @param {*} element 元素
 */
List.prototype.remove = function (element) {
  var foundAt = this.find(element)
  if (foundAt > -1) {
    this.dataStore.splice(this.find(element), 1)
    this.listSize--
    return true
  }
  return false
}

/**
 * 从列表中查找元素的索引
 * @param {*} element 
 * @returns 
 */
List.prototype.find = function (element) {
  for (var i = 0; i < this.listSize; i++) {
    if (this.dataStore[i] === element) {
      return i
    }
  }
  return -1
}

/**
 * length
 * @returns list长度
 */
List.prototype.length = function () {
  return this.listSize
}

List.prototype.toString = function () {
  return this.dataStore
}

/**
 * 在指定元素后追加元素
 * @param {*} element 追加元素
 * @param {*} after 指定元素
 * @returns 
 */
List.prototype.insert = function (element, after) {
  var afterIndex = this.find(after)
  console.log(afterIndex)
  if (afterIndex > -1) {
    this.dataStore.splice(afterIndex, 0, element)
    this.listSize++
    return true
  }
  return false
}

List.prototype.contains = function (element) {
  return this.find(element) > -1
}

List.prototype.front = function () {
  this.pos = 0
}

List.prototype.end = function () {
  this.pos = this.listSize - 1
}

List.prototype.prev = function () {
  if (this.pos !== 0) {
    this.pos--
  }
}
List.prototype.next = function () {
  if (this.pos < this.listSize) {
    this.pos++
  }
}

List.prototype.currPos = function () {
  return this.pos
}

List.prototype.moveTo = function (pos) {
  if (pos < this.listSize && pos > 0) {
    this.pos = pos
  }
}

List.prototype.getElement = function () {
  return this.dataStore[this.pos]
}

module.exports = List