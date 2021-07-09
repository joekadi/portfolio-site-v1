import "./projectSlider.scss";
import { projectPortfolio } from "../../project_data";
import { useState } from "react";


export default function ProjectSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (direction) => {
        direction === "left"
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : projectPortfolio.length - 1)
        : setCurrentSlide(currentSlide < projectPortfolio.length - 1 ? currentSlide + 1 : 0);
    };


    return (
        
        <div className="projectSlider" id="projectSlider">
            <h1>Some Projects</h1>
            <div 
                className="slider" 
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
                {projectPortfolio.map( (d) => (

                    <div className="container">
                        <div className="item">
                            <div className="contentContainer">
                                <h2>{d.title}</h2>
                                <h3>Technologies Used: <b>{d.technologies[0]}, {d.technologies[1]}, {d.technologies[2]}, {d.technologies[3]}</b></h3>
                                
                                {d.desc.map((word, idx) => (
                                        <ul>
                                            <li key={idx}>{word}</li>
                                        </ul> 
                                ))}

                                <div className="links">
                                <a href={d.links[0]} target="_blank"><b><span>{d.linkTitles[0]}</span></b></a>
                                <a href={d.links[1]} target="_blank"><b><span>{d.linkTitles[1]}</span></b></a>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a href="https://github.com/joekadi" target="_blank" className="button">View Entire GitHub Portfolio</a>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>

        </div>
    )
}
