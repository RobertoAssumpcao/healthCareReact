import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';
import './grafico.css';
import Menu from '../components/menu';
import DataHoje from '../components/dataHoje';
import Imc from '../components/imc';

const Grafico = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/glicose.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error('Erro ao carregar os dados do gráfico:', error));
    }, []);

    return (
        <div>
            <div className="container">
                <Menu />
                <section className="section">
                    <div className="content">
                        <header>
                            <DataHoje title="Grafico" />
                            <div className="imc-flex">
                                <Imc title="Altura" color="#F8DEBD"></Imc>
                                <Imc title="Massa" color="#D0FBFF"></Imc>
                                <Imc title="IMC" color="#ECFFD0"></Imc>
                            </div>
                        </header>
                        <Card sx={{ marginTop: 2 }}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    Gráfico de Glicose
                                </Typography>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={data}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="data" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="glicose" stroke="#8884d8" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Grafico;
