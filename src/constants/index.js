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
            // "Built investment dashboards and endpoints with TypeScript, React, Node, and Express, using D3.js for real-time market data visualization and WebSocket protocols for low-latency updates for 85+ portfolio managers",
            // "Developed a compliance screening tool in Python that fully automates the process of cross-referencing document info with an SQL database, powered by AWS services, resulting in annual savings of ∼$55,000",
            // "Created a Python-based factsheet checker to ensure fund data accuracy, optimizing SQL queries with strategic indexing, restructuring, and parameterization, which enhanced processing efficiency by over 80%",
            // "Fixed 45+ bugs and wrote unit tests and component tests using pytest, achieving a 90% code path coverage",
        ],
    },
    {
        title: "Software Engineering Intern",
        company_name: "Hatch Ltd.",
        icon: Hatch,
        iconBg: "#e0e0e0",
        date: "May 2023 - Aug 2023",
        points: [
            // "Deployed an internal chatbot using the MERN stack, TypeScript, and GPT-3.5, reducing average manual search times by 70% and keeping data secured through encrypted file uploads and JWT-based authentication",
            // "Built a PyTorch machine learning model with SpaCy for text preprocessing to classify and assess safety hazard descriptions, enhancing the processing speed of ∼40,000 monthly hazard reports by over 60%",
            // "Implemented parallel programming in Python to reduce the runtime of time-sensitive functions by 87.5% while ensuring thread safety and preventing data corruption through synchronization mechanisms",
            // "Enhanced an internal data processing pipeline with Pandas to more efficiently handle large-scale sensor data, cutting processing time by 30% and improving the accuracy of digital twin simulations",
        ],
    },
    {
        title: "Software Engineering Intern",
        company_name: "Hatch Ltd.",
        icon: Hatch,
        iconBg: "#e0e0e0",
        date: "July 2022 - Aug 2022",
        points: [
            // "Developed GraphQL endpoints with Node and Apollo Server for a materials tracking system, reducing shortages by 20% through real-time queries for material availability, shipment status, and inventory levels",
            // "Improved search relevance algorithms and implemented custom search filters for the internal employee directory using Elasticsearch, TypeScript, and React, enabling workers to connect and collaborate more effectively",
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