const React = require('react');
const Link = require('react-router-dom').Link;

const ResetButton = () => {
  return (
    <Link className='button' to='/teams'>Reset</Link>
  )
}

module.exports = ResetButton;
