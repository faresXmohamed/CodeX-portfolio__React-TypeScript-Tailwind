import {
    FaBriefcase,
    FaReact,
    FaCode,
    FaServer,
    FaDatabase,
    FaPlug,
    FaCheck,
} from "react-icons/fa6";

const WorkExperience = () => {
    return (
        <section
            id="workexperience"
            className="
                relative
                z-0
                pb-[50px]
                pt-[64px]
                sm:pt-[80px]
                bg-[var(--light-bg)]
                dark:bg-[var(--dark-bg)]
            "
        >
            <div
                className="
                    container
                    flex
                    flex-col
                    items-center
                "
            >

                {/* Section Title */}

                <h2
                    className="
                        font-bold
                        [font-size:28px]
                        sm:[font-size:36px]
                        text-[var(--light-primary-text)]
                        dark:text-[var(--dark-primary-text)]
                        px-[5px]
                        border-b-[2px]
                        border-[var(--primary-color)]
                        mb-[30px]
                    "
                >
                    Work Experience
                </h2>


                {/* Experience Card */}

                <article
                    className="
                        relative
                        z-0
                        w-full
                        max-w-[950px]
                        bg-[var(--light-surface)]
                        dark:bg-[var(--dark-surface)]
                        border-2
                        border-[var(--light-border)]
                        dark:border-[var(--dark-border)]
                        rounded-[var(--radius-lg)]
                        p-[20px]
                        sm:p-[30px]
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-[var(--primary-color)]
                        hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                        dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                    "
                >

                    {/* Header */}

                    <div
                        className="
                            flex
                            flex-col
                            md:flex-row
                            md:items-start
                            md:justify-between
                            gap-[20px]
                            pb-[20px]
                            border-b
                            border-[var(--light-border)]
                            dark:border-[var(--dark-border)]
                        "
                    >

                        <div className="flex items-start gap-[15px]">

                            {/* Icon */}

                            <div
                                className="
                                    shrink-0
                                    w-[45px]
                                    h-[45px]
                                    flex-center
                                    rounded-[var(--radius-md)]
                                    bg-[var(--light-alt-surface)]
                                    dark:bg-[var(--dark-alt-surface)]
                                    border
                                    border-[var(--light-border)]
                                    dark:border-[var(--dark-border)]
                                    text-[var(--primary-color)]
                                "
                            >
                                <FaBriefcase size={19} />
                            </div>


                            {/* Job Info */}

                            <div>

                                <h3
                                    className="
                                        font-bold
                                        text-[18px]
                                        sm:text-[21px]
                                        text-[var(--light-primary-text)]
                                        dark:text-[var(--dark-primary-text)]
                                        mb-[5px]
                                    "
                                >
                                    Freelance Full-Stack Web Developer
                                </h3>

                                <p
                                    className="
                                        text-[11px]
                                        sm:text-[12px]
                                        text-[var(--light-secondary-text)]
                                        dark:text-[var(--dark-secondary-text)]
                                    "
                                >
                                    Freelance
                                </p>

                            </div>

                        </div>


                        {/* Platforms */}

                        <div
                            className="
                                flex
                                flex-wrap
                                gap-[6px]
                                md:justify-end
                            "
                        >

                            {[
                                "Upwork",
                                "Khamsat",
                                "Mostaql",
                                "Freelancer Yard",
                                "Freelancer",
                            ].map((platform) => (
                                <span
                                    key={platform}
                                    className="
                                        px-[8px]
                                        py-[5px]
                                        text-[9px]
                                        sm:text-[10px]
                                        rounded-[var(--radius-pill)]
                                        bg-[var(--light-alt-surface)]
                                        dark:bg-[var(--dark-alt-surface)]
                                        text-[var(--light-secondary-text)]
                                        dark:text-[var(--dark-secondary-text)]
                                        border
                                        border-[var(--light-border)]
                                        dark:border-[var(--dark-border)]
                                    "
                                >
                                    {platform}
                                </span>
                            ))}

                        </div>

                    </div>


                    {/* Description */}

                    <div className="py-[20px]">

                        <p
                            className="
                                text-[12px]
                                sm:text-[13px]
                                leading-[1.8]
                                text-[var(--light-secondary-text)]
                                dark:text-[var(--dark-secondary-text)]
                                max-w-[850px]
                            "
                        >
                            Developed end-to-end web solutions for clients and
                            small businesses, combining modern frontend
                            development with robust backend systems and
                            RESTful APIs.
                        </p>

                    </div>


                    {/* Technologies */}

                    <div className="mb-[22px]">

                        <h4
                            className="
                                flex
                                items-center
                                gap-[8px]
                                font-semibold
                                text-[13px]
                                text-[var(--light-primary-text)]
                                dark:text-[var(--dark-primary-text)]
                                mb-[12px]
                            "
                        >
                            <FaCode
                                size={14}
                                className="text-[var(--primary-color)]"
                            />

                            Technical Experience
                        </h4>


                        <div className="flex flex-wrap gap-[8px]">

                            <span className="experience-tag">
                                <FaReact />
                                React
                            </span>

                            <span className="experience-tag">
                                <FaCode />
                                TypeScript
                            </span>

                            <span className="experience-tag">
                                <FaCode />
                                JavaScript
                            </span>

                            <span className="experience-tag">
                                <FaServer />
                                C#
                            </span>

                            <span className="experience-tag">
                                <FaServer />
                                .NET
                            </span>

                            <span className="experience-tag">
                                <FaServer />
                                ASP.NET Core
                            </span>

                            <span className="experience-tag">
                                <FaPlug />
                                REST APIs
                            </span>

                            <span className="experience-tag">
                                <FaDatabase />
                                SQL Server
                            </span>

                        </div>

                    </div>


                    {/* Responsibilities */}

                    <div>

                        <h4
                            className="
                                font-semibold
                                text-[13px]
                                text-[var(--light-primary-text)]
                                dark:text-[var(--dark-primary-text)]
                                mb-[12px]
                            "
                        >
                            Core Experience
                        </h4>


                        <div
                            className="
                                grid
                                grid-cols-1
                                sm:grid-cols-2
                                gap-x-[25px]
                                gap-y-[12px]
                            "
                        >

                            <div className="experience-point">
                                <FaCheck />
                                <span>
                                    Built responsive and interactive web
                                    interfaces using React, TypeScript, and
                                    JavaScript.
                                </span>
                            </div>

                            <div className="experience-point">
                                <FaCheck />
                                <span>
                                    Developed backend applications and RESTful
                                    APIs using C#, .NET, and ASP.NET Core.
                                </span>
                            </div>

                            <div className="experience-point">
                                <FaCheck />
                                <span>
                                    Integrated frontend applications with APIs
                                    and backend services.
                                </span>
                            </div>

                            <div className="experience-point">
                                <FaCheck />
                                <span>
                                    Worked with relational databases using
                                    SQL Server.
                                </span>
                            </div>

                            <div className="experience-point">
                                <FaCheck />
                                <span>
                                    Translated client requirements into
                                    practical web solutions.
                                </span>
                            </div>

                            <div className="experience-point">
                                <FaCheck />
                                <span>
                                    Worked through planning, development,
                                    testing, debugging, and delivery.
                                </span>
                            </div>

                        </div>

                    </div>

                </article>

            </div>
        </section>
    );
};

export default WorkExperience;