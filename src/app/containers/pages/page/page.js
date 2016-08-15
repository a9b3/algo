import styles from './page.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class Page extends Component {
  static propTypes = {
    header: PropTypes.string.isRequired,
    children: PropTypes.node,
  }

  render() {
    return <div styleName='page'>
      <div styleName='header'>
        {this.props.header}
      </div>

      <div styleName='content'>
        {this.props.children}
      </div>
    </div>
  }
}
