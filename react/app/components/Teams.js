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

function TeamGrid(props) {
  return (

  )
}



class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLeague: 'All',
      teams: null
    }
  }

  componentDidMount() {
    this.updateLeague(this.state.selectedLeague);
  }

  updateLeague(league) {
    this.setState 
  }

  render() {
    return (
      <div>
        <SelectLeague
          league={this.state.selectedLeague}
          onSelect={this.updateLeague}
        />
        {!this.state.teams ?
          <p>Loading</p> :
          <TeamGrid teams={this.state.teams} />}
      </div>
    )
  }
}

module.exports = Teams;
