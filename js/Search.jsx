const React = require('react')
const data = require('../public/data')
const ShowCard = require('./ShowCard')

// key is needed for console/webpack complaint to go away. \
// key is a unique identifier

const Search = () => (
  <div className='container'>
    <div className='shows'>
      {data.shows.map((show) => (
        <ShowCard {...show} key={show.imbdID} />
      ))}
    </div>
  </div>
)

module.exports = Search
