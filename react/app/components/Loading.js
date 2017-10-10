const React = require('react');
const PropTypes = require('prop-types');

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    };
  }

  componentDidMount() {
    let stopper = `...${this.props.text}...`;

    this.interval = window.setInterval(function() {
      if(this.state.text === stopper) {
        this.setState({
            text: this.props.text
          })
      } else {
        this.setState(function(prevState) {
          return {
            text: `.${prevState.text}.`
          }
        })
      }
    }.bind(this), this.props.speed)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
        <p className='loading'>
          {this.state.text}
        </p>
      )
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 200
}

// <div className='centered-container'>

  //   <h1>Winner:</h1>
  //   <h2>hello</h2>
  //   // {ratio > 50 ?
  //   //   <img src={this.props.team.logo}> :
  //   //   <img src={this.props.opp.logo}>
  //   // }
  //     // <div className='centered-container'>
  //     //   <Link className='reset-button' to='/teams'>Reset</Link>
  //     //   <hr className='hr' />
  //     //   <p className='phase-name'>{moonPhase.phase} Moon</p>
  //     //   <div className='moon-info'>
  //     //     <img src={moonPhase.img} alt={`photo of ${moonPhase.phase}`} className='moon-image' />
  //     //     {!this.props.games.length ?
  //     //       <p className='moongame-info'>These two teams have never played on a {moonPhase.phase} moon. Make another selection</p> :
  //     //       <p className='moongame-info'>The {this.props.team.name} have won {gameTally.wins} of {gameTally.total} ({percentage}) against the {this.props.opp.name} on a {moonPhase.phase} moon</p>}
  //     //   </div>

  // .moongame-info {
  //   padding:10px;
  //   font-size:1em;
  // }

module.exports = Loading;
