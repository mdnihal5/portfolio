import Navbar from "./components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Hero from "./components/Hero/Hero";
import { HeroHighlight } from "./components/ui/HeroHighlight";
import { motion } from "framer-motion";
import "./index.css";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Project", href: "#work" },
];

const App = () => (
    <>
        <HeroHighlight>
            <motion.div
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="w-screen h-screen overflow-x-hidden overflow-y-scroll flex flex-col items-center"
            >
                <Navbar items={navItems} />
                <Hero />
                <Toaster position="top-center" />
            </motion.div>
        </HeroHighlight>
    </>
);

export default App;
