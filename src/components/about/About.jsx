import "./about.scss"
import PortfolioList from "../portfolioList/PortfolioList";

import { useState } from "react";
import { useEffect, useRef } from "react"
import { languages, frameworks, tools } from "../../data";
import { IconContext } from "react-icons";


export default function About() {
    const [selected, setSelected] = useState("languages");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "languages",
            title: "Languages",
        },
        {
            id: "frameworks",
            title: "Frameworks",
        },
        {
            id: "tools",
            title: "Tools",
        },

    ];

    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
            setWidth(window.innerWidth);
    }
    useEffect(() => {
            window.addEventListener('resize', handleWindowSizeChange);
            return () => {
                window.removeEventListener('resize', handleWindowSizeChange);
            }
        }, []);

    let isMobile = (width <= 768);
    
    let iconSize;
    if(!isMobile){
        iconSize = '40px';
    }

    useEffect(()=>{
        switch(selected) {
            case "languages":
                setData(languages);
                
                break;
            case "frameworks":
                setData(frameworks);
                
                break;
            case "tools":
                setData(tools);
                break;
            default:
                setData(languages);
               
        }
    }, [selected])

    return (
        <div className="about" id="about">
            
            <div className="left">
                <h1>About Me</h1>
                <div className="container">
                    
                    <div className="contentBox">
                        <div className="contentContainer">
                            <p>
                                After graduating with a MSci in Computing Science, I've been wholly focused on building and 
                                leveraging software to optimise business operations. I also share what I learn over on my <a href="https://joekadi.medium.com/" target="_blank">blog</a>. 
                                During university I had the opportunity to research deep learning and UX, develop many software applications for a range of clients, tutor students and mark exams. 
                                Whilst studying, I worked in a consultancy firm as a full stack software engineer and co-founded <a href="https://www.toceglasgow.com/" target="_blank">TÓCE</a>.
                                If you have a project you think I could help with, or just want to chat, don't hesistate to <a href="#contact">get in touch!</a>
                            </p>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <div className="right">
                <h1>Skills</h1>
                <div className="skills" id="skills">
                    
                    <ul>
                        {list.map(item=>(
                        <PortfolioList 
                            title={item.title} 
                            active={selected === item.id} 
                            setSelected={setSelected}
                            id={item.id}
                        />
                        ))}
                    </ul>

                    <div className="container">
                        {data.map((d) => (
                            <div className="item">
                                 { //Check if message failed
                                    (!isMobile)
                                    ? 
                                    <>
                                    <IconContext.Provider 
                                     value={{ color: 'crimson', size: '40px' }}
                                        >
                                    <div className="icon">
                                        {d.icon}
                                    </div>
                                     </IconContext.Provider>
                                    <p>{d.title}</p>
                                    </>
                                    : 
                                    <>
                                    <IconContext.Provider 
                                     value={{ color: 'crimson', size: '30px' }}
                                        >
                                    <div className="icon">
                                        {d.icon}
                                    </div>
                                     </IconContext.Provider>
                                    <p>{d.title}</p>
                                    </>
                                }

                            </div>
                        ))}
                    </div>
                    
                  
                    
                </div>
            </div>

            
            
            
        </div>
    )
}
