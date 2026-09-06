import { useTheme } from "./context/ContextFile";
import { FaBars, FaXmark, FaMoon, FaSun } from "react-icons/fa6";
import { useState, useEffect , useRef } from "react";

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const navLinks :string[] = [
        "Home",
        "About",
        "Skills & Technologies",
        "Projects",
        "Contact"
    ];
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const elementNavLinks = navLinks.map((link: string, index: number) => (
        <li key={index}>
            <a
                className="text-[12px] flex items-start text-[var(--light-primary-text)] border-b-[1px] border-transparent  pb-[3px] hover:border-[var(--secondary-color)] hover:text-[var(--primary-color)] transition-colors duration-300 dark:text-[var(--dark-primary-text)]"
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                >
                {link}
            </a>
        </li>
    ));  

    const refHeader=useRef<HTMLHeadElement|null>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=>{     
            const handelScroll=()=>{
                setIsScrolled(window.scrollY >= 40);
            };
            handelScroll();
            
        window.addEventListener("scroll",handelScroll);

        return ()=>{ window.removeEventListener("scroll",handelScroll);}
    },[])
    return (
    <header ref={refHeader} className={`fixed top-0 left-1/2 -translate-x-1/2 bg-[var(--light-alt-border)] dark:bg-[var(--dark-alt-border)] sm:py-[var(--spacing-lg)] py-[var(--spacing-sm)] transition-all duration-300 ${isScrolled ? "w-[90%] rounded-[50px] opacity-100 sm:opacity-50 hover:opacity-100" : "w-full rounded-none opacity-100"}`}>
        <div className="container flex items-center justify-between" >
            <div className="logo-brand">
                <div>{"</>"}</div>
                <div>
                    <div>Code<span>X</span></div>
                    <div>HELMY MOHAMED</div>
                </div>
            </div>
            <nav className="flex items-center gap-[var(--spacing-lg)]">
                <button onClick={() => setIsMenuOpen(prev => !prev)} aria-label="Toggle menu" className="sm:hidden flex items-center justify-center w-10 h-10 text-[var(--primary-text)] dark:text-[var(--dark-primary-text)] cursor-pointer">
                    {isMenuOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
                </button>

                <ul className={`${isMenuOpen ? "flex" : "hidden"} absolute top-full right-4 flex-col items-center gap-[var(--spacing-lg)] w-48 p-[var(--spacing-lg)] bg-[var(--alternative-background-color)] dark:bg-[var(--dark-alt-bg)] rounded-[var(--radius-md)] shadow-lg sm:static sm:flex sm:w-auto sm:flex-row sm:p-0 sm:bg-transparent sm:dark:bg-transparent sm:shadow-none`}>
                    {elementNavLinks}
                </ul>

                <button onClick={toggleTheme} className="relative flex-center w-10 h-10 rounded-full cursor-pointer bg-[var(--surface-color)] dark:bg-[var(--dark-surface)] border border-transparent hover:border-[var(--border-color)] dark:hover:border-[var(--dark-border)] transition-all duration-300 hover:scale-110 shadow-md focus:outline-none">
                    {theme === "light" ? (
                        <FaMoon size={16} className="text-[var(--primary-text)] transition-transform duration-300 hover:rotate-12" />
                    ) : (
                        <FaSun size={17} className="text-[var(--warning-color)] transition-transform duration-300 hover:rotate-45" />
                    )}
                </button>
            </nav>
        </div>

    </header>
  )
}

export default Header

