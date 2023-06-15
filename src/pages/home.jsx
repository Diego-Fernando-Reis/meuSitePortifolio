import Box1 from '../components/Box1'
import Box2 from '../components/Box2';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import '../style/home.css'

const Home = () => {
  const [escurecer, setEscurecer] = useState('');
  const [clarear, setClarear] = useState('');
  const [borderBranco, setBorderBranco] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setEscurecer('escurecer');
        setClarear('clarear');
        setBorderBranco('border-branco')
      } else {
        setEscurecer('fundo-branco');
        setClarear('')
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
      <div className="banner">
        <div className={`navegacao`}>
          <div className="interno2">
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='sobre'>Sobre</Link></li>
              <li><Link to='portifolio' className="portifolio">Portifólio</Link></li>
              <li><Link to="https://www.linkedin.com/in/diego-dvlopr/"><i className="fa-brands fa-linkedin"></i></Link></li>
              <li><Link to="https://www.behance.net/diegoreis24"><i className="fa-brands fa-square-behance"></i></Link></li>
              <li><Link to="https://twitter.com/Dgdvlopr"><i className="fa-brands fa-twitter"></i></Link></li>
            </ul>
          </div>
        </div>
        <div className="titulo">
          <div className="interno">
            <h1>UX/UI designer <br/>& Desenvolvedor Front-end</h1>
            <h2>Conheça o meu trabalho</h2>
            <button>Quero esclarecer minhas dúvidas</button>
          </div>
        </div>
        <div id="wrapper">
          <div id="wrapper-inner">
            <div id="scroll-down">
              <span className="arrow-down">
              </span>
              <span id="scroll-title">
                Scroll down
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={`interno3 ${borderBranco}`}>
        <div className={`esquerda ${borderBranco}`}>
          <div className="titulos">
            <h1>Portifólio</h1>
          </div>
          <div className="blocos">
            <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
            <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
            <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
            <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
            <Box2 />
            <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
            <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
            <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
            <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
          </div>
        </div>
        <div className="direita">
          <div className="blocos">
            <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
            <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
            <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
            <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
            <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
            <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
            <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
            <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
            <div className="vermais">
              <h2><Link to="/portifolio">Ver Mais</Link></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;