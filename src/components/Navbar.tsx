import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
    items: {
        label: string;
        href: string;
    }[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
    const location = useLocation();
    console.log(location);

    return (
        <div className="flex items-center justify-center">
            <nav className="bg-white shadow-xl gap-3 z-10 min-w-120 w-96">
                <div className="container mx-auto h-16 flex  justify-between items-center">
                    <Link to="/" className="text-lg font-bold text-gray-800">
                        Nihal
                    </Link>
                    <ul className={`flex items-center gap-3 justify-evenly  `}>
                        {items.map((item, index) => (
                            <li key={index} className={`w-1/2 ${location.pathname === item.href ? "bg-gray-100 border-b-2 border-gray-800" : ""}`}>
                                <Link to={item.href} className={`text-gray-600 hover:text-gray-900 ${location.pathname === item.href ? "text-gray-800" : ""}`}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
