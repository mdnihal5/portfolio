import { Button } from "@/components/ui/button";
import { Briefcase, Mail } from "lucide-react";
import { useTypewriter } from "react-simple-typewriter";
import Socials from "../Socials/Socials";
import toast from "react-hot-toast";
import Projects from "@/components/Projects/Projects";
import Resume from "@/components/Resume/Resume";
import Skills from "@/components/Skills/Skills";
import ContactMe from "./ContactMe";

const handleCopy = () => {
    navigator.clipboard.writeText("mdnihal.private1@gmail.com");
    toast.success("email copied successfully");
};

const Hero = () => {
    const [text] = useTypewriter({
        words: ["Mern Stack Developer", "Competitive Programmer"],
        loop: false,
    });

    return (
        <div className="flex flex-col my-5 gap-5 w-full h-full text-white items-center">
            <div id="about" className="w-full max-w-screen-lg px-4">
                <section id="about" className="w-full">
                    <div>
                        <h1 className="sm:text-4xl text-2xl font-bold text-white py-16">
                            I am a{" "}
                            <span className="sm:text-3xl text-xl py-6 font-bold">
                                <span className="text-[#FF0000]">{text}</span>
                            </span>
                        </h1>
                    </div>
                    <div className="grid sm:grid-cols-1 items-center justify-center md:grid-cols-2 gap-8">
                        <div className="text-white flex md:flex-row flex-col items-center justify-center  gap-8 sm:min-w-[450px] md:min-w-[900px] text-xl">
                            <div className="min-w-[200px] mx-20 items-center justify-center flex flex-col">
                                <img
                                    src="https://w0.peakpx.com/wallpaper/381/367/HD-wallpaper-iron-man-artwork-red-background-superheroes-dc-comics-ironman-thumbnail.jpg"
                                    width="400"
                                    height="400"
                                    alt="Tony"
                                    className="rounded-full mt-8 w-48 h-48 object-cover shadow-lg hover:shadow-xl transition-shadow"
                                />
                                <Socials />
                            </div>
                            <h2>
                                Hi, I'm Nihal, a passionate web developer and competitive programmer. I have a strong background in full-stack development, with expertise in modern web technologies
                                and problem-solving. I'm constantly learning and exploring new technologies to improve my skills and deliver high-quality solutions. In my free time, I enjoy
                                participating in coding challenges and competitions to sharpen my problem-solving abilities. Feel free to explore my portfolio and get in touch if you'd like to
                                collaborate on a project or discuss my qualifications further.
                            </h2>
                        </div>
                    </div>
                </section>
                <div className="flex sm:flex-row flex-col mt-12 my-8 items-center gap-3 justify-center">
                    <a href="#work" className="h-10 items-center flex gap-1 justify-center rounded-lg border border-gray-200 bg-gray-900 px-2 focus-visible:ring-gray-300">
                        <Briefcase className="mr-2 h-4 w-4" />
                        View Projects
                    </a>
                    <Resume />
                    <Button onClick={handleCopy} className="flex h-10 items-center justify-center rounded-lg border border-gray-200 bg-gray-900 px-6 focus-visible:ring-gray-300">
                        <Mail className="mr-2 h-4" />
                        Contact Me
                    </Button>
                </div>
            </div>
            <section id="skills" className="w-full max-w-screen-lg px-4">
                <div className="text-left space-y-6">
                    <h1 className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-bold font-2xl text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        SKILLS
                    </h1>
                    <div className="text-white text-2xl font-bold">
                        <Skills />
                    </div>
                </div>
            </section>
            <section id="work" className="w-full max-w-screen-lg px-4">
                <div className="text-left space-y-6">
                    <h1 className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-bold font-2xl text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        PROJECTS
                    </h1>
                    <div className="text-white text-2xl font-bold">Check out some of the projects I've worked on.</div>
                </div>
                <Projects />
            </section>
            <ContactMe />
        </div>
    );
};

export default Hero;
