import './Carrousel.scss';

function Carrousel() {
  return (
    <div className="row">
      <div className="col_12">
        <div className="carousel flickity-enabled is-draggable">
          <div className="flickity-viewport" style={{ height: '679.703px', touchAction: 'panY' }}>
            <div className="flickity-slider" style={{ left: '0px', transform: 'translateX(0%)' }}>
              <div className="carousel-cell is-selected" style={{ position: 'absolute', left: '0px', transform: 'translateX(0%)' }}>
                <img src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/hardware_deck.jpg" alt="SteamDeck 1" />
                <div className="caption">Steam Deck™ is the most powerful, full-featured gaming handheld in the world, allowing players to enjoy their Steam library anywhere.</div>
              </div>
              <div className="carousel-cell" style={{ position: 'absolute', left: '0px', transform: 'translateX(100%)' }} aria-hidden="true">
                <img src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/hardware_index.jpg" alt="StemDeck 2" />
                <div className="caption">The Valve Index® VR Kit combines visual, audio, and ergonomic innovations to create an industry leading VR experience.</div>
              </div>
              <div className="carousel-cell" style={{ position: 'absolute', left: '0px', transform: 'translateX(200%)' }} aria-hidden="true">
                <img src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/hardware_link.jpg" alt="SteamDeck 3" />
                <div className="caption">Steam Controller and Steam Link, two of Valve’s early hardware projects that enabled untethered PC gaming.</div>
              </div>
            </div>
          </div>
          <ol className="flickity-page-dots">
            <li className="dot is-selected" aria-label="Page dot 1" aria-current="step" />
            <li className="dot" aria-label="Page dot 2" />
            <li className="dot" aria-label="Page dot 3" />
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Carrousel;
