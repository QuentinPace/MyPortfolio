import React, { useState, useEffect } from "react";
import { Link, Element } from "react-scroll";
import "./Landing.css"
import Home from "../Home/Home.tsx"
import About from "../About/About.tsx"
import { useNavigate } from "react-router-dom";


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
          <div className="nav-left"></div>
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
                My Work
              </Link>
            </li>
          </ul>
          <div className="nav-right" onClick={() => navigate("/contact")}>Contact Me</div>
        </header>
        <Element className="section" name="section1" id="section1">
          <Home />
        </Element>  
        <Element className="section" name="section2" id="section2">
          <About />
        </Element>  
        <Element className="section" name="section3" id="section3">
          <h1>Section 3</h1>
          <p>Content for Section 3</p>
        </Element>
      </main>
    );
};

export default Landing;