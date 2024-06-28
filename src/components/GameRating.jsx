import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import './gameRating.css';

function GameRating({ rating }) {
  const generateStars = useCallback(() => {
    let stars = [];
    if (rating > 5 || rating < 1) {
      return [];
    }
    for (let i = 0; i < rating; i++) {
      stars.push(i);
    }
    return stars;
  }, [rating]);

  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(generateStars());
  }, [generateStars]);

  return (
    <div className='gameRating'>
      {stars.map((star, index) => (
        <i key={index} className="bi bi-star-fill"></i>
      ))}
    </div>
  );
}

GameRating.propTypes = {
  rating: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
};

export default GameRating;
