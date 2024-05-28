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
    Python,
    Fidelity,
    sql,
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
        id: "projects",
        title: "Projects",
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
        name: "Python",
        icon: Python,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "SQL",
        icon: sql,
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
        name: "Swift",
        icon: Swift,
    },
    {
        name: "Java",
        icon: Java,
    },
    {
        name: "C#",
        icon: Csharp,
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
        title: "Software Engineer Intern",
        company_name: "Fidelity Canada",
        icon: Fidelity,
        iconBg: "#e0e0e0",
        date: "Jan 2024 - Apr 2024",
        points: [
            "Developed a document compliance screener using Python, AWS S3, and GPT-4, which automatically cross-references extracted info against an SQL database, resulting in annual savings of ~$45,000",
            "Revamped a Python fund-factsheet checker cutting runtime by over 60%, optimizing SQL queries with strategic indexing, restructuring, and parameterization, and reducing redundancy across the codebase",
            "Enhanced search relevance algorithms and implemented custom search filters for the internal employee directory using Elasticsearch, TypeScript, and React, enabling workers to look up colleagues more effectively",
            "Fixed 45+ bugs and wrote unit tests and component tests using pytest, achieving a 90% code path coverage",
        ],
    },
    {
        title: "Software Developer Intern",
        company_name: "Hatch Ltd.",
        icon: Hatch,
        iconBg: "#e0e0e0",
        date: "May 2023 - Aug 2023",
        points: [
            "Deployed a PDF chatbot app reducing average manual search times for engineers by 70%, featuring an intuitive UI with file uploading and chat history storage, built using the MERN stack, TypeScript, Tailwind CSS, and GPT-3.5",
            "Built a machine learning model with PyTorch and GPT-3.5, using SpaCy text preprocessing, to classify safety reports and assign danger levels, enhancing processing time by over 50% for ~40,000 reports monthly",
            "Enhanced security and access control for over 200 monitoring tool users by implementing OAuth 2.0 and JWT",
        ],
    },
    {
        title: "Software Developer Intern",
        company_name: "Hatch Ltd.",
        icon: Hatch,
        iconBg: "#e0e0e0",
        date: "July 2022 - Aug 2022",
        points: [
            "Utilized parallel programming in Python to reduce the runtime of time‑sensitive functions by 87.5%. Ensured thread safety and prevented data corruption by implementing synchronization mechanisms",
            "Developed a dynamic Tkinter GUI in Python for a smelting calibration tool, seamlessly integrating informative visualizations with Matplotlib to reduce average manual data interpretation time by 55%",
        ],
    },
];

const projects = [
    {
        name: "ForTwo",
        description:
            "A daily question‑answering activity app for iOS aimed at helping couples learn more about each other.",
        tags: [
            {
                name: "Swift",
                color: "blue-text-gradient",
            },
            {
                name: "Xcode",
                color: "green-text-gradient",
            },
            {
                name: "SwiftUI",
                color: "green-text-gradient",
            },
            {
                name: "Firebase",
                color: "green-text-gradient",
            },
        ],
        image: ForTwo,
        source_code_link: "https://github.com/ShiftyTS/ForTwo",
    },
    {
        name: "FiTracker",
        description:
            "A fitness-tracking MERN stack web application engineered to empower users to document workouts to better monitor their fitness journey.",
        tags: [
            {
                name: "Javascript",
                color: "blue-text-gradient",
            },
            {
                name: "React",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "RESTapi",
                color: "pink-text-gradient",
            },
        ],
        image: FiTracker,
        source_code_link: "https://github.com/ShiftyTS/FiTracker",
    },
    {
        name: "COVID‑6ix",
        description:
            "COVID-6ix is a website built using Python and Selenium which gathers and displays current COVID‑19 statistics for the Greater Toronto Area.",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "Selenium",
                color: "green-text-gradient",
            },
            {
                name: "Web scraper",
                color: "pink-text-gradient",
            },
        ],
        image: COVID6ix,
        source_code_link: "https://github.com/ShiftyTS/COVID-6ix",
    },
];

export { services, languages, technologies, experiences, projects };