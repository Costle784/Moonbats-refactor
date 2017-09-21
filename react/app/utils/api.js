var axios = require('axios');

module.exports = {
  getTeams: () => {
    return axios.get('http://localhost:3000/teams.json');
  }
}
