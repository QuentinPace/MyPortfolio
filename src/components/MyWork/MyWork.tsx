import "./MyWork.css"
import portfolioObj from "../../portfolioObj"
import { Project } from "../../portfolioObj"; // TS interface
import React from "react";
import SlideInDiv from "../SlideInDiv/SlideInDiv";

export default function MyWork () {

    const workFormatter = (myWorkArr: Project[]): React.ReactNode[] => {
        const finalNodes = []
        for(let i = 0; i < myWorkArr.length; i++){
            finalNodes.push((
                <SlideInDiv className="project-item-block" fromLeft={i % 2 == 0} key={i}>
                        <div 
                        className="project-item" 
                        style={{backgroundImage: `url(${myWorkArr[i].previewImg})`}}
                        onClick={() => window.open(myWorkArr[i].liveLink, "_blank")}>
                            <div>Visit {myWorkArr[i].name}</div>
                        </div>
                </SlideInDiv>
            ))
        }
        return finalNodes


    }

    return (
        <main className="my-work-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                id="wave"
                style={{
                    transform: 'rotate(180deg)',
                    transition: '0.3s',
                    margin: 0,
                    width: "100%",
                    display: "block",
                    padding: 0
                }}
                viewBox="0 0 1440 280"
                version="1.1"
              >
                <defs>
                  <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                    <stop stopColor="rgba(43.579, 43.579, 43.579, 1)" offset="0%" />
                    <stop stopColor="rgba(43.579, 43.579, 43.579, 1)" offset="100%" />
                  </linearGradient>
                </defs>
                <path
                  style={{
                    transform: 'translate(0, 0px)',
                    opacity: 1,
                  }}
                  fill="url(#sw-gradient-0)"
                  d="M0,84L30,84C60,84,120,84,180,93.3C240,103,300,121,360,140C420,159,480,177,540,154C600,131,660,65,720,56C780,47,840,93,900,102.7C960,112,1020,84,1080,98C1140,112,1200,168,1260,172.7C1320,177,1380,131,1440,102.7C1500,75,1560,65,1620,56C1680,47,1740,37,1800,28C1860,19,1920,9,1980,42C2040,75,2100,149,2160,182C2220,215,2280,205,2340,205.3C2400,205,2460,215,2520,224C2580,233,2640,243,2700,224C2760,205,2820,159,2880,140C2940,121,3000,131,3060,144.7C3120,159,3180,177,3240,177.3C3300,177,3360,159,3420,130.7C3480,103,3540,65,3600,84C3660,103,3720,177,3780,210C3840,243,3900,233,3960,224C4020,215,4080,205,4140,172.7C4200,140,4260,84,4290,56L4320,28L4320,280L4290,280C4260,280,4200,280,4140,280C4080,280,4020,280,3960,280C3900,280,3840,280,3780,280C3720,280,3660,280,3600,280C3540,280,3480,280,3420,280C3360,280,3300,280,3240,280C3180,280,3120,280,3060,280C3000,280,2940,280,2880,280C2820,280,2760,280,2700,280C2640,280,2580,280,2520,280C2460,280,2400,280,2340,280C2280,280,2220,280,2160,280C2100,280,2040,280,1980,280C1920,280,1860,280,1800,280C1740,280,1680,280,1620,280C1560,280,1500,280,1440,280C1380,280,1320,280,1260,280C1200,280,1140,280,1080,280C1020,280,960,280,900,280C840,280,780,280,720,280C660,280,600,280,540,280C480,280,420,280,360,280C300,280,240,280,180,280C120,280,60,280,30,280L0,280Z"
                />
              </svg>
            <h2>My Work</h2>
            <section>
                {workFormatter(portfolioObj.myWork)}
            </section>
        </main>
    )
}