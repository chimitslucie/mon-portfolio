import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Skill({ iconName, title, className }) {
    return (
        <div className="skill">
            <div className="skillContentText">
                <FontAwesomeIcon className="skillIcon" icon={iconName} />
                <h3 className="skillTitle">{title}</h3>
            </div>
            <div className="skillContent">
                <div className="skillBar"></div>
                <div className={`skillProgress ${className}`}></div>
            </div>
        </div>
    )
}

export default Skill