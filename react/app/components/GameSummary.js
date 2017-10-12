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
      <GameContainer team={team} game={game} opp={props.opp}>
        <p className='gamesummary-text'>Click for results</p>
        <Link className='moon-button' to={{pathname}} onClick={props.handleClick}>Moon</Link>
        <Link className='reset-button' to='/teams'> &#8592; Back to Teams</Link>
      </GameContainer>
  )
}

GameSummary.propTypes = {
  selectedTeam: PropTypes.object.isRequired,
  opp: PropTypes.object.isRequired,
  game: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

module.exports = GameSummary;
