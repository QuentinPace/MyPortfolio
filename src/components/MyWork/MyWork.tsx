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
                <SlideInDiv className="project-item-wrapper" fromLeft={i % 2 == 0} key={i}>
                        <div 
                        className="project-item" 
                        >
                            <img className="project-item-img" src={myWorkArr[i].previewImg} alt="Example" />
                            <footer className="project-item-text-container">
                                <h4>{myWorkArr[i].name}</h4>
                                <p>{myWorkArr[i].description}</p>
                                <nav className="project-button-container">
                                    <button className="live-site-project" onClick={() => window.open(myWorkArr[i].liveLink, "_blank")}>Live Site <span className="arrow">→</span></button>
                                    <button className="source-code-project" onClick={() => window.open(myWorkArr[i].githubLink, "_blank")}>GitHub Repo <span className="arrow">→</span></button>
                                    <button className="demo-video-project" onClick={() => window.open(myWorkArr[i].demoVideoLink, "_blank")}>Demo Video <span className="arrow">→</span></button>
                                </nav>
                            </footer>
                        </div>
                </SlideInDiv>
            ))
        }
        return finalNodes


    }

    return (
        <main className="my-work-container">
              <svg
              id="wave2"
              style={{transform: "rotate(180deg)", transition: "0.3s"}}
              viewBox="0 0 1440 180" 
              version="1.1"
              xmlns="http://www.w3.org/2000/svg">
                <defs><linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
                  <stop stopColor="rgba(23, 23, 23, 1)" offset="0%"></stop>
                  <stop stopColor="rgba(23, 23, 23, 1)" offset="100%"></stop>
                  </linearGradient>
                </defs>
                  <path
                  style={{transform: "translate(0, 0px)", opacity:"1"}}
                  fill="url(#sw-gradient-1)"
                  d="M0,90L26.7,75C53.3,60,107,30,160,25C213.3,20,267,40,320,80C373.3,120,427,180,480,175C533.3,170,587,100,640,90C693.3,80,747,130,800,140C853.3,150,907,120,960,90C1013.3,60,1067,30,1120,20C1173.3,10,1227,20,1280,50C1333.3,80,1387,130,1440,160C1493.3,190,1547,200,1600,190C1653.3,180,1707,150,1760,155C1813.3,160,1867,200,1920,190C1973.3,180,2027,120,2080,80C2133.3,40,2187,20,2240,20C2293.3,20,2347,40,2400,50C2453.3,60,2507,60,2560,80C2613.3,100,2667,140,2720,135C2773.3,130,2827,80,2880,95C2933.3,110,2987,190,3040,230C3093.3,270,3147,270,3200,260C3253.3,250,3307,230,3360,210C3413.3,190,3467,170,3520,150C3573.3,130,3627,110,3680,100C3733.3,90,3787,90,3813,90L3840,90L3840,300L3813.3,300C3786.7,300,3733,300,3680,300C3626.7,300,3573,300,3520,300C3466.7,300,3413,300,3360,300C3306.7,300,3253,300,3200,300C3146.7,300,3093,300,3040,300C2986.7,300,2933,300,2880,300C2826.7,300,2773,300,2720,300C2666.7,300,2613,300,2560,300C2506.7,300,2453,300,2400,300C2346.7,300,2293,300,2240,300C2186.7,300,2133,300,2080,300C2026.7,300,1973,300,1920,300C1866.7,300,1813,300,1760,300C1706.7,300,1653,300,1600,300C1546.7,300,1493,300,1440,300C1386.7,300,1333,300,1280,300C1226.7,300,1173,300,1120,300C1066.7,300,1013,300,960,300C906.7,300,853,300,800,300C746.7,300,693,300,640,300C586.7,300,533,300,480,300C426.7,300,373,300,320,300C266.7,300,213,300,160,300C106.7,300,53,300,27,300L0,300Z"></path></svg>
            <h2>My Work</h2>
            <section className="work-boxes-container">
                {workFormatter(portfolioObj.myWork)}
            </section>
        </main>
    )
}