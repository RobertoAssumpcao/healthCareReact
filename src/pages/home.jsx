import './home.css';
import Menu from '../components/menu';
import DataHoje from '../components/dataHoje';
import Imc from '../components/imc';
import CardGlicose from '../components/cardGlicose';

const Home = () => {

    return (
        <div>
            <div className="container">
                <Menu />
                <section className="section">
                    <div className="content">
                        <header>
                            <DataHoje title="Health Overview" />
                            <div className='imc-flex' >
                                <Imc title="Altura" color="#F8DEBD"></Imc>
                                <Imc title="Massa" color="#D0FBFF"></Imc>
                                <Imc title="IMC" color="#ECFFD0"></Imc>
                            </div>
                        </header>
                    </div>
                    <CardGlicose/>
                </section>
            </div>
        </div>
    );
};

export default Home;
