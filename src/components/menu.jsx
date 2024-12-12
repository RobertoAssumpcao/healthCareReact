import './menu.css';
import { useNavigate } from 'react-router'

const Menu = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <a className="navbar__link">
                <img src="src/assets/3d_avatar_14.png" alt="Logo" className="navbar__img"></img>
            </a>
            <button href="index.html" className="navbar__link" onClick={ () => navigate('/') }>
                <img src="src/assets/dashboard.svg" alt="Home" className="navbar__icon"></img>
            </button>
            <button href="index.html" className="navbar__link" onClick={ () => navigate('/cadastro') }>
                <img src="src/assets/add_circle.png" alt="Home" className="navbar__icon"></img>
            </button>
            <button href="index.html" className="navbar__link" onClick={ () => navigate('/grafico') }>
                <img src="src/assets/today.png" alt="Home" className="navbar__icon"></img>
            </button>
        </nav>
    );
};

export default Menu;