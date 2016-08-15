import styles from './stack.scss'
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Page from '../page/page.js'
import StackVis from './stack-vis/stack-vis.js'
import CodeSnippet from '../../../components/code-snippet/code-snippet.js'

const snippet = `
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
      throw new Error(\`max size of ${this.maxSize} reached\`)
    }

    const node = new Node(value)

    node.prev = this.top
    this.top = node

    this.size++
  }

  pop() {
    let node = this.top
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
`.trim()

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class Stack extends Component {
  render() {
    return <Page header='Stack'>
      <div styleName='body info'>
        Last in first out. A stack stores data in a linear fashion, giving you the ability to push data onto a stack and pop data off of the stack. The defining characteristics of a stack is that the most recently added item is also the first item you can retrieve. This is similar to a stack of books, the last book you place onto a stack is the first one you can retrieve.
      </div>

      <div styleName='body stack'>
        <StackVis />
      </div>

      <div styleName='body info'>
        <CodeSnippet type='js'>
          {snippet}
        </CodeSnippet>
      </div>
    </Page>
  }
}
