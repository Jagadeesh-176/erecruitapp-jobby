import {Link} from 'react-router-dom'

import {ImHome} from 'react-icons/im'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'

import './index.css'

const websiteLogo =
  'https://i2.wp.com/www.lghealth.ca/wp-content/uploads/2018/04/eRecruit.png?w=1830&ssl=1'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-container">
      <ul className="header-ul-container">
        <li className="logo-container">
          <Link to="/" className="link">
            <img src={websiteLogo} alt="website logo" className="logo" />
          </Link>
        </li>
        <li className="home-jobs-container">
          <Link className="link" to="/">
            <ImHome className="home-icon" />
            <h1 className="nav-text">Home</h1>
          </Link>
          <Link to="/jobs" className="link">
            <h1 className="nav-text">Jobs</h1>
            <button type="button" className="home-jobs-btn">
              Jobs
            </button>
          </Link>
        </li>
        <li>
          <FiLogOut className="home-icon" onClick={onClickLogout} />
          <button type="button" className="btn-logout" onClick={onClickLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Header
