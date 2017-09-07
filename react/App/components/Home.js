var React = require('react');
var Link = require('react-router-dom').Link;



function Home() {
  return (
    <div className='home-container'>
      <Link className='button-container' to='./teams'>
        <img src='http://www.pngmart.com/files/1/Baseball-Bat-Transparent-PNG.png' className='bats' alt='baeball bats link'></img>
        <p>Click to begin</p>
      </Link>

    </div>

  )
}
module.exports = Home;
