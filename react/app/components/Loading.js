<<<<<<< HEAD
const React = require('react');
const PropTypes = require('prop-types');
=======
var React = require('react');
var PropTypes = require('prop-types');
>>>>>>> 6a814c3af8eab112c985ea19f0327017ca8a6d68

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    };
  }

  componentDidMount() {
<<<<<<< HEAD
    let stopper = `...${this.props.text}...`;
=======
    let stopper = `${this.props.text}...`;
>>>>>>> 6a814c3af8eab112c985ea19f0327017ca8a6d68

    this.interval = window.setInterval(function() {
      if(this.state.text === stopper) {
        this.setState({
            text: this.props.text
          })
      } else {
        this.setState(function(prevState) {
          return {
<<<<<<< HEAD
            text: `.${prevState.text}.`
=======
            text: `${prevState.text}.`
>>>>>>> 6a814c3af8eab112c985ea19f0327017ca8a6d68
          }
        })
      }
    }.bind(this), this.props.speed)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <p className='loading'>
        {this.state.text}
      </p>
    )
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 200
}

module.exports = Loading;
