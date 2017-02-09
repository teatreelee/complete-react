var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')


//stateless component
// </> slash is necessary because it says don'tlook for closing tag

//Lowercase says you want to use something native from React
//Caps state a component you made
var MyFirstComponent = function () {
	return (
		<div>
			<MyTitle title='Whatevs' color = 'rebeccapurple' />
			<MyTitle title='LOL' color = 'papayawhip' />
			<MyTitle title='OMGLOLWTFBBQ' color = '#f06d06' />
			<input/>
		</div>
	)
}

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
