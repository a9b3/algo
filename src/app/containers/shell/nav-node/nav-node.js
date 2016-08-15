import styles from './nav-node.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class NavNode extends Component {
  static propTypes = {
    node: PropTypes.shape({
      displayName: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(PropTypes.any).isRequired,
      link: PropTypes.string,
    }).isRequired,
    className: PropTypes.string,
  }

  static defaultProps = {
    node: {
      displayName: 'hi',
      children: [],
    },
  }

  state = {
    expanded: false,
  }

  toggleExpand = () => {
    this.setState({
      expanded: !this.state.expanded,
    })
  }

  renderChildren(children) {
    return children.map((child, i) => {
      return <NavNode
        key={child.displayName+i}
        node={child}
        className={this.props.className}
      />
    })
  }

  render() {
    const hasChild = this.props.node.children.length > 0
    const hasChildClassName = hasChild ? styles['has-child'] : ''

    return <div className={`${styles['nav-node']} ${this.props.className}`}>
      <div className={`${styles.title} ${hasChildClassName}`}>
        <Link to={this.props.node.link}>
          {this.props.node.displayName}
        </Link>

        {
          hasChild && <i className='fa fa-chevron-down' onClick={this.toggleExpand} />
        }
      </div>

      {
        this.state.expanded && <div className={styles.children}>
          {this.renderChildren(this.props.node.children)}
        </div>
      }
    </div>
  }
}
