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
                        <Text
                            text="Je suis Lucie Chimits, j'ai 23 ans. Nouvellement développeuse front-end, 
                        après quelques années dans le monde de l'esthétique qui m'a permis d'avoir une première expérience professionnelle 
                        et avoir un contact avec la clientèle."
                        />
                        <Text
                            text="Ayant commencé l'intégration en autodidacte afin de découvrir ce domaine et de voir si cela pourrait me plaire. 
                            Pour me permettre de me reconvertir, j'ai décidé de faire la formation Openclassrooms. 
                            Cette formation m'a permis d'acquérir des connaissances sur les différents langages d'intégrations. Pour la suite de mon parcours, 
                            j'ai décidé de me spécialiser en ReactJS."
                        />
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