import React, { useEffect, useState } from 'react';
import './grafico.css';
import Menu from '../components/menu';
import DataHoje from '../components/dataHoje';
import Imc from '../components/imc';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Grafico = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Carregar os dados do JSON
        fetch('/glicose.json')
            .then((response) => response.json())
            .then((json) => {
                console.log(json); // Verifique os dados carregados
                setData(json);
            })
            .catch((error) => console.error('Erro ao carregar dados do gráfico:', error));
    }, []);

    if (data.length === 0) {
        return <p>Carregando gráfico...</p>;
    }

    return (
        <div>
            <div className="container">
                <Menu />
                <section className="section">
                    <div className="content">
                        <header>
                            <DataHoje title="Gráfico" />
                            <div className="imc-flex">
                                <Imc title="Altura" color="#F8DEBD" />
                                <Imc title="Massa" color="#D0FBFF" />
                                <Imc title="IMC" color="#ECFFD0" />
                            </div>
                        </header>
                        <div className="grafico-container" style={{ width: '100%', height: '330px' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="data" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="glicose" fill="#82ca9d" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Grafico;
