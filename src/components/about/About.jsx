import "./about.scss"

export default function About() {
    return (
        <div className="about" id="about">
            <h1>About Me</h1>
            <div className="container">
                <div className="contentBox">
                    <div className="contentContainer">
                        <p>
                            After graduating with a MSci in Computing Science, I've been wholly focused on building and 
                            leveraging software to optimise business operations. I also share what I learn over on my <a href="https://joekadi.medium.com/" target="_blank">blog</a>. 
                            During university I had the opportunity to research deep learning and UX, develop many software applications for a range of clients, tutor students and mark exams. 
                            Whilst studying I worked in a consultancy firm as a full stack software engineer and co-founded TÓCE Limited.
                            If you have a project you think I could help with, or just want to chat, don't hesistate to <a href="#contact">get in touch!</a>
                        </p>
                    </div>
                </div>
            </div>
            
            <a href="assets/cv.pdf" target="_blank"><button>Resume</button></a>
            
        </div>
    )
}
