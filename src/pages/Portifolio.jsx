import { useEffect, useState } from "react";
import Box1 from "../components/Box1";
import '../style/portifolio.css'

const Portifolio = () => {
    const [escurecer, setEscurecer] = useState('');
    const [clarear, setClarear] = useState('');

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 600) {
            setEscurecer('escurecer');
            setClarear('clarear');
        } else {
            setEscurecer('');
            setClarear('')
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div className={escurecer}>
            <div className="interno-portifolio">
                <div className="esquerda">
                    <div className="titulos">
                        <h1>Meu<br />Portifólio</h1>
                    </div>
                    <div className="blocos">
                        <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
                        <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
                        <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
                        <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
                        <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
                        <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
                        <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
                        <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
                    </div>
                </div>
                <div className="direita">
                    <div className='navegacao-portifolio'>
                        <div className="interno2">
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">Sobre</a></li>
                                <li><a href="" className="portifolio">Portifólio</a></li>
                                <li><a href="https://www.linkedin.com/in/diego-dvlopr/"><i className="fa-brands fa-linkedin"></i></a></li>
                                <li><a href="https://www.behance.net/diegoreis24"><i className="fa-brands fa-square-behance"></i></a></li>
                                <li><a href="https://twitter.com/Dgdvlopr"><i className="fa-brands fa-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="blocos">
                        <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
                        <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
                        <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
                        <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
                        <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
                        <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
                        <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
                        <Box1 classname={`box1 hvr-bob hvr-shadow hvr-sweep-to-top ${clarear}`}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portifolio;