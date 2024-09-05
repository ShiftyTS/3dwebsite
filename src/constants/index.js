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
        title: "Software Engineering Intern",
        company_name: "Fidelity Canada",
        icon: Fidelity,
        iconBg: "#e0e0e0",
        date: "Jan 2024 - Apr 2024",
        points: [

        ],
    },
    {
        title: "Software Engineering Intern",
        company_name: "Hatch Ltd.",
        icon: Hatch,
        iconBg: "#e0e0e0",
        date: "May 2023 - Aug 2023",
        points: [

        ],
    },
    {
        title: "Software Engineering Intern",
        company_name: "Hatch Ltd.",
        icon: Hatch,
        iconBg: "#e0e0e0",
        date: "July 2022 - Aug 2022",
        points: [

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