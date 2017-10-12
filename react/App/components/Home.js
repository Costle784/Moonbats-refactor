const React = require('react');
const Link = require('react-router-dom').Link;

const Home = () => {
  return (
    <div className='home-container'>
      <div className='main-home'>
        <img src='https://northwoodsleague.com/duluth-huskies/wp-content/themes/northwoodsleagueTeams-DuluthHuskies/img/baseball-nl-footer.png' className='home-logo' alt='baseball logo'></img>
        <h2 className='home-description'>Pick baseball game winners based on the phases <br />of the moon!</h2>
        <Link className='begin-button' to='./teams'>
          Begin
        </Link>
      </div>
      <footer>
        <div className='warning'>** For Entertainment Purposes Only ** </div>
        <div>
          &copy; Curtis Ostle 2017
        </div>
      </footer>
    </div>
  )
}
module.exports = Home;
