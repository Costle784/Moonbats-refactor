const React = require('react');
const PropTypes = require('prop-types');
const helpers = require('../utils/helpers');


const GameContainer = (props) => {
  let team = props.team;
  let opp = props.opp;
  let game = props.game;
  let date = helpers.formatDate(game.date);

  return (
    <div className='schedule-container'>
      <div className='game-container'>
        <div className='team-list'>
          <img className='game-container-logo' src={team.logo} alt={`${team.name} logo`} />
          <p className='team-name'>{team.name}</p>
        </div>
        <ul>
          <li className='game-date'>{game.date}</li>
          <li className='game-location'>{game.location}</li>
          <br />
          <li className='vs'>vs</li>
        </ul>
        <div className='team-list'>
          <img className='game-container-logo' src={opp.logo} alt={`${opp.name} logo`} />
          <p className='team-name'>{opp.name}</p>
        </div>
      </div>
      {props.children}
    </div>  
  )
}

GameContainer.propTypes = {
  team: PropTypes.object.isRequired,
  game: PropTypes.object.isRequired,
  opp: PropTypes.object.isRequired
}


module.exports = GameContainer;
