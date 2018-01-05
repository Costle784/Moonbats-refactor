const React = require('react');
const NavLink = require('react-router-dom').NavLink;
const Link = require('react-router-dom').Link;
const api = require('../utils/api');
const helpers = require('../utils/helpers');
const PropTypes = require('prop-types');
const Loading = require('./Loading');


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
    <div className='team-grid'>
      {props.teams.map(function(team) {
        let pathname = `/teams/${team.id}/games`

        return (
            <Link key={team.symbol} onClick={props.handleSelect.bind(null,team)} to={{pathname}}    className='team-item'>
              <img
                className='teamselect-logo'
                src={team.logo}
                alt={`logo for the ${team.name}`}
              />
              <div>{team.name}</div>
            </Link>
        )
      })}
    </div>
  )
}

TeamGrid.propTypes = {
  teams: PropTypes.array.isRequired
}

class TeamSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLeague:'NL',
      teams: []
    }
    this.updateLeague = this.updateLeague.bind(this);
  }

  componentDidMount() {
    this.updateLeague(this.state.selectedLeague);
  }

  updateLeague(league) {
    if(this.props.allTeams.length === 0) {
      api.getAllTeams().then((teamArray) => {
        let leagueTeams = helpers.getTeamsInLeague(teamArray, league);
        this.setState({
          selectedLeague: league,
          teams: leagueTeams
        })
      })
    }
     else {
      let leagueTeams = helpers.getTeamsInLeague(this.props.allTeams, league)
      this.setState({
        selectedLeague: league,
        teams: leagueTeams
      })
    }
  }

  render() {
    return (
      <div className='centered-container'>
        <h1 className='teamselect-title'>Select a team to view 2018 schedule...</h1>
        <LeagueNav
          league={this.state.selectedLeague}
          onSelect={this.updateLeague}
        />
        {this.state.teams.length === 0 ?

          <Loading /> :
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
