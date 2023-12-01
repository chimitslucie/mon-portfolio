import Navbar from "../Components/Navbar";
import Title from '../Components/Title';
import Form from "../Components/Form";
import Text from '../Components/Text';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Footer from "../Components/Footer";

function ContactPage() {
    return (
        <div className="contact">
            <Navbar />
            <div className="container">
                <Title title="me contacter ?" subtitle="n'hésitez pas." className="contactTitle" />
                <div className="contactContent">
                    <div className="contactContentForm">
                        <Form />
                    </div>
                    <hr className="contactContentLine"></hr>
                    <div className="contactContentText">
                        <Text text="Eius populus ab incunabulis primis ad usque pueritiae tempus extremum, quod annis circumcluditur fere trecentis, circummurana pertulit bella, deinde aetatem ingressus adultam post multiplices bellorum aerumnas Alpes transcendit et fretum" />
                        <div className="contactLinks">
                            <Link to="https://github.com/chimitslucie" className="contactLink">
                                <FontAwesomeIcon className="contactIcon" icon={faGithub} />
                            </Link>
                            <Link to="https://www.linkedin.com/in/lucie-chimits-014454151/" className="contactLink">
                                <FontAwesomeIcon className="contactIcon" icon={faLinkedin} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactPage;