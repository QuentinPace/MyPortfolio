import portfolioObj from "../../portfolioObj"
import "./Home.scss"

export default function Home () {

    return (
        <>
            <main className="main-home">
                <div className="home-left">
                    <div className="home-text-container">
                        <h1>{portfolioObj.name}</h1>
                        <h2>{portfolioObj.jobTitle}</h2>
                    </div>
                </div>
                <div className="home-right">
                    <div className="main-headshot" style={{"backgroundImage": `url(${portfolioObj.headshotPicUrl})`}}></div>
                </div>
            </main>
            <div className="scroll-down-container">
                <div className="chevron"></div>
                <div className="chevron"></div>
                <div className="chevron"></div>
            </div>
            
        </>
    )
}