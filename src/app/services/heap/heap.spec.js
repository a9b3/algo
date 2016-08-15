import Heap from './Heap.js'
import expect from 'expect'

describe('Heap', () => {
  it('insert/delete', async () => {
    const heap = new Heap()
    heap.insert(5)
    heap.insert(10)

    expect(heap.data[0]).toBe(10)
    expect(heap.data[1]).toBe(5)

    heap.insert(20)
    expect(heap.data[0]).toBe(20)

    heap.insert(25)
    expect(heap.data[0]).toBe(25)

    heap.insert(30)
    expect(heap.data[0]).toBe(30)

    heap.insert(24)
    expect(heap.data[0]).toBe(30)

    heap.insert(23)
    expect(heap.data[0]).toBe(30)

    heap.insert(22)
    expect(heap.data[0]).toBe(30)

    heap.insert(21)
    expect(heap.data[0]).toBe(30)

    heap.insert(1)
    expect(heap.data[0]).toBe(30)

    expect(heap.delete()).toBe(30)
    expect(heap.delete()).toBe(25)
    expect(heap.delete()).toBe(24)
    expect(heap.delete()).toBe(23)
    expect(heap.delete()).toBe(22)
    expect(heap.delete()).toBe(21)
    expect(heap.delete()).toBe(20)
    expect(heap.delete()).toBe(10)
    expect(heap.delete()).toBe(5)
    expect(heap.delete()).toBe(1)
    expect(heap.delete()).toNotExist()
  })
})
