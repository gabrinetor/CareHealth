import React from 'react';
import Logo from '../../assets/img/logo.png';
import './menu.css';

function Menu() {
    return (
        <nav className="Menu">
          <a href="/">
            <img className="Logo" src={Logo} alt="Care Health" />
          </a>

          <div className="sessoes">
            <a href="#sobrenos">Sobre Nós</a>
            <a href="#servicos">Serviços</a>  
          </div>
          
        </nav>
    );
}

export default Menu; 