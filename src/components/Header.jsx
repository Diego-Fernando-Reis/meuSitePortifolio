import '../style/header.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return(
    <nav className={props.classname}>
      <div className="blur"></div>
      <div className="interno">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/portifolio" className="portifolio">Portifólio</Link></li>
          <li><Link to="https://www.linkedin.com/in/diego-dvlopr/"><i className="fa-brands fa-linkedin"></i></Link></li>
          <li><Link to="https://www.behance.net/diegoreis24"><i className="fa-brands fa-square-behance"></i></Link></li>
          <li><Link to="https://twitter.com/Dgdvlopr"><i className="fa-brands fa-twitter"></i></Link></li>
        </ul>
      </div>
    </nav>
  )
}

Header.propTypes = {
  classname: PropTypes.string // Add this prop validation for classname
};

export default Header;