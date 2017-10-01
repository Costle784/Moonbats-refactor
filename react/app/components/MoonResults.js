const React = require('react');
const PropTypes = require('prop-types');

class MoonResults extends React.Component {
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


module.exports = MoonResults;
