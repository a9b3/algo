import styles from './footer.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'

@CSSModules(styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
export default class Footer extends Component {
  static propTypes = {
    nodes: PropTypes.any,
  }

  static defaultProps = {
    nodes: [
      {
        link: 'http://github.com/esayemm',
        faicon: 'github',
        displayName: '',
      },
      {
        link: 'https://www.linkedin.com/in/sam-lau-708502104',
        faicon: 'linkedin',
        displayName: '',
      },
    ],
  }

  render() {
    return <div styleName='footer'>
      {this.props.nodes.map((node, i) => {
        return <a key={i} href={node.link} styleName='social'>
          {node.faicon && <i className={`fa fa-${node.faicon}`} />}
          {node.displayName && <div>{node.displayName}</div>}
        </a>
      })}
    </div>
  }
}
