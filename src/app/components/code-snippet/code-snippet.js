import styles from './code-snippet.scss'
import React, { Component, PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import hljs from 'highlight.js'

class CodeSnippet extends Component {
  static propTypes = {
    // classname for highlight.js to use to do syntax highlighting
    // http://highlightjs.readthedocs.io/en/latest/css-classes-reference.html
    type: PropTypes.string,
    children: PropTypes.string,
  }

  static defaultProps = {
    type: '',
  }

  highlightCode = () => {
    hljs.highlightBlock(this._codeEl)
  }

  componentDidMount() {
    this.highlightCode()
  }

  componentDidUpdate() {
    this.highlightCode()
  }

  render() {
    return <pre styleName='code-snippet'>
      <code
        className={this.props.type}
        ref={(c) => this._codeEl = c}
      >
        {this.props.children}
      </code>
    </pre>
  }
}

export default CSSModules(CodeSnippet, styles, {
  allowMultiple: true,
  errorWhenNotFound: false,
})
