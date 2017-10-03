const React = require('react');
const Link = require('react-router-dom').Link;

const Home = () => {
  return (
    <div className='home-container'>
      <img src='https://northwoodsleague.com/duluth-huskies/wp-content/themes/northwoodsleagueTeams-DuluthHuskies/img/baseball-nl-footer.png' className='home-logo' alt='baseball bats'></img>
      <Link className='button begin-button' to='./teams'>
        Begin
      </Link>
    </div>
  )
}
module.exports = Home;
