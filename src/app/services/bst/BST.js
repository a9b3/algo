class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.parent
    this.left
    this.right
  }

  _removePointers() {
    this.parent = undefined
    this.left = undefined
    this.right = undefined
  }

  remove() {
    // only one child or no child
    if (!(this.left && this.right)) {
      const node = this.left || this.right

      if (this.parent) {
        if (this.parent.left === this) {
          this.parent.left = node
        }
        if (this.parent.right === this) {
          this.parent.right = node
        }
      }
      if (node) {
        node.parent = this.parent
      }
      this._removePointers()
      return node
    }

    // has both children
    let cursor = this.right
    while(cursor.left) {
      cursor = cursor.left
    }
    this.value = cursor.value
    this.key = cursor.key
    cursor.remove()
    return this
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

  _findNode(key, node=this.root) {
    if (!node) return
    if (node.key === key) return node

    return key < node.key
      ? this._findNode(key, node.left)
      : this._findNode(key, node.right)
  }

  find(key) {
    const node = this._findNode(key)
    return node && node.value
  }

  findMin() {
    let cursor = this.root

    while(cursor.left) {
      cursor = cursor.left
    }

    return cursor.value
  }

  findMax() {
    let cursor = this.root

    while(cursor.right) {
      cursor = cursor.right
    }

    return cursor.value
  }

  inorder(cb, node=this.root) {
    if (!node) return []

    const leftArr = this.inorder(cb, node.left || false)
    const midItem = cb ? cb(node.value) : node.value
    const rightArr = this.inorder(cb, node.right || false)

    return leftArr.concat(midItem).concat(rightArr)
  }

  insert(key, value) {
    const node = new Node(key, value)

    if (!this.root) {
      this.root = node
      this.size++
      return
    }

    let cursor = this.root
    while(cursor) {
      if (key < cursor.key) {
        if (!cursor.left) {
          cursor.left = node
          node.parent = cursor
          break
        }
        cursor = cursor.left
      } else {
        if (!cursor.right) {
          cursor.right = node
          node.parent = cursor
          break
        }
        cursor = cursor.right
      }
    }

    this.size++
  }

  remove(key) {
    const node = this._findNode(key)
    if (!node) return
    const retValue = node.value

    if (node === this.root) {
      this.root = node.remove()
    } else {
      node.remove()
    }

    this.size--

    return retValue
  }
}

export default BST
