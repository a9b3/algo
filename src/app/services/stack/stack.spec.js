import expect from 'expect'
import Stack from './Stack.js'

describe('Stack', () => {
  it('push', async () => {
    const stack = new Stack()
    expect(stack.size).toBe(0)
    stack.push(1)
    expect(stack.top.value).toBe(1)
    expect(stack.size).toBe(1)
    stack.push(2)
    expect(stack.size).toBe(2)
    expect(stack.top.value).toBe(2)
    expect(stack.top.prev.value).toBe(1)
  })

  it('pop', async () => {
    const stack = new Stack()
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.size).toBe(3)
    expect(stack.pop()).toBe(3)
    expect(stack.size).toBe(2)
    expect(stack.pop()).toBe(2)
    expect(stack.pop()).toBe(1)
    expect(stack.size).toBe(0)
    expect(stack.pop()).toNotExist()
  })

  it('peek', async () => {
    const stack = new Stack()
    expect(stack.peek()).toNotExist()
    stack.push(1)
    expect(stack.peek()).toBe(1)
    expect(stack.size).toBe(1)
  })

  it('setting maxSize', async () => {
    const stack = new Stack({ maxSize: 2 })
    stack.push(1)
    stack.push(2)

    try {
      stack.push(3)
    } catch (e) {
      expect(e).toExist()
      expect(stack.size).toBe(2)
    }
  })
})
