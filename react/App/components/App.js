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


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTeams:[],
      selectedTeam:{}
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    api.getAllTeams()
      .then((teams) => {
        this.setState({
          allTeams:teams,
          selectedTeam:{}
        })
      })
  }

  handleSelect(team){
    this.setState({
      selectedTeam:team
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
            <Route exact path='/teams' render={() =>
              <Teams allTeams={this.state.allTeams}
                    handleSelect={this.handleSelect}
              />
            }/>
            <Route exact path='/teams/:id/games' render={() =>
              <ScheduleContainer allTeams={this.state.allTeams}   />
            }/>
            <Route path='/teams/:team_id/games/:id' component={GamePage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;

// <Route exact path='/teams/:id/games' render={()=> <ScheduleContainer selectedTeam={this.state.selectedTeam} schedule={this.state.schedule} clearSearch={() => this.clearSearch()}/>
