import styles from './data-structures.scss'
import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import Page from '../page/page.js'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class DataStructures extends Component {
  static propTypes = {

  }

  static defaultProps = {

  }

  state = {

  }

  render() {
    return <Page header='Data Structures'>
      <div styleName='body'>
        Hello
      </div>
    </Page>
  }
}
