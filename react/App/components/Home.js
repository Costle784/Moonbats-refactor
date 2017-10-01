var React = require('react');
var Link = require('react-router-dom').Link;

function Home(props) {
  return (
    <div className='home-container'>
      <img src='https://northwoodsleague.com/duluth-huskies/wp-content/themes/northwoodsleagueTeams-DuluthHuskies/img/baseball-nl-footer.png' className='bats' alt='baseball bats'></img>
      <Link className='button begin-button' to='./teams'>
        Begin
      </Link>
    </div>
  )
}
module.exports = Home;
