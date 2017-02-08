var React = require('react')
var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
            <div>
              <h1 style={ {color: this.props.color} }> //literally object in expression
                  {this.props.title}
              </h1>
            </div>
    )
  }
})

module.exports = MyTitle
