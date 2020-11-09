import React from 'react';
import Menu from './components/Menu'
import Banner from './components/Banner';
import Sobrenos from './components/Sobrenos';
import Servicos from './components/Servicos';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: "var(--white)" }}>
      
      <Menu />

      <Banner />

      <Sobrenos />
      
      <Servicos />

      <Footer />

    </div>
  );
}

export default App;