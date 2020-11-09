import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/icon.png';

function Footer() {
  return (
    <FooterBase>
        <a href="/">
            <img className="Logo" src={Logo} alt="Care Health" />
        </a>
    </FooterBase>
  );
}

export default Footer;