const React = require('react');
const helpers = require('../utils/helpers');
const Link = require('react-router-dom').Link;
const PropTypes = require('prop-types');
const GameContainer = require('./GameContainer');

const GameSummary = (props) => {
  let team = props.selectedTeam;
  let game = props.game
  let pathname = `/teams/${team.id}/games/${game.id}/results`;

  return(
    <div className='game-summary-container'>
      <GameContainer team={team} game={game} opp={props.opp}>
        <Link className='button moon-button' to={{pathname}} onClick={props.handleClick}>Moon</Link>
        <Link className='reset-link' to='/teams'>Reset</Link>
      </GameContainer>
    </div>
  )
}

GameSummary.propTypes = {
  selectedTeam: PropTypes.object.isRequired,
  opp: PropTypes.object.isRequired,
  game: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

module.exports = GameSummary;
