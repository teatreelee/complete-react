var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')
var div = React.DOM.div
// methods for cleaner code
var MyTitleFactory = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
    div(null,
        // MyTitleFactory, React.createElement(MyTitle, null), and ce(MyTitle, null) all achieve the same thing
        MyTitleFactory({title: 'Hello', color: 'rebeccapurple'}),
        React.createElement(MyTitle, {title: 'World', color: 'mediumaquamarine'}),
        ce(MyTitle, {title: '!', color: 'peru'})
    )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
