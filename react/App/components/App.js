const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const Redirect = ReactRouter.Redirect;
const Header = require('./Header');
const Home = require('./Home');
const TeamSelect = require('./TeamSelect');
const GameSelect = require('./GameSelect');
const GameSummary = require('./GameSummary');
const api = require('../utils/api');
const MoonResults = require('./MoonResults');
const Loading = require('./Loading');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTeams:[],
      selectedTeam:{},
      opponent:{},
      selectedGame:{},
      matchingPhases:[],
      gamePhase:'',
      matchingGames:''
    }
    this.handleSelect = this.handleSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.moonClick = this.moonClick.bind(this);
  }

  componentDidMount() {
    api.getAllTeams()
      .then((teams) => {
        this.setState({
          allTeams:teams
        })
      })
  }
  //team select
  handleSelect(team) {
    this.setState({
      selectedTeam:team
    })
  }
  //game select
  handleClick(opponent, game, date){
    api.getGamePhase(date).then((response) => {

      this.setState({
        opponent:opponent,
        selectedGame:game,
        matchingPhases: response,
        gamePhase:parseInt(response[0].phase)
      })
    })
  }
  // moon button
  moonClick(id) {
    id=this.state.selectedTeam.id
      api.getPastGames(id).then((response) => {
        let filteredGames = response.filter((game) => {
          let moonMatch = this.state.matchingPhases.find((phase) => {
            return game.date === phase.date
          })
          return this.state.opponent.symbol === game.opp && moonMatch
        })
        this.setState({
          matchingGames: filteredGames
        })
      })
    }
  render() {
    return (
      <Router>
        <div className='container'>
          <Header />
          <Switch>
            <Route exact path='/Moonbats' component={Home} />
            <Redirect exact path='/' to='/Moonbats' />
            <Route exact path='/teams' render={ () =>
              <TeamSelect allTeams={this.state.allTeams}
                handleSelect={this.handleSelect} />
              }/>
            <Route exact path='/teams/:id/games' render={ () =>
              <GameSelect allTeams={this.state.allTeams} selectedTeam={this.state.selectedTeam} handleClick={this.handleClick} />
            }/>
            <Route exact path='/teams/:team_id/games/:id' render={ () =>
              <GameSummary selectedTeam={this.state.selectedTeam} opp={this.state.opponent} game={this.state.selectedGame} handleClick={this.moonClick} />
            }/>
            <Route path='/teams/:team_id/games/:id/results' render={ () =>
              this.state.matchingGames ? <MoonResults gamePhase={this.state.gamePhase}     game={this.state.selectedGame} phases={this.state.phases}  /> :
              <Loading text='Contacting Moon' speed={170} />
            }/>
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
