import PropTypes from 'prop-types';
import './GameFrame.scss';

function GameFrame({ link, image, title }) {
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={image} alt={title} />
      </a>
      <h5>
        {title}
      </h5>
    </div>
  );
}

GameFrame.propTypes = {
  link: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
};

GameFrame.defaultProps = {
  link: 'https://store.steampowered.com/app/546560/HalfLife_Alyx/',
  image: 'https://cdn.akamai.steamstatic.com/valvesoftware/images/about/popular_alyx.jpg',
  title: 'Half-Life: Alyx',
};

export default GameFrame;
