import { Eye, Github } from "lucide-react";
const TechStack = [
    "ci ci-html","ci ci-css","ci ci-js","ci ci-expressjs bg-white rounded-full","ci ci-nodejs","ci ci-mongodb","ci ci-ts",
];

const Projects = () => {
    const projects = [
        {
            title: "A resource Management Website Where Users can Add/Remove resource/resumes",
            description: "Something about Project 1",
            link: "https://codex-mern.vercel.app",
            code: "https://github.com/mdnihal5/codex",
        },
        {
            title: "Take A snapshot of your codeforces profile ,make using codeforces api",
            description: "Something about Project 2",
            link: "https://codeforces-card.vercel.app/",
            code: "https://github.com/mdnihal5/Codeforces-Card",
        },
        {
            title: "My Porfolio Website crafted  with acertinity ui and tailwind",
            description: "Something about Project 3",
            link: "https://nihal-dev.vercel.app/",
            code: "https://github.com/mdnihal5/portfolio",
        },
    ];

    return (
        <div className="py-12 grid items-start gap-8 sm:max-w-2xl sm:mx-auto mx-[10%] sm:grid-cols-1 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            {projects.map((item, key) => (
                <div key={key} className="grid gap-4 bg-gray-950 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <iframe title={item.title} src={item.link} className="w-full min-h-[300px] rounded-t-lg" frameBorder="0" scrolling="no" allowFullScreen />

                    <div className="grid gap-1 p-4">
                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        <p className="text-[1em] text-white py-2">{item.description}</p>
                        <div className="w-full h-4 text-white">
                            TechStack Used: {TechStack.map((stack, i) => (
                                <i key={i} className={`${stack} text-3xl text-white`}></i>
                            ))}
                        </div>
                        <div className="flex gap-2 mt-2">
                            <a
                                href={item.link}
                                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-gray-900 px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Eye className="mr-2 h-4 w-4" />
                                Live Demo
                            </a>
                            <a
                                href={item.code}
                                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-gray-900 px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
