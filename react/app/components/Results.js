var React = require('react');

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.State = {
      selectedGame:'',
      moonphase:'',
    }
  }
  render() {
    return(
      <div>'Results'</div>
    )
  }
}


module.exports = Results;
