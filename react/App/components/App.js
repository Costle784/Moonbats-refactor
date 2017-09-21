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


class App extends React.Component {
  constructor() {
    super()


  }

  render() {
    return (
      <Router>
        <div className='container'>
          <Header />
          <Switch>
            <Route exact path='/Moonbats' component={Home} />
            <Redirect exact path='/' to='/Moonbats' />
            <Route path='/teams' component={Teams} />
            <Route path='/teams/:id' component={ScheduleContainer} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
