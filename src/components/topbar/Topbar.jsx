import "./topbar.scss"
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        joekadi.
                    </a>
                    <div className="itemContainer">
                        <PhoneIcon className="icon" />
                        <span>+447402020719</span>
                    </div>
                    <div className="itemContainer">
                        <MailIcon className="icon" />
                        <span><a href = "mailto: contact@joekadi.com">contact@joekadi.com</a></span>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
