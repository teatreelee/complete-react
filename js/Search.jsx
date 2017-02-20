const React = require('react')
const data = require('../public/data')
const ShowCard = require('./ShowCard')

// key is needed for console/webpack complaint to go away. \
// key is a unique identifier



//have to bind this when this syntaxis is uses
// class Search extends React.Component {
//   constructor(props) {
//     super(props)

//     this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
//   }
// }

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: 'this is my seach term'
    }
  },
  handleSearchTermEvent (event) {
    this.setState({ searchTerm: event.target.value })
  },
  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>{this.state.searchTerm}</h1>
          <input value={this.state.searchTerm} className='search-input' type='text' placeholder='Search' onChange={this.handleSearchTermEvent} />
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
