const React = require('react');
const helpers = require('../utils/helpers');
const Link = require('react-router-dom').Link;
const PropTypes = require('prop-types');

const GameSummary = (props) => {
  let team = props.selectedTeam;
  let opp = props.opp;
  let game = props.game;
  let pathname = `/teams/${team.id}/games/${game.id}/results`;
  let date = helpers.formatDate(game.date);

    return(
      <div className='game-container'>
        <h2 className='game-date'>{date}</h2>
        <div className='game-location'>
          <h2>{game.location}</h2>
        </div>
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
        <Link className='button moon-button' to={{pathname}} onClick={props.handleClick}>Moon</Link>
      </div>

    )
  }

  GameSummary.propTypes = {
    selectedTeam:PropTypes.object.isRequired,
    opp:PropTypes.object.isRequired,
    game:PropTypes.object.isRequired,
    handleClick:PropTypes.func.isRequired
  }


module.exports = GameSummary;
