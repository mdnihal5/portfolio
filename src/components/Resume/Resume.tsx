import { Link } from "react-router-dom";
const Resume = () => {
    const downloadUrl = "https://drive.google.com/uc?export=download&id=14jhAR6vVqPyRifPs_1QF2pgqCnfn51pr";

    return (
        <Link to={downloadUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Download Resume
        </Link>
    );
};

export default Resume;
