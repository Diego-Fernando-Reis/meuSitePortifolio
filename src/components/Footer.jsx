import '../style/footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
  return(
    <div className="footer">
      <div className="interno5">
        <p>Copyright &copy; 2023 | Diego Fernando</p>
        <ul>
          <li><Link to="https://www.linkedin.com/in/diego-dvlopr/"><i className="fa-brands fa-linkedin"></i></Link></li>
          <li><Link to="https://www.behance.net/diegoreis24"><i className="fa-brands fa-square-behance"></i></Link></li>
          <li><Link to="https://twitter.com/Dgdvlopr"><i className="fa-brands fa-twitter"></i></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;