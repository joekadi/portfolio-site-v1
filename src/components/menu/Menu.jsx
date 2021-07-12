import "./menu.scss"
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { Divider, Typography } from '@material-ui/core';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import {useState, useEffect} from 'react';


export default function Menu({ menuOpen, setMenuOpen }) {
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

    let isMobile = (width <= 786);

    return (
        <div className={"menu " +(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                   <HomeOutlinedIcon className="menuIcon"/>
                   <a href="#intro">HOME</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                   <PersonOutlineOutlinedIcon className="menuIcon"/>
                   <a href="#about">ABOUT</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                   <CodeOutlinedIcon className="menuIcon"/>
                   <a href="#projectSlider">PROJECTS</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                   <CreateOutlinedIcon className="menuIcon"/>
                   <a href="#writings">WRITINGS</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                   <DescriptionOutlinedIcon className="menuIcon"/>
                   <a href = "/assets/cv.pdf" target = "_blank">RESUME</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                   <MailOutlineIcon className="menuIcon"/>
                   <a href="#contact">CONTACT</a>
                </li>
                
                {isMobile ? (
                        <>                
                        <Divider style={{ background: 'white' }}/>
                        <br/>
                        <li>
                            <MailIcon className="icon" />
                            <span><a href = "mailto: contact@joekadi.com">contact@joekadi.com</a></span>
                        </li>
                        <li>
                            <PhoneIcon className="icon" />
                            <span><a>+447402020719</a></span>
                        </li>
                        </>
                    ) : (
                        null
                )}


            </ul>

            <Divider style={{ background: 'white' }}/>

        </div>
    )
}
