const axios = require('axios');



module.exports = {
  getTeams: (league) => {
    return axios.get('http://localhost:3000/teams.json')
    .then((response) => {
      if(league === 'All') {
        return response.data
      }
      else {
        return response.data.filter((team) => {
          return team.league === league;
        });
      }
    })
  }
}
