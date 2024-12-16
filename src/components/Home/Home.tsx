import portfolioObj from "../../portfolioObj"
import "./Home.scss"

export default function Home () {

    const handleGetResumeClick = () => {
        window.open("/resume.pdf", "_blank");
      };

    return (
        <main className="main-home-container">
            <section className="main-home">
                <div className="home-left">
                    <div className="home-text-container">
                        <h1>{portfolioObj.name}</h1>
                        <h2>{portfolioObj.jobTitle}</h2>
                    </div>
                    <button className= "get-resume" onClick= {handleGetResumeClick}>Get my resume</button>
                </div>
                <div className="home-right">
                    <div className="main-headshot" style={{"backgroundImage": `url(${portfolioObj.headshotPicUrl})`}}></div>
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