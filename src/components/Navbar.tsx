import { ReactNode, useState } from "react";
import { Menu } from 'lucide-react';

interface NavbarProps {
    children?: ReactNode;
}
export default function Navbar({ children }: NavbarProps) {
    const [MenuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md z-50">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <a className="text-black text-2xl font-bold">
                    Tienda - El topo
                </a>
                <a
                    href="#"
                    className="hidden md:inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                >
                    Get Started
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-black focus:outline-none"
                    onClick={() => {
                        setMenuOpen(!MenuOpen);
                    }}
                >
                    <Menu />
                </button>
            </div>
            <div
                className={`md:hidden ${MenuOpen ? "block" : "hidden"} bg-gray-800 text-white p-2  flex items-center justify-center `}
            >
                <a href="https://github.com/emaldonadon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-1 px3 hover:bg-gray-700 transition-colors">
                    Github
                </a>
            </div>
            <div>{children}</div>
        </nav>
    );
}