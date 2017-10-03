const React = require('react');
const PropTypes = require('prop-types');
const GameContainer = require('./GameContainer');

class MoonResults extends React.Component {
  constructor(props) {
    super(props);
    this.State = {
      selectedGame:'',
      moonphase:'',
    }
  }
  render() {
    return(
      <div className='results-container'>
        <GameContainer game={this.props.game} team={this.props.team} opp={this.props.opp} />
      </div>

    )
  }
}


module.exports = MoonResults;
