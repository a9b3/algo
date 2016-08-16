class Heap {
  constructor({
    max,
    min,
  }={}) {
    this.max = max
    this.min = min
    if (!this.max && !this.min) {
      this.max = true
    }
    this.data = []
  }

  _compare(a, b) {
    if (this.max) {
      return a > b
    }
    if (this.min) {
      return a < b
    }
  }

  insert(value) {
    this.data.push(value)

    let pos = this.data.length - 1

    while(pos > 0) {
      const parentPos = Math.floor(pos/2)

      if (this._compare(this.data[pos], this.data[parentPos])) {
        const temp = this.data[pos]
        this.data[pos] = this.data[parentPos]
        this.data[parentPos] = temp
      } else {
        return
      }

      pos = parentPos
    }
  }

  extract() {
    const node = this.data[0]
    this.data[0] = this.data[this.data.length - 1]
    this.data.pop()

    let pos = 0
    while(pos < this.data.length - 1) {
      let childPos = pos*2+1
      childPos = this._compare(this.data[childPos], this.data[childPos+1]) ? childPos : childPos+1

      if (this._compare(this.data[childPos], this.data[pos])) {
        const temp = this.data[pos]
        this.data[pos] = this.data[childPos]
        this.data[childPos] = temp
      } else {
        return node
      }

      pos = childPos
    }

    return node
  }
}

export default Heap
