import styles from './sidebar.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import { getSidebarNodes } from './sidebar.service.js'
import Footer from '../footer/footer.js'
import NavNode from '../nav-node/nav-node.js'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class Sidebar extends Component {
  static propTypes = {
    title: PropTypes.string,
    nodes: PropTypes.any,
  }

  static defaultProps = {
    title: 'Notes',
    nodes: getSidebarNodes(),
  }

  renderNodes = (nodes) => {
    return nodes.map((node, i) => {
      return <NavNode node={node}
        key={node.displayName+i}
        className={styles.navnode}
      />
    })
  }

  render() {
    return <div styleName='sidebar'>
      <div styleName='title item'>
        {this.props.title}
      </div>

      <div styleName='content'>
        {this.renderNodes(this.props.nodes)}
      </div>

      <div styleName='end'>
        <Footer />
      </div>
    </div>
  }
}
