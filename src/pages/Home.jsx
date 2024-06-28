
import PropTypes from 'prop-types';
import GameCard from '../components/GameCard';
import './home.css';

function Home({games}) {
  return (
    <section id="home" className='home active'>
      <div className="container-fluid">
        <div className="row mb-4 mt-4 align-items-center">
          <div className="col-lg-6">
            <h2 className="sectionTitle">Games on promotion</h2>
          </div>
          <div className="col-lg-6 d-flex justify-content-end align-items-center">
            <a href="#" className="viewMore" onClick={(e) => e.preventDefault()}>
              View more games <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="row">
          {games.slice(0,11).map(game => (
            <GameCard key={game._id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}

Home.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      // Add more PropTypes as needed for other properties
    })
  ).isRequired,
};
export default Home;
