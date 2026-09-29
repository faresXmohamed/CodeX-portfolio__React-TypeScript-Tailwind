import { useTheme } from "./context/ContextFile";
import { FaBars, FaXmark, FaMoon, FaSun } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    const navLinks: string[] = [
        "about",
        "education",
        "skillsandtechnologies",
        //"workexperience",
        "offeredservices",
        "projects",
        //"achievements",
        //"testimonials",
        "contact"
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const formatLinkName = (link: string) => {
        const names: { [key: string]: string } = {
            about: "About",
            education: "Education",
            skillsandtechnologies: "Skills & Technologies",
            //workexperience: "Work Experience",
            offeredservices: "Offered Services",
            projects: "Projects",
            //achievements: "Achievements",
            //testimonials: "Testimonials",
            contact: "Contact"
        };

        return names[link] || link;
    };

    const refHeader = useRef<HTMLHeadElement | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handelScroll = () => {
            setIsScrolled(window.scrollY >= 40);
        };

        handelScroll();

        window.addEventListener("scroll", handelScroll);

        return () => {
            window.removeEventListener("scroll", handelScroll);
        };
    }, []);

    return (
        <header
            ref={refHeader}
            className={`z-[1000] fixed top-0 left-1/2 -translate-x-1/2 max-w-full overflow-visible bg-[var(--light-alt-border)] dark:bg-[var(--dark-alt-border)] sm:py-[var(--spacing-lg)] py-[var(--spacing-sm)] transition-all duration-300 ${
                isScrolled
                    ? "w-[90%] rounded-[50px] opacity-100 sm:opacity-50 hover:opacity-100"
                    : "w-full rounded-none opacity-100"
            }`}
        >
            <div className="container flex items-center justify-between gap-4">

                {/* Logo */}
                <a
                    href="#home"
                    onClick={() => setIsMenuOpen(false)}
                    className="logo-brand cursor-pointer shrink-0"
                    aria-label="Go to Home"
                >
                    <div>{"</>"}</div>

                    <div>
                        <div>
                            Code<span>X</span>
                        </div>

                        <div>HELMY MOHAMED</div>
                    </div>
                </a>


                <nav className="flex items-center gap-3 sm:gap-[var(--spacing-lg)] min-w-0">

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex items-center gap-4 xl:gap-[var(--spacing-lg)]">

                        {navLinks.map((link: string, index: number) => (
                            <li key={index} className="shrink-0">

                                <a
                                    className="whitespace-nowrap text-[12px] flex items-center text-[var(--light-primary-text)] border-b-[1px] border-transparent pb-[3px] hover:border-[var(--secondary-color)] hover:text-[var(--primary-color)] transition-colors duration-300 dark:text-[var(--dark-primary-text)]"
                                    href={`#${link}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {formatLinkName(link)}
                                </a>

                            </li>
                        ))}

                    </ul>


                    {/* Tablet / Mobile Menu */}
                    <div className="lg:hidden relative">

                        <button
                            onClick={() => setIsMenuOpen(prev => !prev)}
                            aria-label="Toggle menu"
                            className="flex items-center justify-center w-10 h-10 text-[var(--primary-text)] dark:text-[var(--dark-primary-text)] cursor-pointer"
                        >
                            {isMenuOpen ? (
                                <FaXmark size={20} />
                            ) : (
                                <FaBars size={20} />
                            )}
                        </button>


                        {isMenuOpen && (
                            <ul className="absolute right-0 top-full mt-3 z-50 flex flex-col items-start gap-4 w-[240px] max-w-[calc(100vw-32px)] max-h-[75vh] overflow-y-auto overflow-x-hidden p-5 bg-[var(--alternative-background-color)] bg-[var(--light-alt-bg)] dark:bg-[var(--dark-alt-bg)] rounded-[var(--radius-md)] shadow-lg border border-[var(--border-color)] dark:border-[var(--dark-border)]">

                                {navLinks.map((link: string, index: number) => (
                                    <li
                                        key={index}
                                        className="w-full"
                                    >
                                        <a
                                            className="block w-full whitespace-nowrap text-[12px] text-[var(--light-primary-text)] dark:text-[var(--dark-primary-text)] hover:text-[var(--primary-color)] transition-colors duration-300"
                                            href={`#${link}`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {formatLinkName(link)}
                                        </a>
                                    </li>
                                ))}

                            </ul>
                        )}

                    </div>


                    {/* Theme Button */}
                    <button
                        onClick={toggleTheme}
                        className="relative flex-center w-10 h-10 shrink-0 rounded-full cursor-pointer bg-[var(--surface-color)] dark:bg-[var(--dark-surface)] border border-transparent hover:border-[var(--border-color)] dark:hover:border-[var(--dark-border)] transition-all duration-300 hover:scale-110 shadow-md focus:outline-none"
                    >
                        {theme === "light" ? (
                            <FaMoon
                                size={16}
                                className="text-[var(--primary-text)] transition-transform duration-300 hover:rotate-12"
                            />
                        ) : (
                            <FaSun
                                size={17}
                                className="text-[var(--warning-color)] transition-transform duration-300 hover:rotate-45"
                            />
                        )}
                    </button>

                </nav>

            </div>
        </header>
    );
};

export default Header;