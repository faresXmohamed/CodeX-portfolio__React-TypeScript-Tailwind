import {
    FaGithub,
    FaLinkedin,
    FaWhatsapp,
    FaArrowUp,
} from "react-icons/fa6";


const Footer = () => {


    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills & technologies" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    return (
        <footer
            className="
                w-full
                bg-[var(--light-alt-bg)]
                dark:bg-[var(--dark-alt-bg)]
                border-t
                border-[var(--light-border)]
                dark:border-[var(--dark-border)]
            "
        >

            <div
                className="
                    container
                    py-[35px]
                    sm:py-[45px]
                    flex
                    flex-col
                    items-center
                "
            >

                {/* =========================
                    TOP
                ========================== */}

                <div
                    className="
                        w-full
                        flex
                        flex-col
                        md:flex-row
                        items-center
                        justify-between
                        gap-[30px]
                    "
                >

                    {/* LOGO / DESCRIPTION */}
            <div className="logo-brand">
                <div>{"</>"}</div>
                <div>
                    <div>Code<span>X</span></div>
                    <div>HELMY MOHAMED</div>
                </div>
            </div>


                    {/* QUICK LINKS */}

                    <div
                        className="
                            flex
                            flex-col
                            items-center
                        "
                    >

                        <h3
                            className="
                                font-semibold
                                text-[14px]
                                text-[var(--light-primary-text)]
                                dark:text-[var(--dark-primary-text)]
                                mb-[12px]
                            "
                        >
                            Quick Links
                        </h3>


                        <nav>
                            <ul
                                className="
                                    flex
                                    flex-wrap
                                    justify-center
                                    gap-x-[18px]
                                    gap-y-[8px]
                                "
                            >

                                {navLinks.map((link) => (
                                    <li key={link.name}>

                                        <a
                                            href={link.href}
                                            className="
                                                text-[11px]
                                                sm:text-[12px]
                                                text-[var(--light-secondary-text)]
                                                dark:text-[var(--dark-secondary-text)]
                                                hover:text-[var(--primary-color)]
                                                transition-colors
                                                duration-300
                                            "
                                        >
                                            {link.name}
                                        </a>

                                    </li>
                                ))}

                            </ul>
                        </nav>

                    </div>


                    {/* SOCIAL LINKS */}

                    <div
                        className="
                            flex
                            flex-col
                            items-center
                        "
                    >

                        <h3
                            className="
                                font-semibold
                                text-[14px]
                                text-[var(--light-primary-text)]
                                dark:text-[var(--dark-primary-text)]
                                mb-[12px]
                            "
                        >
                            Connect With Me
                        </h3>


                        <div
                            className="
                                flex
                                gap-[10px]
                            "
                        >

                            {/* GitHub */}

                            <a
                                href="https://github.com/faresXmohamed"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="
                                    w-[38px]
                                    h-[38px]
                                    flex-center
                                    rounded-[var(--radius-md)]
                                    bg-[var(--light-surface)]
                                    dark:bg-[var(--dark-surface)]
                                    border
                                    border-[var(--light-border)]
                                    dark:border-[var(--dark-border)]
                                    text-[var(--light-primary-text)]
                                    dark:text-[var(--dark-primary-text)]
                                    hover:text-[var(--primary-color)]
                                    hover:border-[var(--primary-color)]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-[3px]
                                "
                            >
                                <FaGithub size={17} />
                            </a>


                            {/* LinkedIn */}

                            <a
                                href="https://www.linkedin.com/in/faresxmohamed"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="
                                    w-[38px]
                                    h-[38px]
                                    flex-center
                                    rounded-[var(--radius-md)]
                                    bg-[var(--light-surface)]
                                    dark:bg-[var(--dark-surface)]
                                    border
                                    border-[var(--light-border)]
                                    dark:border-[var(--dark-border)]
                                    text-[var(--light-primary-text)]
                                    dark:text-[var(--dark-primary-text)]
                                    hover:text-[var(--primary-color)]
                                    hover:border-[var(--primary-color)]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-[3px]
                                "
                            >
                                <FaLinkedin size={17} />
                            </a>


                            {/* WhatsApp */}

                            <a
                                href="https://wa.me/fares.mo121"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="WhatsApp"
                                className="
                                    w-[38px]
                                    h-[38px]
                                    flex-center
                                    rounded-[var(--radius-md)]
                                    bg-[var(--light-surface)]
                                    dark:bg-[var(--dark-surface)]
                                    border
                                    border-[var(--light-border)]
                                    dark:border-[var(--dark-border)]
                                    text-[var(--light-primary-text)]
                                    dark:text-[var(--dark-primary-text)]
                                    hover:text-[var(--primary-color)]
                                    hover:border-[var(--primary-color)]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-[3px]
                                "
                            >
                                <FaWhatsapp size={17} />
                            </a>

                        </div>

                    </div>

                </div>


                {/* =========================
                    DIVIDER
                ========================== */}

                <div
                    className="
                        w-full
                        h-[1px]
                        my-[25px]
                        bg-[var(--light-border)]
                        dark:bg-[var(--dark-border)]
                    "
                />


                {/* =========================
                    BOTTOM
                ========================== */}

                <div
                    className="
                        w-full
                        flex
                        flex-col
                        sm:flex-row
                        items-center
                        justify-between
                        gap-[15px]
                    "
                >

                    <p
                        className="
                            text-[10px]
                            sm:text-[12px]
                            text-center
                            text-[var(--light-muted-text)]
                            dark:text-[var(--dark-muted-text)]
                        "
                    >
                        © 2026 CodeX • All rights reserved.
                    </p>


                    {/* BACK TO TOP */}

                    <button
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        className="
                            w-[34px]
                            h-[34px]
                            flex-center
                            rounded-full
                            bg-[var(--primary-color)]
                            text-white
                            cursor-pointer
                            transition-all
                            duration-300
                            hover:bg-[var(--secondary-color)]
                            hover:-translate-y-[3px]
                        "
                    >
                        <FaArrowUp size={13} />
                    </button>

                </div>

            </div>

        </footer>
    );
};


export default Footer;