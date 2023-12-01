import SliderCard from "./SliderCard";
import projects from "../data/projects.json";
import Slider from "react-slick";

function ProjectsSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        cssEase: 'linear'
    };


    return (
        <div className="slider">
            <div className="sliderContent">
                <Slider {...settings}>
                    {projects.map((project, index) => {
                        return <SliderCard data={project} key={index} />;
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default ProjectsSlider