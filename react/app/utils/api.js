const axios = require('axios');


module.exports = {
  getAllTeams: () => {
    return axios.get('http://localhost:3000/teams')
      .then((response) => {
        return response.data
      })
    },
  // getTeamsInLeague: (league) => {
  //   return getAllTeams().then((response) => {
  //     return response.data.filter((team) => {
  //         return team.league === league;
  //       });
  //     })
  //   },
  // getTeam: (id) => {
  //   return getAllTeams().then((response) => {
  //     return response.data.filter((team) => {
  //       return team.id == id;
  //     })
  //   })
  // },
  getGames: (id) => {
    let futureGamesPath = `http://localhost:3000/teams/${id}/futuregames`
    return axios.get(futureGamesPath).then((response) => {
      return response.data;
    })
  }
  // getGame: (gameId, teamId ) => {
  //   let futureGamesPath = `http://localhost:3000/teams/${teamId}/futuregames`
  //   return axios.get(futureGamesPath).then((response) => {
  //     return response.data.filter((game) => {
  //       return game.id == gameId
  //
  //
  //     })
  //   })
  // }
}
