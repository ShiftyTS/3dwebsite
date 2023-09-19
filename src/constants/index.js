import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    Hatch,
    ForTwo,
    FiTracker,
    COVID6ix,
    C,
    Cplusplus,
    dotnet,
    Firebase,
    Java,
    Linux,
    Swift,
    Csharp,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const languages = [
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "HTML",
        icon: html,
    },
    {
        name: "CSS",
        icon: css,
    },
    {
        name: "Swift",
        icon: Swift,
    },
    {
        name: "C",
        icon: C,
    },
    {
        name: "C++",
        icon: Cplusplus,
    },
    {
        name: "C#",
        icon: Csharp,
    },
    {
        name: "Java",
        icon: Java,
    },
];

const technologies = [
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Linux",
        icon: Linux,
    },
    {
        name: "Firebase",
        icon: Firebase,
    },
];


const experiences = [
    {
        title: "Software Developer Intern",
        company_name: "Hatch Ltd.",
        icon: Hatch,
        iconBg: "#e0e0e0",
        date: "May 2023 - Aug 2023",
        points: [
            "Developed an AI‑powered PDF chatbot MERN app that utilizes semantic search to accurately interpret user queries and contextual information, simplifying and reducing average manual search times by 35%",
            "Built an intuitive UI in TypeScript using React and Tailwind CSS featuring file uploading and a real‑time chat window for users to engage in conversations with the uploaded PDFs",
            "Powered the chatbot’s conversational capabilities by leveraging the Azure OpenAI API to produce and compare word embeddings generated from PDF text and user queries",
        ],
    },
    {
        title: "Software Developer Intern",
        company_name: "Hatch Ltd.",
        icon: Hatch,
        iconBg: "#e0e0e0",
        date: "July 2022 - Aug 2022",
        points: [
            "Developed a dynamic Tkinter GUI in Python to streamline the usage of a smelting calibration tool",
            "Created informative data visualizations using Matplotlib to simplify the interpretation of calibration results",
            "Shipped an optimized version of a smelting calibration script which reduced execution time by 87.5% by integrating parallel processing",
        ],
    },
];

const projects = [
    {
        name: "ForTwo",
        description:
            "Created a daily question‑answering activity iOS app for couples to learn more about each other",
        tags: [

        ],
        image: ForTwo,
        source_code_link: "https://github.com/",
    },
    {
        name: "FiTracker",
        description:
            "Developed a MERN stack web application that allows users to create accounts and track their past workouts",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
        ],
        image: FiTracker,
        source_code_link: "https://github.com/",
    },
    {
        name: "COVID‑6ix",
        description:
            "Built a web scraper to determine current COVID‑19 statistics for the Greater Toronto Area using Selenium",
        tags: [

        ],
        image: COVID6ix,
        source_code_link: "https://github.com/",
    },
];

export { services, languages, technologies, experiences, projects };