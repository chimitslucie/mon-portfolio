import Navbar from '../Components/Navbar';
import Title from '../Components/Title';
import Skill from "../Components/Skills";
import { faHtml5, faCss3Alt, faSass, faSquareJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Footer from "../Components/Footer";

function SkillsPage() {
    return (
        <div className='skills'>
            <Navbar />
            <div className='container'>
                <div className='skillsContent'>
                    <Title title="des compétences ?" subtitle="dans quels domaines ?" />
                    <div className='skillsContentProgress'>
                        <Skill iconName={faHtml5} title="html" className="html" />
                        <Skill iconName={faCss3Alt} title="css" className="css" />
                        <Skill iconName={faSass} title="sass" className="sass" />
                        <Skill iconName={faSquareJs} title="javascript" className="javascript" />
                        <Skill iconName={faReact} title="reactjs" className="react" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SkillsPage;