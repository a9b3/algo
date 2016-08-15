import styles from './queue.scss'
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Page from '../page/page.js'
import CodeSnippet from '../../../components/code-snippet/code-snippet.js'
import QueueVis from './queue-vis/queue-vis.js'

const snippet = `
class Node {
  constructor(value) {
    this.value = value
    this.prev
  }
}

class Queue {
  constructor({
    maxSize
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
`.trim()

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class QueuePage extends Component {
  render() {
    return <Page header='Queue'>
      <div styleName='body info'>
        First in first out.
      </div>

      <div styleName='body queue'>
        <QueueVis></QueueVis>
      </div>

      <div styleName='body info'>
        <CodeSnippet type='js'>
          {snippet}
        </CodeSnippet>
      </div>
    </Page>
  }
}
