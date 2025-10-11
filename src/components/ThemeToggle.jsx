import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
            setDark(true);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !dark;
        setDark(newTheme);

        if (newTheme) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className={`p-3 px-4 flex items-center border-2 border-[#077d07] gap-2 text-xl font-semibold cursor-pointer rounded-full   hover:scale-105 duration-300 ${dark ? "bg-black text-white" : "bg-white text-black"
                }`}
        >
            {dark ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
    );
};

export default ThemeToggle;
