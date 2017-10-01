const React = require('react');
const NavLink = require('react-router-dom').NavLink;
const Link = require('react-router-dom').Link;
const api = require('../utils/api');
const PropTypes = require('prop-types');


//Nav
const LeagueNav = (props) => {
  let leagues = ['NL','AL'];

  return (
    <nav>
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
    </nav>
  )
}

LeagueNav.propTypes = {
  league: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

const TeamGrid = (props) => {
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

class TeamSelect extends React.Component {
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
        <LeagueNav
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

TeamSelect.propTypes = {
  allTeams:PropTypes.array.isRequired,
  handleSelect:PropTypes.func.isRequired
}

module.exports = TeamSelect;
