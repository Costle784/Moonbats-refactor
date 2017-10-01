const axios = require('axios');


module.exports = {
  getAllTeams: () => {
    return axios.get('http://localhost:3000/teams')
      .then((response) => {
        return response.data
      })
  },
  getGames: (id) => {
    let futureGamesPath = `http://localhost:3000/teams/${id}/futuregames`
    return axios.get(futureGamesPath).then((response) => {
      return response.data;
    })
  },
  getGamePhase: (date) => {
    let pathname = `http://localhost:3000/moonphases?date=${date}`

    return axios.get(pathname).then((response) => {
      return response.data
    })
  },
  getPastGames: (id) => {
    let pathname = `http://localhost:3000/teams/${id}/pastgames`

    return axios.get(pathname).then((response) => {
      return response.data
    })
  }
}
