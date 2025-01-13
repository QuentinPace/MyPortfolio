import "./About.css"
import portfolioObj from "../../portfolioObj"
import SlideInDiv from "../SlideInDiv/SlideInDiv"

const technologyFormatter = (techArr: string[]): React.ReactNode[] => {
    const finalNodes: React.ReactNode[] = []

    for (let i = 0; i < techArr.length ; i++){
        finalNodes.push((
            <div key={i}>
                <p>{techArr[i]}</p>
            </div>
        ))

    }
    return finalNodes

}

export default function About () {
    return (
        <section className="about-container">
            <div className="about-articles">
                <SlideInDiv fromLeft={true} className="about-me-container">
                    <header>A little bit about me</header>
                    <article><p>{portfolioObj.aLittleBitAboutMe}</p></article>
                </SlideInDiv>
                <SlideInDiv fromLeft={false} className="how-it-started-container">
                    <header>How it all started</header>
                    <article><p>{portfolioObj.howItAllStarted}</p></article>
                </SlideInDiv>
                <SlideInDiv fromLeft={false} className="my-mission-container">
                    <header>My mission</header>
                    <article><p>{portfolioObj.myMission}</p></article>
                </SlideInDiv>
            </div>
            <div className="technology-container">
                <h2>My Current Tech Stack</h2>
                <h3>Im always learning new tools to ensure I'm always delivering the most effective and innovative solutions</h3>
                <div className="tech-sections-container">
                    <section className="languages">
                        <label>Languages:</label>
                        <ul>{technologyFormatter(portfolioObj.languages)}</ul>
                    </section>
                    <section className="frameworks">
                        <label>Frameworks:</label>
                        <ul>{technologyFormatter(portfolioObj.frameworks)}</ul>
                    </section>
                    <section className="databases">
                        <label>Databases:</label>
                        <ul>{technologyFormatter(portfolioObj.databases)}</ul>
                    </section>
                    <section className="other-tools">
                        <label>Other Tools:</label>
                        <ul>{technologyFormatter(portfolioObj.otherTools)}</ul>
                    </section>
                </div>
            </div>
            {/* <div className="offset-about"></div> */}
        </section>
    )
}