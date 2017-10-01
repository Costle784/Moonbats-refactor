var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Redirect = ReactRouter.Redirect;
var Header = require('./Header');
var Home = require('./Home');
var Teams = require('./Teams');
var ScheduleContainer = require('./ScheduleContainer');
var GamePage = require('./GamePage');
var api = require('../utils/api');
var Results = require('./Results');
var Loading = require('./Loading');


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

    setTimeout( () => {this.setState({
      matchingGames:id
    })}, 2500);

    // api.getPastGames(id).then((response) => {
    //   this.setState({
    //     matchingGames:response.data
    //   })
    // });

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
              <Teams allTeams={this.state.allTeams}
                handleSelect={this.handleSelect} />
              }/>
            <Route exact path='/teams/:id/games' render={ () =>
              <ScheduleContainer allTeams={this.state.allTeams} selectedTeam={this.state.selectedTeam} handleClick={this.handleClick} />
            }/>
            <Route exact path='/teams/:team_id/games/:id' render={ () =>
              <GamePage selectedTeam={this.state.selectedTeam} opp={this.state.opponent} game={this.state.selectedGame} handleClick={this.moonClick} />
            }/>
            <Route path='/teams/:team_id/games/:id/results' render={ () =>
              this.state.matchingGames ? <Results gamePhase={this.state.gamePhase}     game={this.state.selectedGame} phases={this.state.phases}  /> :
              <Loading text='Contacting Moon' speed={170} />
            }/>

          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
