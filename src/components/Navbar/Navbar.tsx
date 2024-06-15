import React from "react";

interface NavbarProps {
    items: {
        label: string;
        href: string;
    }[];
}

const Navbar: React.FC<NavbarProps> = ({ items }) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        event.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div id="home" className="z-20 font-bold p-5 flex min-w-[300px] w-[40%] items-center justify-center">
            <nav className="bg-white rounded-lg shadow-[0_10px_30px_rgba(122,_48,_184,_0.7)] gap-3 z-10 min-w-120 w-full max-w-screen-lg">
                <div className="container h-16 flex justify-between items-center mx-auto px-4">
                    <a href="/" onClick={(e) => handleClick(e, "#home")} className="text-xl font-bold text-gray-800 font-caveat">
                        Nihal
                    </a>
                    <ul className="flex items-center gap-3 justify-end w-full">
                        {items.map((item, index) => (
                            <li key={index} className="w-auto md:mx-4 hover:scale-110">
                                <a href={item.href} onClick={(e) => handleClick(e, item.href)} className="text-gray-600 hover:text-gray-900">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
