import "./ContactMe.css"
import portfolioObj from "../../portfolioObj";
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import SlideInDiv from "../SlideInDiv/SlideInDiv";

export default function ContactMe () {

    return (
        <main className="contact-block">
            <div className="contact-container">
                <SlideInDiv id="section" fromLeft={false} onClick={() =>  window.location.href = `mailto:${portfolioObj.email}?subject=Let's%20Connect&body=Hello%20Quentin,`} className="email">
                    <div className="logo-container">
                        <FaEnvelope></FaEnvelope>
                    </div>
                    <div className="contact-text">
                        <header>Email</header>
                        <p>{portfolioObj.email}</p>
                    </div>
                </SlideInDiv>
                <SlideInDiv id="section" fromLeft={false} onClick={() => window.open(portfolioObj.linkedInLink, "_blank")} className="linkedin">
                    <div className="logo-container">
                        <FaLinkedin></FaLinkedin>
                    </div>
                    <div className="contact-text">
                        <header>LinkedIn</header>
                    </div>
                </SlideInDiv>
                <SlideInDiv id="section" fromLeft={false} onClick={() => window.open(portfolioObj.githubProfileLink, "_blank")} className="github">
                    <div className="logo-container">
                        <FaGithub></FaGithub>
                    </div>
                    <div className="contact-text">
                        <header>Github</header>
                    </div>
                </SlideInDiv>
                <SlideInDiv id="section" fromLeft={false} onClick={() => window.open(portfolioObj.resumeDocUrl, "_blank")} className="resume">
                    <div className="logo-container">
                        <FaFileAlt></FaFileAlt>
                    </div>
                    <div className="contact-text">
                        <header>My Resume</header>
                    </div>
                </SlideInDiv>
            </div>
        </main>
    )

}