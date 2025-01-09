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
                <div key={i} className="project-item-block">
                    <div 
                    className="project-item" 
                    style={{backgroundImage: `url(${myWorkArr[i].previewImg})`}}
                    onClick={() => window.open(myWorkArr[i].liveLink, "_blank")}>
                        <div>Visit {myWorkArr[i].name}</div>
                    </div>
                </div>
            ))
        }
        return finalNodes


    }

    return (
        <main className="my-work-container">
            <h2>My Work</h2>
            <section>
                {workFormatter(portfolioObj.myWork)}
            </section>
            <SlideInDiv fromLeft={true}>
                <section>Ohhhhhhbyeaaaaaaaa</section>
            </SlideInDiv>
        </main>
    )
}