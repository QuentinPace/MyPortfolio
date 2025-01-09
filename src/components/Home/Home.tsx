import portfolioObj from "../../portfolioObj"
import "./Home.scss"
import SlideInDiv from "../SlideInDiv/SlideInDiv";
import { motion } from "framer-motion";

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
                    {/* <SlideInDiv fromLeft={false} className="main-headshot" style={{"backgroundImage": `url(${portfolioObj.headshotPicUrl})`}}></SlideInDiv> */}
                    <motion.div
                        className="main-headshot"
                        style={{"backgroundImage": `url(${portfolioObj.headshotPicUrl})`}}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                    />
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