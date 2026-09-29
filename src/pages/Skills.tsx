import htmlIcon from "../assets/images/html5.svg";
import cssIcon from "../assets/images/css.svg";
import jsIcon from "../assets/images/javascript.svg";
import tsIcon from "../assets/images/typescript.svg";
import tailwindIcon from "../assets/images/tailwindcss.svg";
import reactIcon from "../assets/images/react.svg";
import reduxIcon from "../assets/images/redux.svg";
import gitIcon from "../assets/images/git.svg";
import githupIcon from "../assets/images/github.svg";
import dotnetIcon from "../assets/images/dotnet.svg";
import nextjsIcon from "../assets/images/nextdotjs.svg";
import backIcon from "../assets/images/backend.svg";
import toolsIcon from "../assets/images/tools.svg";
import frontIcon from "../assets/images/screen-svgrepo-com.svg";
import databaseIcon from "../assets/images/database-solid-full.svg";
import sqlServerIcon from "../assets/images/sql.svg";
import csharpIcon from "../assets/images/CSharp.svg";
import restIcon from "../assets/images/rest.svg";
import netCoreIcon from "../assets/images/NETcore.svg";
import postmanIcon from "../assets/images/Postman.svg";
import programmingLanguage from "../assets/images/programming language.svg";
import sqlIccon from "../assets/images/sql_icon.svg";

import { FaLanguage, FaSpellCheck } from "react-icons/fa6";

