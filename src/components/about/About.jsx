import  "./about.css"
import bg from "../../img/img4.jpg"
import logo from "../../img/logo.jpg"

const About = () => {
    return (

        <div>

        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                <img
                src={bg} alt="" className="a-img"></img> 
                </div>
                </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Computer Science student @ Ryerson and aspiring Front End developer seeking Summer 2022 internship opportunities
                </p>
                <p className="a-desc">
                    Currently on a journey of learning HTML/CSS with a focus on Front End and UI/UX Design.
                    I am looking forward to applying my skillset into meaningful and impactful projects in a work environemnt.
                    I excel in a fast-paced work environment and am always looking forward to learning new technologies. 
                    I am proficient in python, java, html, css and I am looking to apply my skills in a meaningful internship

                </p>
                <div className="a-award">
                    <img src={logo} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">
                            Dean's List 2021/2022
                        </h4>
                        <p className="a-award-desc">
                            Attained a GPA above 3.5 for the 2021/2022 Academic Year
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
        <hr />
        </div>
    )
}

export default About
