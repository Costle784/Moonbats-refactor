const React = require('react');
const PropTypes = require('prop-types');
const GameContainer = require('./GameContainer');
const moonphases = require('../utils/moonphases');
const Link = require('react-router-dom').Link;
const Loading = require('./Loading');

class MoonResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games:false,
    }
  }

  componentDidMount() {
    this.setState({
      games:this.props.games
    })
  }


  render() {
    let gameTally = this.props.games.reduce((tally,game) => {
      if(game.wl === 'W') {
        tally.wins += 1;
      }
      tally.total += 1;
      return tally
    }, {wins:0, total:0});

    console.log(gameTally)
    let percentage = `%${Math.round(gameTally.wins / gameTally.total * 100)}`


    let moonPhase = moonphases.find((phase) => {
      return phase.phaseNum === this.props.gamePhase
    })



    return(
      <div className='centered-container'>
        <GameContainer game={this.props.game} team={this.props.team} opp={this.props.opp}>
          <div className='centered-container'>
            <Link className='reset-button' to='/teams'>Reset</Link>
            <hr className='hr' />
            <p className='phase-name'>{moonPhase.phase} Moon</p>
            <div className='moon-info'>
            <img src={moonPhase.img} alt={`photo of ${moonPhase.phase}`} className='moon-image' />
              {!this.props.games.length ?
                <p>These two teams have never played on a {moonPhase.phase} moon. Make another selection</p> :
                <p className='moongame-info'>The {this.props.team.name} have a winning percentage of {percentage} against the {this.props.opp.name} on a {moonPhase.phase} moon</p>}
            </div>
          </div>
        </GameContainer>
      </div>

    )
  }
}


module.exports = MoonResults;
