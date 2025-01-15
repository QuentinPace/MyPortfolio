import React, { useState, useEffect } from "react";
import { Link, Element } from "react-scroll";
import "./Landing.css"
import Home from "../Home/Home.tsx"
import About from "../About/About.tsx"
import MyWork from "../MyWork/MyWork.tsx";
import TechStack from "../TechStack/TechStack.tsx";
import { useNavigate } from "react-router-dom";
import portfolioObj from "../../portfolioObj.tsx";


const Landing: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>("section1");
    const navigate = useNavigate()

    // Track scroll position to update the active section
    const handleScroll = () => {
        const sections = document.querySelectorAll<HTMLDivElement>(".section");
        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
            const top = section.offsetTop - 100;
            const bottom = top + section.offsetHeight;

            if (scrollPosition >= top && scrollPosition <= bottom) {
                setActiveSection(section.getAttribute("id") || "");
            }
        });
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
    }, []);

    return (
      <main className="home-container-all" >
        <header className="nav-bar-main">
        <span className="title-name-container"><span className="name">{portfolioObj.name}</span> | {portfolioObj.jobTitle}</span>
          <ul className="nav-items-list">
            <li className="nav-item">
              <Link
                to="section1"
                smooth={true}
                duration={500}
                className={activeSection === "section1" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="section2"
                smooth={true}
                duration={500}
                className={activeSection === "section2" ? "active" : ""}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="section3"
                smooth={true}
                duration={500}
                className={activeSection === "section3" ? "active" : ""}
              >
                Tech Stack
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="section4"
                smooth={true}
                duration={500}
                className={activeSection === "section4" ? "active" : ""}
              >
                My Work
              </Link>
            </li>
            <li className="nav-item-li-text" onClick={() => navigate("/contact")}>Contact Me</li>
          </ul>
        </header>
        <Element className="section" name="section1" id="section1">
          <Home />
        </Element>  
        <Element className="section" name="section2" id="section2">
          <About />
        </Element>  
        <Element className="section" name="section3" id="section3">
          <TechStack />
        </Element>  
        <Element className="section" name="section4" id="section4">
          <MyWork />
        </Element>
      </main>
    );
};

export default Landing;