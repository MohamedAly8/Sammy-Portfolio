import "./Intro.css"
import { FaGithub, FaLinkedin} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import {RiNewspaperLine} from "react-icons/ri"
import Me from "../../img/img3.png"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Sameeha Ahmed </h1>
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
                        Front End Development and UX Design. On my spare time you can find me drawing, fishing,
                         or learning new skills.
                    </p>
                    <div className="i-icons">
                        <a href="https://github.com" target="_blank">
                    <FaGithub size="3em"/>
                        </a>
                    
                        <a href="">
                        <RiNewspaperLine size="3em"/>
                        </a>
                    
                        <a href="https://linkedin.com" target="_blank">
                    <FaLinkedin size="3em"></FaLinkedin>
                    </a>
                    
                    <MdEmail size="3em"></MdEmail>

                    </div>
                </div>
                 {/* <svg 
                 width="75"
                 height="75"
                 viewBox="0 0 75 75"
                 fill="none"
                 stroke="yellow"
                 className="i-scroll"
                 xmlns="http://www.w3.org/2000/svg"
                 ></svg> */}
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro
