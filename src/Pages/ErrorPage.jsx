import Navbar from "../Components/Navbar";
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';


function ErrorPage() {
    return (
        <div className="error">
            <Navbar />
            <div className="container">
                <div className="errorContent">
                    <h1 className="errorTitle">404 Error</h1>
                    <p className="errorText">Oups! Une erreur est survenue.</p>
                    <Link to="/mon-portfolio">
                        <p className="errorLink">Retourner à la page d'accueil</p>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ErrorPage;