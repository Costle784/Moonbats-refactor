

module.exports = {
  formatDate: (date) => {
    if(!date) {
      return
    } else {
      let newDate = [];
      let d = date.split('');

      if(d[5] !== '0'){
        newDate.push(d[5], d[6],'/', d[8],d[9],'/',d[0], d[1], d[2], d[3]);
      } else {
        newDate.push(d[6],'/', d[8],d[9],'/',d[0], d[1], d[2], d[3]);
      }
      return newDate.join('')
    }
  }
}
