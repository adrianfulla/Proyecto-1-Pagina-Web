import { useState } from 'react'
import classnames from 'classnames'
import './Carrousel.scss'

function Carrousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState([true, false, false])
  const [dotAria, setdotAria] = useState(['step', false, false])
  const [tState, setTState] = useState(['0%', '0%', '100%', '-100%'])

  const tStateArr = [['0%', '0%', '100%', '-100%'],
    ['-100%', '0%', '100%', '200%'],
    ['-200%', '300%', '100%', '200%']]

  const slideSelector = (index) => {
    setCurrentIndex(index)

    const BoolArr = [false, false, false]
    BoolArr[index] = true
    setSelected(BoolArr)

    BoolArr[index] = 'step'
    setdotAria(BoolArr)

    setTState(tStateArr[index])
  }

  return (
    <div className="row">
      <div className="col_12">
        <div className="carousel flickity-enabled is-draggable" tabIndex={currentIndex}>
          <div className="flickity-viewport" style={{ height: '679.703px', touchAction: 'panY' }}>
            <div className="flickity-slider" style={{ left: '0px', transform: 'translateX('.concat(tState[0], ')') }}>
              <div
                className={classnames('carousel-cell', {
                  'is-selected': selected[0],
                })}
                style={{ position: 'absolute', left: '0px', transform: 'translateX('.concat(tState[1], ')') }}
              >
                <img src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/hardware_deck.jpg" alt="SteamDeck 1" aria-hidden={!selected[0]} />
                <div className="caption">Steam Deck™ is the most powerful, full-featured gaming handheld in the world, allowing players to enjoy their Steam library anywhere.</div>
              </div>
              <div
                className={classnames('carousel-cell', {
                  'is-selected': selected[1],
                })}
                style={{ position: 'absolute', left: '0px', transform: 'translateX('.concat(tState[2], ')') }}
                aria-hidden={!selected[0]}
              >
                <img src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/hardware_index.jpg" alt="StemDeck 2" />
                <div className="caption">The Valve Index® VR Kit combines visual, audio, and ergonomic innovations to create an industry leading VR experience.</div>
              </div>
              <div
                className={classnames('carousel-cell', {
                  'is-selected': selected[2],
                })}
                style={{ position: 'absolute', left: '0px', transform: 'translateX('.concat(tState[3], ')') }}
                aria-hidden={!selected[0]}
              >
                <img src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/hardware_link.jpg" alt="SteamDeck 3" />
                <div className="caption">Steam Controller and Steam Link, two of Valve’s early hardware projects that enabled untethered PC gaming.</div>
              </div>
            </div>
          </div>
          <ol className="flickity-page-dots">
            <li
              className={classnames('dot', {
                'is-selected': selected[0],
              })}
              role="presentation"
              aria-label="Page dot 1"
              aria-current={dotAria[0]}
              tabIndex={currentIndex}
              onClick={() => slideSelector(0)}
            />
            <li
              role="presentation"
              className={classnames('dot', {
                'is-selected': selected[1],
              })}
              aria-label="Page dot 2"
              aria-current={dotAria[1]}
              tabIndex={currentIndex}
              onClick={() => slideSelector(1)}
            />
            <li
              role="presentation"
              className={classnames('dot', {
                'is-selected': selected[2],
              })}
              aria-label="Page dot 3"
              aria-current={dotAria[2]}
              tabIndex={currentIndex}
              onClick={() => slideSelector(2)}
            />
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Carrousel
