import React, { useEffect, useState } from 'react';
import './dataHoje.css';

const DataHoje = ({ title }) => { 
    const [date, setDate] = useState("");

    useEffect(() => {
      const today = new Date();
      const formattedDate = today.toLocaleDateString();
      setDate(formattedDate);
    }, []); // O array vazio faz com que o efeito execute uma vez, ao carregar o componente

    return (
        <div>
            <h1 className="content__title">{title}</h1>
            <p className="content__date" id="dataHoje">{date}</p>
        </div>
    );
};

export default DataHoje;