class Node {
  constructor(value) {
    this.value = value
    this.parent
    this.left
    this.right
  }
}

/*
 * Good if you need to do some checks during insertion
 */
class BST {
  constructor() {
    this.size = 0
    this.root
  }

  insert(value) {
    const node = new Node(value)

    let cursor = this.root
    while(cursor) {

    }
  }
}

export default BST
