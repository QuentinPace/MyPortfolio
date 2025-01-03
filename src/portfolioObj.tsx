const portfolioObj = {
    name: "Quentin Pace",
    resumeDocUrl: "https://docs.google.com/document/d/1k_Dsgk_4ecgemzwIvDIiTXBF4etLZ3F4P8-g-10Iaio/edit?tab=t.0",
    jobTitle: "Full-Stack Software Engineer",
    headshotPicUrl: "https://habito-images.s3.us-east-2.amazonaws.com/headhsot.jpg",
    linkedInLink: "https://www.linkedin.com/in/quentin-pace-507820300/",
    email: "quentinepace@gmail.com",
    githubProfileLink: "https://github.com/QuentinPace",
    aLittleBitAboutMe: "Hi, I’m Quentin Pace, a Software Engineer passionate about building tools that make a difference. A recent graduate of App Academy, I've built applications ranging from habit trackers to FinTech apps. Before tech, I managed culinary teams, where I learned the value of teamwork and organizational skills—skills I bring to every project. Outside of coding, I'm either in the gym, working on my golf swing, or off on adventures with my little one. Life's all about growth and connection, so let's collaborate and create something amazing!",
    howItAllStarted: "As a child, I dreamed of creating video games, captivated by the creativity and technology behind them. That passion sparked again in high school when I took my first coding class—I was instantly hooked. Fast forward to today, that curiosity has grown into a full pursuit of success in software development. From a kid with a dream to a determined developer, this journey has been all about growth, learning, and turning passion into reality.",
    myMission: "My mission is to deliver high-quality software solutions that consistently exceed expectations. I ensure that every project I work on is completed with precision and care. I take pride in creating solutions that are not only functional but also reflect a commitment to innovation and excelence.",
    languages: ["JavaScript", "Python", "TypeScript","HTML","CSS","SQL"],
    frameworks: ["React.js","Redux","Express.js","Flask","Sequelize","SQLAlchemy"],
    databases: ["SQLite","PostgreSQL"],
    otherTools: ["NPM","Node.js","Nodemon","Chai","Cypress","Docker","Mocha","Postman","Vite","AWS","Render","GitHub"],
    myWork: [
        {
            name: "Habito",
            description: "Habito is a web application designed to help users build and maintain positive habits by giving users daily tasks/habits to complete. Users can create and edit personalized programs, receive a daily list of habits to complete, maintain a daily streak, and earn rewards like badges and points for their accomplishments. Habito, built as a solo project, combines a robust SQLAlchemy-Flask backend in Python with an intuitive React-Vite frontend in JavaScript, delivering both reliability and a seamless user experience.",
            githubLink: "https://github.com/QuentinPace/Habito",
            liveLink: "https://habito-lc92.onrender.com/login",
            previewImg: "https://habito-images.s3.us-east-2.amazonaws.com/Habito-login-signup-page.png",
        },
        {
            name: "RobinhoodClone",
            description: "RobinHoodClone is a streamlined stock trading application inspired by Robinhood, built with 2 full CRUD features and 2 partial CRUD features. Developed by Quentin Pace, Adrian Arriaga, Tina Zhou, and Mandy Pan in one week, the platform enables users to efficiently buy and sell stocks, manage their portfolio, and create or edit watchlists. Designed with a focus on intuitive user experience and performant backend queries, RobinHoodClone delivers a reliable and scalable foundation for stock trading functionality.",
            githubLink: "https://github.com/QuentinPace/RobinhoodClone",
            liveLink: "https://robinhoodclone-maw2.onrender.com/login",
            previewImg: "https://habito-images.s3.us-east-2.amazonaws.com/RobinhoodClone-login-signup-page.png"
        },
        {
            name: "AirbnbClone",
            description: "Airbnb-Clone is a web application inspired by Airbnb! This application is complete with full CRUD for spots and Reviews. With a RESTful api the backend infrastructure is easily scalable. And with a React/Redux frontend the site is fast and reliable.",
            githubLink: "https://github.com/QuentinPace/Airbnb-clone",
            liveLink: "https://airbnb-clone-qlbv.onrender.com/",
            previewImg: "https://habito-images.s3.us-east-2.amazonaws.com/AirbnbClone-home-page.png"
        }
    ]
}

export interface Project {
    name: string
    description: string;
    githubLink: string;
    liveLink: string;
    previewImg: string
}

export default portfolioObj