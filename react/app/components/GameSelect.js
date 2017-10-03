const React = require('react');
const api = require('../utils/api');
const helpers = require('../utils/helpers');
const Link = require('react-router-dom').Link;
const PropTypes = require('prop-types');
const Loading = require('./Loading');

const Logo = (props) => {
  return(
    <img
      src={props.team.logo}
      alt={`${props.team.name} logo`}
      className='logo'
    />
  )
}

Logo.propTypes = {
  team:PropTypes.object.isRequired
}

const Game = (props) => {
    let teamId = props.team.id;
    let teams = props.allTeams;
    let games = props.games;

    return(
      <div>
        <div className='gameselect-heading'>
          <h1 className='gameselect-title'>Select a Game...</h1>
          <Link className='button' to='/teams'>Reset</Link>
        </div>
        <ul className='game-grid'>
          {games.map((game) => {
            let date = game.date
            let opponent = teams.filter((team) => {
              return game.opp === team.symbol
            });
            let opp = opponent[0]
            let pathname = `/teams/${teamId}/games/${game.id}`

            return (
              <li key={game.id} className='game-item'>
                <Link className='team-list' to={{pathname}} onClick={props.handleClick.bind(null,     opp, game, date)}>
                  <div className='date'>{helpers.formatDate(date)}</div>
                  <div>{game.home === 'y' ?
                    <span>vs. {opp.name}</span>  : <span>@ {opp.name}</span>}
                  </div>
                  <img className='gameselect-logo' alt={`logo for ${opp.name}`} src={opp.logo}/>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
}

Game.propTypes = {
  team:PropTypes.object.isRequired,
  games:PropTypes.array.isRequired,
  allTeams:PropTypes.array.isRequired,
  handleClick:PropTypes.func.isRequired
}


class GameSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games:[]
    }
  }

  componentDidMount() {
    let id = this.props.selectedTeam.id;
    api.getGames(id)
      .then((games) => {
        this.setState({
          games: games
        })
      })
  }

  render() {
    return (
      <div className='schedule-container'>
        {this.state.games === [] ? <Loading /> :
        <div>
          <Game team={this.props.selectedTeam} games={this.state.games} allTeams={this.props.allTeams} handleClick={this.props.handleClick} />
          <Logo team={this.props.selectedTeam} />
        </div>}
      </div>
    )
  }
}

GameSelect.propTypes = {
  allTeams:PropTypes.array.isRequired,
  selectedTeam:PropTypes.object.isRequired,
  handleClick:PropTypes.func.isRequired
}

module.exports = GameSelect;
