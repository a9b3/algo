class Node {
  constructor(key, value) {
    this.key = key
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

  find(key) {
    const node = this._findNode(key)
    return node && node.value
  }

  _findNode(key, node=this.root) {
    if (!node) return
    if (node.key === key) return node

    return key < node.key
      ? this._findNode(key, node.left)
      : this._findNode(key, node.right)
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
    this.size--

    if (node.left && node.right) {
      let cursor = node.right

      if (cursor.left) {
        while(cursor.left) {
          cursor = cursor.left
        }

        if (!cursor.right) {
          node.value = cursor.value
          node.key = cursor.key
          cursor.parent.left = undefined
          return retValue
        } else {
          node.value = cursor.value
          node.key = cursor.key
          cursor.parent.left = cursor.right
          cursor.right.parent = cursor.parent
          return retValue
        }
      } else {
        node.value = cursor.value
        node.key = cursor.key
        node.right = cursor.right
        if (cursor.right) {
          cursor.right.parent = node
        }
        return retValue
      }
    } else if (node.left) {
      node.value = node.left.value
      node.key = node.left.key
      node.right = node.left.right
      node.left = node.left.left
      return retValue
    } else if (node.right) {
      node.value = node.right.value
      node.key = node.right.key
      node.left = node.right.left
      node.right = node.right.right
      return retValue
    } else {
      if (!node.parent) {
        this.root = undefined
      } else {
        if (node.parent.left === node) {
          node.parent.left = undefined
        } else if (node.parent.right === node) {
          node.parent.right = undefined
        }
      }
      return retValue
    }
  }
}

export default BST
