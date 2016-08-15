import styles from './stack-vis.scss'
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Stack from '../../../../services/stack/Stack.js'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class StackVis extends Component {
  state = {
    stack: new Stack({
      maxSize: 10,
    }),
    popped: undefined,
  }

  push = () => {
    this.state.stack.push(this.state.stack.size + 1)
    this.setState({})
  }

  pop = () => {
    const popped = this.state.stack.pop()
    this.setState({
      popped,
    })
  }

  renderStack = (stack) => {
    let node = stack.top

    let orderedNodes = []
    while(node) {
      orderedNodes.push(node)
      node = node.prev
    }
    orderedNodes = orderedNodes.reverse()

    console.log(orderedNodes)

    const elems = []
    for (let i = 0; i < stack.maxSize; i++) {
      if (i >= stack.size) {
        elems.push(
          <div styleName='node' key={i}>
          </div>
        )
      } else {
        elems.push(
          <div styleName='node filled' key={i}>
            {orderedNodes[i].value}
          </div>
        )
      }
    }

    return elems.reverse()
  }

  render() {
    return <div styleName='stack'>
      <div styleName='vis'>
        {this.renderStack(this.state.stack)}
      </div>

      <div styleName='info'>
        <div styleName='buttons'>
          <button styleName='button' onClick={this.push}>
            Push
          </button>
          <button styleName='button' onClick={this.pop}>
            Pop
          </button>
        </div>

        <div styleName='data'>
          <div styleName='row'>
            Size: {this.state.stack.size}
          </div>
          <div styleName='row'>
            Popped:

            {
              this.state.popped && <div styleName='node'>
                {this.state.popped}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  }
}
