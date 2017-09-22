const axios = require('axios');




const getAllTeams = () => {
  return axios.get('http://localhost:3000/teams.json')
}



module.exports = {
  getTeamsInLeague: (league) => {
    return getAllTeams().then((response) => {
      return response.data.filter((team) => {
          return team.league === league;
        });
      })
    },
  getTeam: (teamSymbol) => {
    return getAllTeams().then((response) => {
      return response.data.filter((team) => {
        return teamSymbol === team.symbol;
      })
    })
  },
  getGames: (x) => {
    console.log(x)
  }
}
