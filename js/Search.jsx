const React = require('react')
const data = require('../public/data')
const ShowCard = require('./ShowCard')

// key is needed for console/webpack complaint to go away. \
// key is a unique identifier

const Search = React.createClass({
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>svideo</h1>
          <input className='search-input' type='text' placeholder='Search' />
        </header>
        <div className='shows'>
          {data.shows.map((show) => (
            <ShowCard {...show} key={show.imbdID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search
