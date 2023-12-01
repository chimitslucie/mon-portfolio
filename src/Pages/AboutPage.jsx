import Navbar from '../Components/Navbar';
import Title from '../Components/Title';
import Text from '../Components/Text';
import Footer from '../Components/Footer';
import ProfilPicture from "../Assets/Img/aboutPage/profil_picture.jpg";

function AboutPage() {
    return (
        <div className='about'>
            <Navbar />
            <div className='container'>
                <Title title="mon profil ?" subtitle="l'essentiel à savoir." />
                <div className='aboutContent'>
                    <div className='aboutContentText'>
                        <Text text="Itaque verae amicitiae difficillime reperiuntur in iis qui in honoribus reque publica versantur; ubi enim istum invenias qui honorem amici anteponat suo? Quid? Haec ut omittam, quam graves, quam difficiles plerisque videntur calamitatum societates! Ad quas non est facile inventu qui descendant. Quamquam Ennius recte." />
                        <Text text="Itaque verae amicitiae difficillime reperiuntur in iis qui in honoribus reque publica versantur; ubi enim istum invenias qui honorem amici anteponat suo? Quid? Haec ut omittam, quam graves, quam difficiles plerisque videntur calamitatum societates! Ad quas non est facile inventu qui descendant. Quamquam Ennius recte." />
                    </div>
                    <div className='aboutContentPhoto'>
                        <img className='profilPicture' src={ProfilPicture} alt='profil' />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage;