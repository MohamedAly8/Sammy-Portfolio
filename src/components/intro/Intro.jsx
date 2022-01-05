import "./Intro.css"
import { FaGithub, FaLinkedin, FaReact} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import {RiNewspaperLine} from "react-icons/ri"
import Me from "../../img/img3.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Sameeha Ahmed</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Programmer</div>
                            <div className="i-title-item">Digital Artist</div>
                            <div className="i-title-item">Calligrapher</div>
                            <div className="i-title-item">Aspring Learner</div>
                            <div className="i-title-item">Black Belt Holder</div>
                        </div>
                    </div>
                    <p className="i-description">
                        I am a 1st Year Computer Science student at Ryerson University. Passionate about 
                        Front End Development and UX Design. In my spare time you can find me drawing, fishing,
                         or learning new skills.

                        
                    </p>
                    <div className="i-icons">
                        {/* Github */}
                        <a href="https://github.com" target="_blank" rel="noreferrer">
                    <FaGithub size="3em"/>
                        </a>
                    {/* Resume */}
                        <a href="">
                        <RiNewspaperLine size="3em"/>
                        </a>
                    {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/sameeha-ahmed-93b38621a/" target="_blank" rel="noreferrer">
                    <FaLinkedin size="3em"></FaLinkedin>
                    </a>
                    {/* Email */}
                    <MdEmail size="3em"></MdEmail>
                    </div>

                    
                    
                </div>
                 
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro
