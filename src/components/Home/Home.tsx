import portfolioObj from "../../portfolioObj"
import "./Home.scss"
import SlideInDiv from "../SlideInDiv/SlideInDiv";

export default function Home () {

    const handleGetResumeClick = () => {
        window.open(portfolioObj.resumeDocUrl, "_blank", "noopener,noreferrer");
      };

    return (
        <main className="main-home-container">
            <section className="main-home">
                <SlideInDiv fromLeft={true} className="home-left">
                    <div className="home-text-container">
                        <h1>{portfolioObj.name}</h1>
                        <h2>{portfolioObj.jobTitle}</h2>
                    </div>
                    <button className= "get-resume" onClick= {handleGetResumeClick}>Get my resume</button>
                </SlideInDiv>
                <div className="home-right">
                    <SlideInDiv fromLeft={false} className="main-headshot" style={{"backgroundImage": `url(${portfolioObj.headshotPicUrl})`}}></SlideInDiv>
                </div>
            </section>
            <div className="scroll-down-container">
                <div className="chevron"></div>
                <div className="chevron"></div>
                <div className="chevron"></div>
            </div>
        </main>
    )
}