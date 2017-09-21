var React = require('react');
var NavLink = require('react-router-dom').NavLink;
var api = require('../utils/api');
var PropTypes = require('prop-types');


function SelectLeague(props) {
  let leagues = ['All','NL','AL'];

  return (
    <ul className='leagues'>
      {leagues.map((league) => {
        return (
          <li
            className='league'
            style={league === props.league ? {color:'#FF0000'} : null}
            onClick={props.onSelect.bind(null,league)}
            key={league}>
            {league}
          </li>
        )
      })}
    </ul>
  )
}

SelectLeague.propTypes = {
  league: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

// function TeamGrid(props) {
//   return (
//
//   )
// }

class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLeague: 'All',
      teams: null
    }
    this.updateLeague = this.updateLeague.bind(this);
  }

  componentDidMount() {
    this.updateLeague(this.state.selectedLeague);
  }

  updateLeague(league) {
    this.setState({
      selectedLeague: league
    })
    api.getTeams(league)
      .then((teams) => {
        console.log(teams);
    })
  }

  render() {
    return (
      <div>
        <SelectLeague
          league={this.state.selectedLeague}
          onSelect={this.updateLeague}
        />
        {!this.state.teams ?
          <p>Loading</p> :
          <TeamGrid teams={this.state.teams} />}
      </div>
    )
  }
}

module.exports = Teams;
