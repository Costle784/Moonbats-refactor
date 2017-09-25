var React = require('react');
var api = require('../utils/api')

function GamePage(props) {
  let team = props.selectedTeam;
  let opp = props.opp;
  let game = props.game

  console.log(props.opp)

    return(
      <div className='game-container'>
        <h2 className='game-date'>{game.date}</h2>
        <div className='selected-game-container'>
          <div className='team-list'>
            <img src={team.logo} alt={`logo for ${team.name}`} className='logo'/>
            <p className='team-name'>{team.name}</p>
          </div>
          <p className='vs'>VS.</p>
          <div className='team-list'>
            <img src={opp.logo} alt={`logo for ${opp.name}`} className='logo'/>
            <p className='team-name'>{opp.name}</p>
          </div>
        </div>
        <div className='game-location'>
          <h2>{game.location}</h2>
        </div>
      </div>

    )
  }


module.exports = GamePage;
