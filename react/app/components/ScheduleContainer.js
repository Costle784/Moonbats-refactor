var React = require('react');
var api = require('../utils/api');
var Link = require('react-router-dom').Link;


function Logo(props) {
  return(
    <img
      src={props.team.logo}
      alt={`${props.team} logo`}
      className='logo'/>
  )
}


function displayDate(date) {
  let newDate = [];
  let d = date.split('');

  newDate.push(d[5], d[6], d[7], d[8],d[9],'-',d[0], d[1], d[2], d[3]);
  return newDate.join('')
}

class Game extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      opp:''
    }
  }

  // fetchTeam(symbol) {
  //   api.getTeam(symbol)
  //     .then((response) => {
  //       this.setState({
  //         opp:response[0].name
  //       })
  //     })
  // }


  render() {
    console.log(this)
    return (

      <ul className='game-grid'>
        {this.props.games.map(function(game) {
          let teamId = this.props.team.id


          let pathname = `/teams/${teamId}/games/${game.id}`
          let date = game.date

          return (
            <li key={game.id} className='team-item'>
              <Link className='team-list' to={{pathname}} >
                <div>{displayDate(game.date)}</div>
                <p>{game.home === 'y' ?
                      <span>@</span>  : <span>vs.</span>}
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }
}

class ScheduleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team:{},
      games:[]
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    api.getTeam(id)
      .then((team) => {
        this.setState({
          team: team[0]
        })
      })
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
        <Logo team={this.state.team} />
        <Game team={this.state.team} games={this.state.games} />
      </div>
    )
  }
}

module.exports = ScheduleContainer;
