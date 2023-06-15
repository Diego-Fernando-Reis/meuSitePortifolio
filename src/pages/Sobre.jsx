import '../style/sobre.css';
import {useState, useEffect} from 'react'
import minhaFoto from '../assets/minhafoto.jpg'
import {Link} from 'react-router-dom'

const Sobre = () => {
    const [escurecer, setEscurecer] = useState('');
    const [borderBranco, setBorderBranco] = useState('')

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 350) {
            setEscurecer('escurecer');
            setBorderBranco('border-branco')
        } else {
            setEscurecer('fundo-branco');
            setBorderBranco('')
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []); 
    return(
        <div className={escurecer}>
            <div className={`interno-sobre ${borderBranco}`}>
                <div className={`esquerda ${borderBranco}`}>
                    <div className="titulos">
                        <h1>Diego<br />Fernando</h1>
                        <p>Email:diegoreis.dvlopr@gmail.com</p>
                    </div>

                    <div className="texto">
                        <h3>Olá! Eu sou o Diego Fernando.<br/><br/>
                            "Quando uno meus conhecimentos em design de experiência do usuário aos conceitos de programação, sou capaz de transformar as ideias das pessoas em aplicações práticas e fiéis."</h3>
                    </div>
                    <div className="titulo-skills">
                        <h2>Skills</h2>
                    </div>
                    <div className="skills">
                        <div className="react">
                            <i className="fa-brands fa-react"></i>
                            <h3>React js</h3>
                        </div>
                        <div className="figma">
                            <i className="fa-brands fa-figma"></i>
                            <h3>Figma</h3>
                        </div>
                        <div className="javascript">
                            <i className="fa-brands fa-square-js"></i>
                            <h3>Javascript</h3>
                        </div>
                        <div className="sass">
                            <i className="fa-brands fa-sass"></i>
                            <h3>Sass</h3>
                        </div>
                        <div className="jira">
                            <i className="fa-brands fa-jira"></i>
                            <h3>Jira</h3>
                        </div>
                        <div className="node">
                            <i className="fa-brands fa-node"></i>
                            <h3>Node js</h3>
                        </div>
                        <div className="wordpress">
                            <i className="fa-brands fa-wordpress"></i>
                            <h3>Wordpress</h3>
                        </div>
                        <div className="git">
                            <i className="fa-brands fa-git"></i>
                            <h3>Git</h3>
                        </div>
                    </div>

                    <div className="curriculo">
                        <button>Curric. em português.</button>
                    </div>
                </div>
                <div className="direita">
                    <div className='navegacao-sobre'>
                        <div className="interno2">
                            <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/sobre">Sobre</Link></li>
                            <li><Link to="/portifolio" className="portifolio">Portifólio</Link></li>
                            <li><Link to="https://www.linkedin.com/in/diego-dvlopr/"><i className="fa-brands fa-linkedin"></i></Link></li>
                            <li><Link to="https://www.behance.net/diegoreis24"><i className="fa-brands fa-square-behance"></i></Link></li>
                            <li><Link to="https://twitter.com/Dgdvlopr"><i className="fa-brands fa-twitter"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="top"></div>
                    <div className="foto">
                        <img src={minhaFoto} alt="" />
                    </div>
                    <div className="titulo-texto">
                    </div>
                    <div className="curriculo">
                        <button>Curriculum in english.</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sobre;