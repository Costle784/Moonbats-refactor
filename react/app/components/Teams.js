var React = require('react');
var NavLink = require('react-router-dom').NavLink;
var Link = require('react-router-dom').Link;
var api = require('../utils/api');
var PropTypes = require('prop-types');



function SelectLeague(props) {
  let leagues = ['NL','AL'];

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

function TeamGrid(props) {
  return (
    <ul className='team-grid'>
      {props.teams.map(function(team) {
        let pathname = `/teams/${team.id}/games`

        return (
          <li key={team.symbol} className='team-item'>
            <Link onClick={props.handleSelect.bind(null,team)} className='team-list' to={{pathname}} >
              <img
                className='logo'
                src={team.logo}
                alt={`logo for the ${team.name}`}
              />
              <div>{team.name}</div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

TeamGrid.propTypes = {
  teams: PropTypes.array.isRequired
}

class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLeague: 'NL',
      teams: []
    }
    this.updateLeague = this.updateLeague.bind(this);
  }

  componentDidMount() {
    this.updateLeague(this.state.selectedLeague);
  }

  updateLeague(league) {
    let leagueTeams = this.props.allTeams.filter((team) => {
      return league === team.league;
    })
    this.setState({
      selectedLeague: league,
      teams:leagueTeams
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
          <TeamGrid teams={this.state.teams} handleSelect={this.props.handleSelect} />}
      </div>
    )
  }
}

module.exports = Teams;
