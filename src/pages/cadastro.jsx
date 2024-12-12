import { useState } from 'react';
import './cadastro.css';
import Menu from '../components/menu';
import DataHoje from '../components/dataHoje';
import Imc from '../components/imc';
import { TextField, Button, Box, Snackbar } from '@mui/material';

const Cadastro = () => {
    const [valor, setValor] = useState('');
    const [data, setData] = useState('');
    const [altura, setAltura] = useState('');
    const [massa, setMassa] = useState('');
    const [glicoseData, setGlicoseData] = useState([]);
    const [message, setMessage] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleGlicoseSubmit = (e) => {
        e.preventDefault();

        const novoGlicose = {
            glicose: parseInt(valor),
            data: data
        };

        setGlicoseData([...glicoseData, novoGlicose]);

        setValor('');
        setData('');

        setMessage('Cadastro de glicose realizado com sucesso!');
        setOpenSnackbar(true);
    };

    const handleImcSubmit = (e) => {
        e.preventDefault();
        // Lógica de cadastro do IMC (salvar ou usar os valores de altura e massa)
        setAltura('');
        setMassa('');

        setMessage('Cadastro de IMC realizado com sucesso!');
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <div>
            <div className="container">
                <Menu />
                <section className="section">
                    <div className="content">
                        <header>
                            <DataHoje title="Cadastro" />
                            <div className='imc-flex'>
                                <Imc title="Altura" color="#F8DEBD" />
                                <Imc title="Massa" color="#D0FBFF" />
                                <Imc title="IMC" color="#ECFFD0" />
                            </div>
                        </header>

                        <Box sx={{ display: 'flex', gap: 4 }}>
                            {/* Formulário de Glicose */}
                            <form onSubmit={handleGlicoseSubmit} className="cadastro-form" style={{ flex: 1 }}>
                                <h2 className='h2Cadastro'>Glicose</h2>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <TextField
                                    label="glicose"
                                        type="number"
                                        value={valor}
                                        onChange={(e) => setValor(e.target.value)}
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        label="Data"
                                        type="date"
                                        value={data}
                                        onChange={(e) => setData(e.target.value)}
                                        fullWidth
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        required
                                    />
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        color="primary"
                                        sx={{
                                            fontSize: '14px',
                                            padding: '2px 3px',
                                            width: '100px'
                                        }}
                                    >
                                        Salvar
                                    </Button>
                                </Box>
                            </form>

                            {/* Formulário de IMC */}
                            <form onSubmit={handleImcSubmit} className="cadastro-form" style={{ flex: 1 }}>
                                <h2 className='h2Cadastro'>Cálculo IMC</h2>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <TextField
                                        label="Altura (cm)"
                                        type="number"
                                        value={altura}
                                        onChange={(e) => setAltura(e.target.value)}
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        label="Massa (kg)"
                                        type="number"
                                        value={massa}
                                        onChange={(e) => setMassa(e.target.value)}
                                        fullWidth
                                        required
                                    />
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        color="primary"
                                        sx={{
                                            fontSize: '14px',
                                            padding: '2px 3px',
                                            width: '100px'
                                        }}
                                    >
                                        Salvar
                                    </Button>
                                </Box>
                            </form>
                        </Box>

                    </div>
                </section>
            </div>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message={message}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            />
        </div>
    );
};

export default Cadastro;
