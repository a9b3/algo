import styles from './queue-vis.scss'
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Queue from '../../../../services/queue/Queue.js'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class QueueVis extends Component {
  state = {
    queue: new Queue(),
    counter: 0,
  }

  enqueue = () => {
    this.state.queue.enqueue(this.state.counter++)
    this.setState({
      counter: this.state.counter++,
    })
  }

  dequeue = () => {
    this.state.queue.dequeue()
    this.setState({})
  }

  renderQueue = (queue) => {
    let node = queue.tail
    let i = 0

    const elems = []
    while(node) {
      elems.push(
        <div styleName='node' key={i}>
          {node.value}

          {
            i === 0 && <div styleName='node-info'>
              Tail
            </div>
          }

          {
            i === queue.size-1 && <div styleName='node-info'>
              Head
            </div>
          }
        </div>
      )

      node = node.prev
      i++
    }
    return elems.reverse()
  }

  render() {
    return <div styleName='queue-vis'>
      <div styleName='vis'>
        <div styleName='queue'>
          {this.renderQueue(this.state.queue)}
        </div>
      </div>

      <div styleName='info'>
        <div styleName='buttons'>
          <button onClick={this.enqueue}>
            Enqueue
          </button>

          <button onClick={this.dequeue}>
            Dequeue
          </button>
        </div>

        <div styleName='data'>
          <div styleName='row'>
            Size: {this.state.queue.size}
          </div>
        </div>
      </div>
    </div>
  }
}
