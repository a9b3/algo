import BST from './BST.js'
import expect from 'expect'

describe('BST', () => {
  it('insert', async () => {
    const bst = new BST()

    expect(bst.find()).toNotExist()
    bst.insert(5, 'foo')
    expect(bst.size).toBe(1)
    expect(bst.find(5)).toBe('foo')

    bst.insert(2, 'bar')
    expect(bst.size).toBe(2)
    expect(bst.root.left.key).toBe(2)
    expect(bst.root.left.parent.key).toBe(5)
    expect(bst.find(2)).toBe('bar')

    bst.insert(10, 'zed')
    expect(bst.size).toBe(3)
    expect(bst.root.right.key).toBe(10)
    expect(bst.root.right.parent.key).toBe(5)
    expect(bst.find(10)).toBe('zed')

    bst.insert(1, 'one')
    expect(bst.size).toBe(4)
    expect(bst.root.left.left.key).toBe(1)
  })

  it('findMin', async () => {
    const bst = new BST()
    bst.insert(5, 5)
    bst.insert(2, 2)
    bst.insert(10, 10)
    bst.insert(1, 1)

    expect(bst.findMin()).toBe(1)
  })

  it('findMax', async () => {
    const bst = new BST()
    bst.insert(5, 5)
    bst.insert(2, 2)
    bst.insert(10, 10)
    bst.insert(1, 1)

    expect(bst.findMax()).toBe(10)
  })

  it('inorder', async () => {
    const bst = new BST()
    bst.insert(5, 5)
    bst.insert(2, 2)
    bst.insert(10, 10)
    bst.insert(1, 1)

    const arr = bst.inorder()
    expect(arr[0]).toBe(1)
    expect(arr[1]).toBe(2)
    expect(arr[2]).toBe(5)
    expect(arr[3]).toBe(10)

    const arr2 = bst.inorder(val => val+1)
    expect(arr2[0]).toBe(2)
    expect(arr2[1]).toBe(3)
    expect(arr2[2]).toBe(6)
    expect(arr2[3]).toBe(11)
  })

  describe('remove', () => {
    it('single node', async () => {
      const bst = new BST()
      bst.insert(1, 1)
      expect(bst.remove(1)).toBe(1)
      expect(bst.root).toNotExist()
      expect(bst.size).toBe(0)
    })

    it('leaf node (no children)', async () => {
      const bst = new BST()
      bst.insert(2, 2)
      bst.insert(1, 1)
      bst.insert(3, 3)

      expect(bst.remove(1)).toBe(1)
      expect(bst.root.value).toBe(2)
      expect(bst.root.left).toNotExist()
      expect(bst.root.right.value).toBe(3)
    })

    it('node with only left child', async () => {
      const bst = new BST()
      bst.insert(3, 3)
      bst.insert(2, 2)
      bst.insert(1, 1)
      bst.insert(4, 4)

      expect(bst.remove(2)).toBe(2)
      expect(bst.root.left.value).toBe(1)
      expect(bst.root.left.parent.value).toBe(3)
      expect(bst.size).toBe(3)
    })

    it('node with two child', async () => {
      const bst = new BST()
      bst.insert(2, 2)
      bst.insert(1, 1)
      bst.insert(3, 3)

      expect(bst.remove(2)).toBe(2)
      expect(bst.root.value).toBe(3)
      expect(bst.root.left.value).toBe(1)
      expect(bst.root.left.parent.value).toBe(3)
      expect(bst.size).toBe(2)
    })

    /*
     *       5
     *    2     10
     *  1   4
     *     3
     */
    it('complicated tree', async () => {
      const bst = new BST()
      bst.insert(5, 5)
      bst.insert(2, 2)
      bst.insert(4, 4)
      bst.insert(3, 3)
      bst.insert(10, 10)
      bst.insert(1, 1)

      expect(bst.root.left.left.value).toBe(1)
      expect(bst.root.left.right.left.value).toBe(3)
      expect(bst.root.left.right.value).toBe(4)
      expect(bst.root.left.value).toBe(2)
      expect(bst.root.value).toBe(5)
      expect(bst.root.right.value).toBe(10)

      /*
       *       5
       *    3     10
       *  1   4
       */
      bst.remove(2)
      expect(bst.root.left.left.value).toBe(1)
      expect(bst.root.left.right.value).toBe(4)
      expect(bst.root.left.right.left).toNotExist()
      expect(bst.root.left.right.right).toNotExist()
      expect(bst.root.left.value).toBe(3)
      expect(bst.root.left.left.value).toBe(1)
      expect(bst.root.left.right.value).toBe(4)
      expect(bst.root.value).toBe(5)
    })
  })
})
