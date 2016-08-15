class Node {
  constructor(value) {
    this.value = value
    this.prev
  }
}

export default class Stack {
  constructor({
    maxSize,
  }={}) {
    this.maxSize = maxSize
    this.size = 0
    this.top
  }

  push(value) {
    if (this.maxSize && this.size === this.maxSize) {
      throw new Error(`max size of ${this.maxSize} reached`)
    }

    const node = new Node(value)

    node.prev = this.top
    this.top = node

    this.size++
  }

  pop() {
    const node = this.top
    if (!node) return
    this.top = node.prev
    node.prev = undefined
    this.size--
    return node.value
  }

  peek() {
    return this.top && this.top.value
  }
}
