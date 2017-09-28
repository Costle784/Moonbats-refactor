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


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTeams:[],
      selectedTeam:{},
      opponent:{},
      selectedGame:{},
      phases:['New','Waxing Crescent','First Quarter','Waxing Gibbous','Full','Waning Gibbous','Last Quarter','Waning Crescent']
    }
    this.handleSelect = this.handleSelect.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    api.getAllTeams()
      .then((teams) => {
        this.setState({
          allTeams:teams
        })
      })
  }

  handleSelect(team) {
    this.setState({
      selectedTeam:team
    })
  }

  handleClick(team, game){
    this.setState({
      opponent:team,
      selectedGame:game
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
              <Teams allTeams={this.state.allTeams}
                handleSelect={this.handleSelect} />
              }/>
            <Route exact path='/teams/:id/games' render={ () =>
              <ScheduleContainer allTeams={this.state.allTeams} selectedTeam={this.state.selectedTeam} handleClick={this.handleClick} />
            }/>
            <Route exact path='/teams/:team_id/games/:id' render={ () =>
              <GamePage selectedTeam={this.state.selectedTeam} opp={this.state.opponent} game={this.state.selectedGame} />
            }/>
            <Route path='/teams/:team_id/games/:id/results' render={ (props) =>
              <Results game={this.state.selectedGame} phases={this.state.phases}  />
            }/>
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
