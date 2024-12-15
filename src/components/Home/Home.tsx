import React, { useState, useEffect } from "react";
import { Link, Element } from "react-scroll";
import "./Home.css"

const Home: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>("section1");

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
      <main>
        <header className="nav-bar-main">
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
        </header>
        <Element className="section" name="section1" id="section1">
          <h1>Section 1</h1>
          <p>Content for Section 1</p>
        </Element>  
        <Element className="section" name="section2" id="section2">
          <h1>Section 2</h1>
          <p>Content for Section 2</p>
        </Element>  
        <Element className="section" name="section3" id="section3">
          <h1>Section 3</h1>
          <p>Content for Section 3</p>
        </Element>
      </main>
    );
};

export default Home;