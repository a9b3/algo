import styles from './shell.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import Sidebar from './sidebar/sidebar.js'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class Shell extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return <div styleName='shell'>
      <div styleName='sidebar'>
        <Sidebar />
      </div>

      <div styleName='content'>
        {this.props.children}
      </div>
    </div>
  }
}
