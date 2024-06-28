import PropTypes from 'prop-types';

function NavListIteam({ item }) {
  return (
    <li>
      <a href="#">
        <i className={'bi ${item.icon}'}></i>
        <span className="navName">{item.name}</span>
      </a>
    </li>
  );
}

NavListIteam.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string, // Uncomment this line if you use item.icon
  }).isRequired,
};

export default NavListIteam;
