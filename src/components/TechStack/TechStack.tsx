import "./TechStack.css"
import PostmanIcon from "../PostmanIcon"
import NodeJsIcon from "../NodeJsIcon"
import PostgreSQLIcon from "../PostgreSQLIcon"
import AwsIcon from "../AWSIcon"
import JavascriptIcon from "../JavascriptIcon"
import ReactIcon from "../ReactIcon"
import ReduxIcon from "../ReduxIcon"
import TypescriptIcon from "../TypescriptIcon"
import ViteIcon from "../ViteIcon"
import PythonIcon from "../PythonIcon"
import SlideInDiv from "../SlideInDiv/SlideInDiv"

export default function TechStack () {
    return (
        <section className="tech-stack-container">
          <SlideInDiv fromLeft={true} className="tech-stack-text">
            <h1>Current Tech Stack</h1>
            <p>I see technology as a toolbox, not a limitation. I'm always adding new skills to bring the most innovative solution.</p>
          </SlideInDiv>
          <aside className="tech-logos-container">
            <div className="tech-logos-sub-container">
              <PostmanIcon />
              <NodeJsIcon />
              <PostgreSQLIcon />
              <AwsIcon />
              <JavascriptIcon />
              <ReactIcon />
              <ReduxIcon />
              <TypescriptIcon />
              <ViteIcon />
              <PythonIcon />
            </div>
          </aside>
        </section>
    ) 
}