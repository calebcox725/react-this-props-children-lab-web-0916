const React = require('react')

class ThemedDecorations extends React.Component {
  render() {
    let theme = this.props.theme
    let themedChildren = React.Children.map(this.props.children, child => {
      return (React.cloneElement(child, {className: theme}))
    })

    return (
      <div>
        {themedChildren}
      </div>
    )
  }
}

module.exports = ThemedDecorations
