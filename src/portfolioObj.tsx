const portfolioObj = {
    name: "Quentin Pace",
    resumeDocUrl: "https://docs.google.com/document/d/1k_Dsgk_4ecgemzwIvDIiTXBF4etLZ3F4P8-g-10Iaio/edit?tab=t.0",
    jobTitle: "Full-Stack Software Engineer",
    headshotPicUrl: "https://habito-images.s3.us-east-2.amazonaws.com/headhsot.jpg",
    linkedInLink: "https://www.linkedin.com/in/quentin-pace-507820300/",
    email: "quentinepace@gmail.com",
    githubProfileLink: "https://github.com/QuentinPace",
    aLittleBitAboutMe: "Hi there! I’m Quentin Pace, a full-stack software engineer based in Indiana. I love building applications that are fast, functional, and easy to use—whether it’s a fin-tech platform, a habit tracker, or a community-driven marketplace. When I’m not coding, you can find me lifting at the gym, perfecting my golf swing, or on adventures with my little one.",
    myWork: [
        {
            name: "Habito",
            description: "Habito is a web application designed to help users build and maintain positive habits by giving users daily tasks/habits to complete.",
            githubLink: "https://github.com/QuentinPace/Habito",
            demoVideoLink: "https://www.loom.com/share/ee4c0b41f7ad49a4b40f4c6604bb90d8?sid=5a493570-11c5-4092-bd87-81f840582ee6",
            liveLink: "https://habito-lc92.onrender.com/login",
            previewImg: "https://habito-images.s3.us-east-2.amazonaws.com/Habito-login-signup-page.png",

        },
        {
            name: "RobinhoodClone",
            description: "RobinHoodClone is a streamlined stock trading application inspired by Robinhood, built with 2 full CRUD features and 2 partial CRUD features.",
            githubLink: "https://github.com/QuentinPace/RobinhoodClone",
            demoVideoLink: "https://www.loom.com/share/ee4c0b41f7ad49a4b40f4c6604bb90d8?sid=5a493570-11c5-4092-bd87-81f840582ee6",
            liveLink: "https://robinhoodclone-maw2.onrender.com/login",
            previewImg: "https://habito-images.s3.us-east-2.amazonaws.com/RobinhoodClone-login-signup-page.png"
        }
    ]
}

export interface Project {
    name: string
    description: string;
    githubLink: string;
    liveLink: string;
    previewImg: string;
    demoVideoLink: string
}

export default portfolioObj