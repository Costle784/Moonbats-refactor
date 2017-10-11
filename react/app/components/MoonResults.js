const React = require('react');
const PropTypes = require('prop-types');
const GameContainer = require('./GameContainer');
const moonphases = require('../utils/moonphases');
const Link = require('react-router-dom').Link;
const Loading = require('./Loading');
const helpers = require('../utils/helpers');

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

  componentWillUnmount() {
    this.props.moonSwitch();
  }

  render() {
    let gameTally = this.props.games.reduce((tally,game) => {
      if(game.wl === 'W') {
        tally.wins += 1;
      }
      tally.total += 1;
      return tally
    }, {wins:0, total:0});

    let ratio = gameTally.wins / gameTally.total;

    let percentage = `${Math.round(gameTally.wins / gameTally.total * 100)}%`

    let moonPhase = moonphases.find((phase) => {
      return phase.phaseNum === this.props.gamePhase
    });

    return(
      <div className='centered-container'>
        <div className='moonphase-chart-container'>
          <p className='moonphase-chart-thumb'>click to enlarge</p>
          <Link to='http://i49.servimg.com/u/f49/16/59/69/37/moonph10.jpg' target='_blank'>
            <img src={'http://i49.servimg.com/u/f49/16/59/69/37/moonph10.jpg'} className='moonphase-chart' />
          </Link>
        </div>
        <div className='result-gameinfo-container'>
          <p className='result-gameinfo'>{this.props.team.name} vs {this.props.opp.name}</p>
          <p className='result-gameinfo'>{helpers.formatDate(this.props.game.date)}</p>
          <p className='result-gameinfo'>{this.props.game.location}</p>
        </div>
        <div className='game-container moongame-container'>
          {!this.props.games.length ?
            <p className='no-result'>These two teams have never played on a {moonPhase.phase} moon. Make another selection</p> :
            ratio === .5 ?
              <p className='no-result'>Push. Please select another game.</p> :

              ratio > .5 ?
              <div className='results-item winner'>
                <h1 className='results-titles'>Winner</h1>
                <p className='team-name'>{this.props.team.name}</p>
                <img src={this.props.team.logo} alt={`${this.props.team.name} logo`} className='team-select-logo' />
              </div>
              :
              <div className='results-item winner'>
                <h1 className='results-titles'>Winner</h1>
                <p className='team-name'>{this.props.opp.name}</p>
                <img src={this.props.opp.logo} className='team-select-logo' alt={`${this.props.opp.name} logo`} />
              </div>
          }
          <div className='results-item'>
            <h1 className='results-titles'>{moonPhase.phase} Moon</h1>
            <img src={moonPhase.img} alt={`photo of ${moonPhase.phase}`} className='team-select-logo moon-image' />
          </div>
        </div>
        <div className='centered-container'>
          <p className='result-text'>
            The {this.props.team.name} have won {gameTally.wins} of {gameTally.total} ({percentage}) against the {this.props.opp.name} on a {moonPhase.phase} moon
          </p>
        <p><Link className='reset-button results-reset' to='/teams'> &#8592; Back to Teams</Link></p>
        </div>

    </div>
    )
  }
}

MoonResults.propTypes = {
  gamePhase:PropTypes.number.isRequired,
  team:PropTypes.object.isRequired,
  game:PropTypes.object.isRequired,
  opp:PropTypes.object.isRequired,
  games:PropTypes.array.isRequired,
  moonSwitch:PropTypes.func.isRequired
}


module.exports = MoonResults;
