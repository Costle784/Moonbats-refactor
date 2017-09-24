var React = require('react');
var api = require('../utils/api')

class GamePage extends React.Component {
  constructor() {
    super();
    this.state = {
      opp:{},
      team:{}
    }
  }

  componentDidMount() {
    let gameId = this.props.match.params.id;
    let teamId = this.props.match.params.team_id;

    api.getTeam(teamId)
      .then((team) => {
        this.setState({
          team:team[0]
        })
      })
    api.getGame(gameId)
      .then((game) => {
        this.setState({
          opp:
        })
      })
  }


  render() {
    return(
      <div>Gamepage</div>
    )
  }
}

module.exports = GamePage;
