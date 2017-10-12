const React = require('react');
const api = require('../utils/api');
const helpers = require('../utils/helpers');
const Link = require('react-router-dom').Link;
const PropTypes = require('prop-types');
const Loading = require('./Loading');

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

    let teamId = this.props.selectedTeam.id;
    let games = this.state.games;
    let teams = this.props.allTeams;

    return (
      <div className='centered-container'>
        {!this.state.games ? <Loading /> :
          <div>
            <Link className='reset-button' to='/teams'> &#8592; Back to Teams</Link>
            <img className='teamselect-logo' src={this.props.selectedTeam.logo} />
            <h1 className='teamselect-title'>Select a Game...</h1>

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
                    <Link to={{pathname}} onClick={this.props.handleClick.bind(null, opp, game, date)}>
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
        }
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