const Skills = () => {
  return (
    <section
      id="skillsandtechnologies"
      className="relative z-0 pb-[50px] bg-[var(--light-alt-bg)] dark:bg-[var(--dark-alt-bg)] pt-[64px] sm:pt-[80px]"
    >
      <div className="container flex flex-col justify-start text-center items-center">

        {/* Section Title */}
        <h2 className="font-bold [font-size:20px] sm:[font-size:36px] text-[var(--light-primary-text)] dark:text-[var(--dark-primary-text)] px-[5px] border-b-[2px] border-[var(--primary-color)] mb-[15px]">
          Skills & Technologies
        </h2>

        <div className="containerSkills grid gap-[20px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-[var(--light-secondary-text)] dark:text-[var(--dark-secondary-text)]">

          {/* ================= Programming Languages ================= */}
          <div className="relative z-0 px-[10px] py-[15px] sm:px-[15px] w-[220px] sm:w-[250px] bg-[var(--light-alt-surface)] dark:bg-[var(--dark-alt-surface)] flex flex-col gap-[5px] border-2 dark:border-[var(--dark-border)] border-[var(--light-border)] rounded-[var(--radius-lg)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="text-[var(--light-primary-text)] dark:text-[var(--dark-primary-text)] title flex justify-start mb-[20px] p-[5px] border-b-2 border-b-[var(--light-border)] dark:border-b-[var(--dark-border)]">
              <img
                className="mr-[5px] w-[30px]"
                src={programmingLanguage}
                alt="Programming Languages"
              />
              <p>Programming Languages</p>
            </div>

            <div className="title flex justify-start mb-[7px] p-[5px] border-b border-b-[var(--light-alt-border)] dark:border-b-[var(--dark-alt-border)]">
              <img
                className="mr-[15px] w-[20px]"
                src={csharpIcon}
                alt="C#"
              />
              <p>C#</p>
            </div>

            <div className="title flex justify-start mb-[7px] p-[5px] border-b border-b-[var(--light-alt-border)] dark:border-b-[var(--dark-alt-border)]">
              <img
                className="mr-[15px] w-[20px]"
                src={jsIcon}
                alt="JavaScript"
              />
              <p>JavaScript (ES6+)</p>
            </div>

            <div className="title flex justify-start mb-[7px] p-[5px] border-b border-b-[var(--light-alt-border)] dark:border-b-[var(--dark-alt-border)]">
              <img
                className="mr-[15px] w-[20px]"
                src={tsIcon}
                alt="TypeScript"
              />
              <p>TypeScript</p>
            </div>

            <div className="title flex justify-start mb-[7px] p-[5px] border-b border-b-[var(--light-alt-border)] dark:border-b-[var(--dark-alt-border)]">
              <img
                className="mr-[15px] w-[20px]"
                src={sqlIccon}
                alt="SQL"
              />
              <p>SQL</p>
            </div>

          </div>


          {/* ================= Frontend ================= */}
          <div className="relative z-0 px-[10px] py-[15px] sm:px-[15px] w-[220px] sm:w-[250px] bg-[var(--light-alt-surface)] dark:bg-[var(--dark-alt-surface)] flex flex-col gap-[5px] border-2 dark:border-[var(--dark-border)] border-[var(--light-border)] rounded-[var(--radius-lg)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="text-[var(--light-primary-text)] dark:text-[var(--dark-primary-text)] title flex justify-start mb-[20px] p-[5px] border-b-2 border-b-[var(--light-border)] dark:border-b-[var(--dark-border)]">
              <img
                className="mr-[15px] w-[20px]"
                src={frontIcon}
                alt="Frontend"
              />
              <p>Frontend</p>
            </div>

            <div className="title flex justify-start mb-[7px] p-[5px] border-b border-b-[var(--light-alt-border)] dark:border-b-[var(--dark-alt-border)]">
              <img
                className="mr-[15px] w-[20px]"
                src={htmlIcon}
                alt="HTML5"
              />
              <p>HTML5</p>
            </div>

            <div className="title flex justify-start mb-[7px] p-[5px] border-b border-b-[var(--light-alt-border)] dark:border-b-[var(--dark-alt-border)]">
              <img
                className="mr-[15px] w-[20px]"
                src={cssIcon}
                alt="CSS"
              />
              <p>CSS</p>
            </div>

            <div className="title flex justify-start mb-[7px] p-[5px] border-b border-b-[var(--light-alt-border)] dark:border-b-[var(--dark-alt-border)]">
              <img
                className="mr-[15px] w-[20px]"
                src={reactIcon}
                alt="React"
              />
              <p>React</p>
            </div>

            <div className="title flex justify-start mb-[7px] p-[5px] border-b border-b-[var(--light-alt-border)] dark:border-b-[var(--dark-alt-border)]">
              <img
                className="mr-[15px] w-[20px]"
                src={nextjsIcon}
                alt="Next.js"
              />
              <p>Next.js</p>
            </div>

            <div className="title flex justify-start mb-[7px] p-[5px] border-b border-b-[var(--light-alt-border)] dark:border-b-[var(--dark-alt-border)]">
              <img
                className="mr-[15px] w-[20px]"
                src={reduxIcon}
                alt="Redux"
              />
              <p>Redux</p>
            </div>

            <div className="title flex justify-start mb-[7px] p-[5px] border-b border-b-[var(--light-alt-border)] dark:border-b-[var(--dark-alt-border)]">
              <img
                className="mr-[15px] w-[20px]"
                src={tailwindIcon}
                alt="Tailwind CSS"
              />
              <p>Tailwind</p>
            </div>

          </div>


          {/* ================= Backend ================= */}
          <div className="relative z-0 px-[10px] py-[15px] sm:px-[15px] w-[220px] sm:w-[250px] bg-[var(--light-alt-surface)] dark:bg-[var(--dark-alt-surface)] flex flex-col gap-[5px] border-2 dark:border-[var(--dark-border)] border-[var(--light-border)] rounded-[var(--radius-lg)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="text-[var(--light-primary-text)] dark:text-[var(--dark-primary-text)] title flex justify-start mb-[20px] p-[5px] border-b-2 border-b-[var(--light-border)] dark:border-b-[var(--dark-border)]">
              <img
                className="mr-[15px] w-[20px]"
                src={backIcon}
                alt="Backend"
              />
              <p>Backend</p>
            </div>

            <div className="title flex justify-start mb-[7px] p-[5px] border-b border-b-[var(--light-alt-border)] dark:border-b-[var(--dark-alt-border)]">
              <img
                className="mr-[15px] w-[20px]"
                src={dotnetIcon}
                alt=".NET"
              />
              <p>.NET</p>
            </div>

            <div className="title flex justify-start mb-[7px] p-[5px] border-b border-b-[var(--light-alt-border)] dark:border-b-[var(--dark-alt-border)]">
              <img
                className="mr-[15px] w-[20px]"
                src={restIcon}
                alt="REST API"
              />
              <p>REST API</p>
            </div>

            <div className="title flex justify-start mb-[7px] p-[5px] border-b border-b-[var(--light-alt-border)] dark:border-b-[var(--dark-alt-border)]">
              <img
                className="mr-[15px] w-[20px]"
                src={netCoreIcon}
                alt="ASP.NET Core"
              />
              <p>ASP.NET Core</p>
            </div>

          </div>


          {/* ================= Database ================= */}
          <div className="relative z-0 px-[10px] py-[15px] sm:px-[15px] w-[220px] sm:w-[250px] bg-[var(--light-alt-surface)] dark:bg-[var(--dark-alt-surface)] flex flex-col gap-[5px] border-2 dark:border-[var(--dark-border)] border-[var(--light-border)] rounded-[var(--radius-lg)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="text-[var(--light-primary-text)] dark:text-[var(--dark-primary-text)] title flex justify-start mb-[20px] p-[5px] border-b-2 border-b-[var(--light-border)] dark:border-b-[var(--dark-border)]">
              <img
                className="mr-[15px] w-[20px]"
                src={databaseIcon}
                alt="Database"
              />
              <p>Database</p>
            </div>

            <div className="title flex justify-start mb-[7px] p-[5px] border-b border-b-[var(--light-alt-border)] dark:border-b-[var(--dark-alt-border)]">
              <img
                className="mr-[15px] w-[20px]"
                src={sqlServerIcon}
                alt="SQL Server"
              />
              <p>SQL Server</p>
            </div>

          </div>


          {/* ================= Tools & Others ================= */}
          <div className="relative z-0 px-[10px] py-[15px] sm:px-[15px] w-[220px] sm:w-[250px] bg-[var(--light-alt-surface)] dark:bg-[var(--dark-alt-surface)] flex flex-col gap-[5px] border-2 dark:border-[var(--dark-border)] border-[var(--light-border)] rounded-[var(--radius-lg)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            <div className="text-[var(--light-primary-text)] dark:text-[var(--dark-primary-text)] title flex justify-start mb-[20px] p-[5px] border-b-2 border-b-[var(--light-border)] dark:border-b-[var(--dark-border)]">
              <img
                className="mr-[15px] w-[20px]"
                src={toolsIcon}
                alt="Tools"
              />
              <p>Tools & Others</p>
            </div>

            <div className="title flex justify-start mb-[7px] p-[5px] border-b border-b-[var(--light-alt-border)] dark:border-b-[var(--dark-alt-border)]">
              <img
                className="mr-[15px] w-[20px]"
                src={gitIcon}
                alt="Git"
              />
              <p>Git</p>
            </div>

            <div className="title flex justify-start mb-[7px] p-[5px] border-b border-b-[var(--light-alt-border)] dark:border-b-[var(--dark-alt-border)]">
              <img
                className="mr-[15px] w-[20px]"
                src={githupIcon}
                alt="GitHub"
              />
              <p>GitHub</p>
            </div>

            <div className="title flex justify-start mb-[7px] p-[5px] border-b border-b-[var(--light-alt-border)] dark:border-b-[var(--dark-alt-border)]">
              <img
                className="mr-[15px] w-[20px]"
                src={postmanIcon}
                alt="Postman"
              />
              <p>Postman</p>
            </div>

          </div>


          {/* ================= Human Languages ================= */}
          <div className="relative z-0 px-[10px] py-[15px] sm:px-[15px] w-[220px] sm:w-[250px] bg-[var(--light-alt-surface)] dark:bg-[var(--dark-alt-surface)] flex flex-col gap-[5px] border-2 dark:border-[var(--dark-border)] border-[var(--light-border)] rounded-[var(--radius-lg)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

            {/* Languages Header */}
            <div className="text-[var(--light-primary-text)] dark:text-[var(--dark-primary-text)] title flex justify-start mb-[20px] p-[5px] border-b-2 border-b-[var(--light-border)] dark:border-b-[var(--dark-border)]">
              <FaLanguage className="mr-[15px] w-[22px] h-[22px] text-blue-500" />
              <p>Languages</p>
            </div>


            {/* Arabic */}
            <div className="title flex items-center justify-start mb-[7px] p-[5px] border-b border-b-[var(--light-alt-border)] dark:border-b-[var(--dark-alt-border)]">

              <FaLanguage className="mr-[15px] w-[20px] h-[20px] text-emerald-500" />

              <p>Arabic</p>

            </div>


            {/* English */}
            <div className="title flex items-center justify-start mb-[7px] p-[5px] border-b border-b-[var(--light-alt-border)] dark:border-b-[var(--dark-alt-border)]">

              <FaSpellCheck className="mr-[15px] w-[20px] h-[20px] text-indigo-500" />

              <p>English</p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;