import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";
import { Phone } from "lucide-react";
import { Search } from "lucide-react";
import { Scale } from "lucide-react";
import { House } from "lucide-react";
import ThemeToggle from "../../ThemeToggle";



const Header = () => {

    const [open, setOpen] = useState(false);
    const [lang, setLang] = useState("EN");
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setOpen(!open);

    // Kənara kliklə dropdown-u bağlama
    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectLang = (code) => {
        setLang(code);
        setOpen(false);
    };

    return (
        <header className="px-30 py-5 flex justify-between items-center shadow-xl">
            <div className="flex items-center gap-8">
                <img className='w-40' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/XBOX_logo_2012.svg/2560px-XBOX_logo_2012.svg.png" alt="" />
                {/* Dropdown */}
                <div ref={dropdownRef} className="relative">
                    <button
                        onClick={toggleDropdown}
                        className="px-4 py-2 bg-blend-color text-[#077d07] hover:scale-125 duration-300  cursor-pointer rounded-md flex items-center gap-2"
                    >
                        {lang}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : "rotate-0"
                                }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>

                    {open && (
                        <div className="absolute right-0 mt-2 w-24 bg-white border rounded-lg shadow-lg z-10">
                            {["EN", "RU", "AZ"].map((code) => (
                                <button
                                    key={code}
                                    onClick={() => selectLang(code)}
                                    className={`block w-full text-left px-3 py-2 hover:bg-gray-100 ${lang === code ? "bg-gray-50 font-semibold" : ""
                                        }`}
                                >
                                    {code}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="Projects">
                    <button className="px-5 py-3 bg-blend-color hover:bg-neutral-300 duration-500 text-[#077d07] rounded-full text-xl font-semibold border-2 border-[#077d07]  flex items-center gap-2 cursor-pointer"><LayoutDashboard color="#077d07" />Projects</button>
                </div>

                <div className="navbar ml-10">
                    <nav>
                        <ul className="flex items-center gap-10">
                            <li><NavLink to="/" className="text-[#077d07] hover:text-green-600 duration-300 font-semibold text-xl">Home</NavLink></li>
                            <li><NavLink to="/about" className="text-[#077d07] hover:text-green-600 duration-300 font-semibold text-xl">About</NavLink></li>
                            <li><a href="#" className="text-[#077d07] hover:text-green-600 duration-300 font-semibold text-xl">Services</a></li>
                            <li><a href="#" className="text-[#077d07] hover:text-green-600 duration-300 font-semibold text-xl">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>





            <div className="buttons flex items-center gap-4">
                <button className="p-3 px-4 rounded-full bg-blend-color border-2 border-[#077d07] cursor-pointer text-[#077d07] hover:bg-neutral-300 duration-500 flex items-center gap-2 text-xl font-semibold"><Phone />*3378</button>
                <button className="p-3 rounded-full bg-blend-color border-2 border-[#077d07] cursor-pointer text-[#077d07] hover:bg-neutral-300 duration-500"><Search /></button>
                <button className="p-3 rounded-full bg-blend-color border-2 border-[#077d07] cursor-pointer text-[#077d07] hover:bg-neutral-300 duration-500"><Scale /></button>
                <button className="p-3 px-4 flex items-center gap-2 text-xl font-semibold cursor-pointer rounded-full bg-[#077d07] text-white hover:bg-green-800 duration-500"><House />Adress Delivery</button>
                <ThemeToggle />
            </div>

        </header >
    )
}

export default Header