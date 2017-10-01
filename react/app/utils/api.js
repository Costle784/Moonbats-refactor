const axios = require('axios');


module.exports = {
  getAllTeams: () => {
    return axios.get('http://localhost:3000/teams')
      .then((response) => {
        return response.data
      })
<<<<<<< HEAD
  },
=======
    },
>>>>>>> 6a814c3af8eab112c985ea19f0327017ca8a6d68
  getGames: (id) => {
    let futureGamesPath = `http://localhost:3000/teams/${id}/futuregames`
    return axios.get(futureGamesPath).then((response) => {
      return response.data;
    })
  },
<<<<<<< HEAD
=======
  displayDate: (date) => {

    let newDate = [];
    let d = date.split('');

    if(d[5] !== '0'){
      newDate.push(d[5], d[6],'/', d[8],d[9],'/',d[0], d[1], d[2], d[3]);
    } else {
      newDate.push(d[6],'/', d[8],d[9],'/',d[0], d[1], d[2], d[3]);
    }
    return newDate.join('')
  },
>>>>>>> 6a814c3af8eab112c985ea19f0327017ca8a6d68
  getGamePhase: (date) => {
    let pathname = `http://localhost:3000/moonphases?date=${date}`

    return axios.get(pathname).then((response) => {
      return response.data
    })
  },
  getPastGames: (id) => {
<<<<<<< HEAD
    let pathname = `http://localhost:3000/teams/${id}/pastgames`

    return axios.get(pathname).then((response) => {
      return response.data
    })
=======
    return id;
    // let pathname = `http://localhost:3000/teams/${id}/pastgames`
    // console.log(pathname)
    // return axios.get(pathname).then((response) => {
    //
    // })
>>>>>>> 6a814c3af8eab112c985ea19f0327017ca8a6d68
  }
}
