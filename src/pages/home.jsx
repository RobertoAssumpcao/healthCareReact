import React, { useEffect, useState } from 'react';
import './home.css';
import Menu from '../components/menu';

const Home = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString();
    setDate(formattedDate);
  }, []); // O array vazio faz com que o efeito execute uma vez, ao carregar o componente

  return (
    <div>
      <div className="container">
        <Menu />
        <section className="section">
          <div className="content">
            <header>
              <h1 className="content__title">Health Overview</h1>
              <p className="content__date" id="dataHoje">{date}</p>
            </header>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
