import { Link } from "react-router-dom";
import Tag from "./Tag";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function SliderCard({ data }) {
    return (
        <div className="card">
            <img src={data.image} alt={data.alt} className="cardImg" />
            <div className="cardContent">
                <div className="cardContentTop">
                    <h2 className="cardTitle">{data.title}</h2>
                    <h3 className="cardSubtitle">{data.type}</h3>
                    <div className="cardContentInfos">
                        <div className="cardContentTags">
                            {data.tags.map((tag, index) => {
                                return (
                                    <Tag key={index} text={tag} />
                                );
                            })}
                        </div>
                        <Link className="cardLink" to={data.linkGithub}><FontAwesomeIcon className="cardIcon" icon={faGithub} /></Link>
                    </div>
                </div>
                <hr className="cardContentLine" />
                <div className="cardContentBottom">
                    <p className="cardContentText">{data.description}</p>
                </div>
            </div>
        </div >
    )
}

export default SliderCard