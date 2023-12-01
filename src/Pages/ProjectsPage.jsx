import Navbar from '../Components/Navbar';
import Title from '../Components/Title';
import ProjectsSlider from '../Components/Slider';
import Footer from "../Components/Footer";

function ProjectsPage() {
    return (
        <div className='projects'>
            <Navbar />
            <div className='container'>
                <div className='projectsContent'>
                    <Title title="des projets ?" subtitle="et pas qu'un." />
                    <ProjectsSlider />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProjectsPage;