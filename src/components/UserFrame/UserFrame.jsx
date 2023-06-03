import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './UserFrame.scss'

function UserFrame({ UsersOnline, UsersInGame }) {
  const [UsersOn, setUsersOn] = useState(UsersOnline)
  const [UsersIn, setUsersIn] = useState(UsersInGame)

  useEffect(() => {
    const interval = setInterval(() => {
      setUsersOn((UsersOn) => (UsersOn + Math.floor(Math.random() * 200 + 1)))
      setUsersIn((UsersIn) => (UsersIn + Math.floor(Math.random() * 200 + 1)))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="UserFrameWrapper">
      <div className="steam_section">
        <div className="row">
          <div className="col_2">
            <img className="steam_logo_about" src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/steam_logo.png" alt="steam_logo" />
          </div>
          <div className="col_3 col_offset_1 steam_stat">
            <h3 id="stats_users_online">{UsersOn.toLocaleString('en-US')}</h3>
            <h4>
              Steam players
              <br />
              are online now
            </h4>
          </div>
          <div className="col_3 col_offset_1 steam_stat">
            <h3 id="stats_users_ingame">{UsersIn.toLocaleString('en-US')}</h3>
            <h4>
              Steam players
              <br />
              are in-game now
            </h4>
          </div>
        </div>
      </div>
    </section>
  )
}

UserFrame.propTypes = {
  UsersOnline: PropTypes.number,
  UsersInGame: PropTypes.number,
}

UserFrame.defaultProps = {
  UsersOnline: 2011970,
  UsersInGame: 4561379,
}

export default UserFrame
