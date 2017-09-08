var React = require('react');
var NavLink = require('react-router-dom').NavLink;


function SelectLeague(props) {
  let leagues = ['All','NL','AL'];

  return (
    <ul className='leagues'>
      {leagues.map((league) => {
        return (
          <li
            style={league === props.league ? {color:'#FF0000'} : null}
            onClick={props.onSelect.bind(null,league)}
            key={league}>
            {league}
          </li>
        )
      })}
    </ul>
  )
}




class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      league: 'All',
      teams: null
    }
  }

  render() {
    return (
      <div>
        <SelectLeague />
        <div>Teams</div>
      </div>
    )
  }
}

module.exports = Teams;
