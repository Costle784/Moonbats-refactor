var React = require('react');
var Link = require('react-router-dom').Link;



function Home() {
  return (
    <div className='home-container'>
      <img src='http://www.pngmart.com/files/1/Baseball-Bat-Transparent-PNG.png' className='bats' alt='baeball bats link'></img>
      <Link className='button begin-button' to='./teams'>
        Begin
      </Link>
    </div>
  )
}
module.exports = Home;
