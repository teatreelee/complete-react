const React = require('react')
const ReactDOM = require('react-dom')

//stateless component
// </> slash is necessary because it says don'tlook for closing tag

//Lowercase says you want to use something native from React
//Caps state a component you made

//class is reserved in js, so we need to use className for css
const App = () => (
		<div className='app-container'>
			<div className='home-info'>
				<h1 className='title'>svideo</h1>
				<input className='search' type='text' placeholder='Search' />
				<button className='browse-all'>or Browse All</button>
			</div>
		</div>
)

ReactDOM.render(<App />, document.getElementById('app'))
