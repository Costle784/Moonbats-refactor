var React = require('react');
var api = require('../utils/api');

class ScheduleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team:{},
      games:[],
      logo:'',
    }
  }

  componentDidMount() {
    let teamSymbol = this.props.match.params.symbol

    let bteam;

    api.getTeam(teamSymbol)
      .then((team) => {
        api.getGames(team)
        this.setState({
          logo: team[0].logo
        })
      })


  }

  render() {


    return (
      <div>Schedule</div>
    )
  }
}

module.exports = ScheduleContainer;
