import PropTypes from 'prop-types'
import './PopularGame.scss'

function PopularGame({ link, image, title }) {
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={image} alt={title} />
      </a>
      <h4>
        {title}
      </h4>
    </div>
  )
}

PopularGame.propTypes = {
  link: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
}

PopularGame.defaultProps = {
  link: 'https://store.steampowered.com/app/546560/HalfLife_Alyx/',
  image: 'https://cdn.akamai.steamstatic.com/valvesoftware/images/about/popular_alyx.jpg',
  title: 'Half-Life: Alyx',
}

export default PopularGame
