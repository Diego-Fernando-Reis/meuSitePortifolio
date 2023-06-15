import './App.css'
import { useState, useEffect } from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import { Outlet } from 'react-router-dom';
import 'animate.css';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [borderBranco, setBorderBranco] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowMenu(true);
        setBorderBranco('border-branco')
      } else {
        setShowMenu(false);
        setBorderBranco('')
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);  

  return (
    <>
      {showMenu && <Header classname={`animate__animated animate__slideInDown ${borderBranco}`}/>}
      <Outlet />
      <Footer />
    </>
  )
}

export default App
