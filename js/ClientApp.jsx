const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const Search = require('./Search')
const ReactRouter = require('react-router')
const Layout = require('./Layout')

const { Router, Route, IndexRoute, hashHistory } = ReactRouter

// Inside a router, we are going to have several routes.
// hashHistory allows us to keep track of routes.
const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} />
    </Route>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
