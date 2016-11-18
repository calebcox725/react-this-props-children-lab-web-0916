const React = require('react')

class Invitation extends React.Component {
  render() {
    let text = "You've been invited!"

    return (
      <div>
        <h1>{text}</h1>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

module.exports = Invitation
