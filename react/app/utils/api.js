const axios = require('axios');


module.exports = {
  getAllTeams: () => {
    return axios.get('https://moonbats.herokuapp.com/teams')
      .then((response) => {
        return response.data
      })
    },
  getGames: (id) => {
    let futureGamesPath = `https://moonbats.herokuapp.com/teams/${id}/futuregames`
    return axios.get(futureGamesPath).then((response) => {
      return response.data;
    })
  },
  getGamePhase: (date) => {
    let pathname = `https://moonbats.herokuapp.com/moonphases?date=${date}`

    return axios.get(pathname).then((response) => {
      return response.data
    })
  },
  getPastGames: (id) => {
    let pathname = `https://moonbats.herokuapp.com/teams/${id}/pastgames`

    return axios.get(pathname).then((response) => {
      return response.data
    })
  }
}
