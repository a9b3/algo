class Node {
  constructor(value) {
    this.value = value
    this.prev
  }
}

class Queue {
  constructor({
    maxSize,
  }={}) {
    this.maxSize = maxSize
    this.size = 0
    this.head
    this.tail
  }

  enqueue(value) {
    const node = new Node(value)

    if (this.head) {
      this.head.prev = node
    }
    this.head = node

    if (!this.tail) {
      this.tail = node
    }

    this.size++
  }

  dequeue() {
    if (!this.tail) {
      return
    }

    if (this.head === this.tail) {
      this.head = undefined
    }

    const node = this.tail
    this.tail = this.tail.prev
    this.size--
    return node.value
  }
}

export default Queue
