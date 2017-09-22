const axios = require('axios');




const getTeams = () => {
  return axios.get('http://localhost:3000/teams.json')
}



module.exports = {
  getLeague: (league) => {
    return getTeams().then((response) => {
      if(league === 'All') {
        return response.data
      }
      else {
        return response.data.filter((team) => {
          return team.league === league;
        });
      }
    })
  },
  getTeam: (teamSymbol) => {
    return getTeams().then((response) => {
      return response.data.filter((team) => {
        return teamSymbol === team.symbol;
      })
    })
  },
  getGames: (x) => {
    console.log(x)
  }
}
