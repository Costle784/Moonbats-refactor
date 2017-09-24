const axios = require('axios');


const getAllTeams = () => {
  return axios.get('http://localhost:3000/teams.json');
}





module.exports = {
  getTeams: () => {
    return getAllTeams()
      .then((response) => {
        return response.data
      })
  },
  getTeamsInLeague: (league) => {
    return getAllTeams().then((response) => {
      return response.data.filter((team) => {
          return team.league === league;
        });
      })
    },
  getTeam: (id) => {
    return getAllTeams().then((response) => {
      return response.data.filter((team) => {
        return team.id == id;
      })
    })
  },
  getGames: (id) => {
    let futureGamesPath = `http://localhost:3000/teams/${id}/futuregames`
    return axios.get(futureGamesPath).then((response) => {
      return response.data;
    })
  }
}
