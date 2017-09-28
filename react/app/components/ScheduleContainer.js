var React = require('react');
var api = require('../utils/api');
var Link = require('react-router-dom').Link;



function Logo(props) {
  return(
    <img
      src={props.team.logo}
      alt={`${props.team.name} logo`}
      className='logo'
    />
  )
}

function Game(props){
    let teamId = props.team.id;
    let teams = props.allTeams;
    let games = props.games;

    return(
      <div>
        <h1 className='schedule-heading'>Select a Game...</h1>
        <ul className='game-grid'>
          {games.map((game) => {
            let opponent = teams.filter((team) => {
              return game.opp === team.symbol
            });
            let opp = opponent[0].name
            let pathname = `/teams/${teamId}/games/${game.id}`

            return (
              <li key={game.id} className='game-item'>
                <Link className='team-list' to={{pathname}} onClick={props.handleClick.bind(null,     opponent[0], game)}>
                  <div className='date'>{api.displayDate(game.date)}</div>
                  <div>{game.home === 'y' ?
                    <span>vs. {opp}</span>  : <span>@ {opp}</span>}
                  </div>
                  <img className='minilogo' alt={`logo for ${opponent[0].name}`} src={opponent[0].logo}/>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
}

class ScheduleContainer extends React.Component {
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
        <Logo team={this.props.selectedTeam} />
        <Game team={this.props.selectedTeam} games={this.state.games} allTeams={this.props.allTeams} handleClick={this.props.handleClick} />
      </div>
    )
  }
}

module.exports = ScheduleContainer;
