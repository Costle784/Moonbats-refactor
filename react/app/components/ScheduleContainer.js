var React = require('react');
var api = require('../utils/api');


function Logo(props) {
  return(
    <img
      src={props.team.logo}
      alt={`${props.team} logo`}
      className='logo'/>
  )
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

      </div>
    )
  }
}

module.exports = ScheduleContainer;
