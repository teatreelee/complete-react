const React = require('react')
const { Link } = require('react-router')

// stateless component
// </> slash is necessary because it says don'tlook for closing tag

// Lowercase says you want to use something native from React
// Caps state a component you made

// class is reserved in js, so we need to use className for css
const Landing = () => (
    <div className='home-info'>
      <h1 className='title'>svideo</h1>
      <input className='search' type='text' placeholder='Search' />
      <Link to='/search' className='browse-all'>or Browse All</Link>
    </div>
)

module.exports = Landing
