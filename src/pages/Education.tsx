import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

import factIcon from "../assets/images/fact.png";
import depiIcon from "../assets/images/Depi.png";
import courseIcon from "../assets/images/courseIcon.png";

const Education = () => {
  return (
    <section
      id="education"
      className="
        relative
        z-0
        pb-[50px]
        bg-[var(--light-bg)]
        dark:bg-[var(--dark-bg)]
        pt-[64px]
        sm:pt-[80px]
      "
    >
      <div className="container flex flex-col justify-start text-center items-center">

        {/* Section Title */}
        <h2
          className="
            font-bold
            [font-size:20px]
            sm:[font-size:36px]
            text-[var(--light-primary-text)]
            dark:text-[var(--dark-primary-text)]
            px-[5px]
            border-b-[2px]
            border-[var(--primary-color)]
            mb-[30px]
          "
        >
          My Education
        </h2>

        {/* Education Cards */}
        <div
          className="
            w-full
            max-w-[1000px]
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-[20px]
          "
        >

          {/* University */}
          <div
            className="
              relative
              z-0
              flex
              flex-col
              h-full
              text-left
              overflow-hidden
              bg-[var(--light-surface)]
              dark:bg-[var(--dark-surface)]
              border-2
              border-[var(--light-border)]
              dark:border-[var(--dark-border)]
              rounded-[var(--radius-lg)]
              p-[15px]
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            <div
              className="
                flex
                justify-center
                items-center
                w-full
                h-[150px]
                rounded-[var(--radius-md)]
                bg-[var(--light-alt-surface)]
                dark:bg-[var(--dark-alt-surface)]
                mb-[20px]
              "
            >
              <img
                src={factIcon}
                alt="Tiba Higher Institute"
                className="w-[85px] h-[85px] object-contain"
              />
            </div>

            <div className="flex flex-col gap-[10px] h-full">

              <span
                className="
                  w-fit
                  px-[10px]
                  py-[4px]
                  rounded-[var(--radius-pill)]
                  bg-[var(--light-alt-surface)]
                  dark:bg-[var(--dark-alt-surface)]
                  text-[var(--light-secondary-text)]
                  dark:text-[var(--dark-secondary-text)]
                  text-[11px]
                "
              >
                University
              </span>

              <h3
                className="
                  font-bold
                  text-[18px]
                  text-[var(--light-primary-text)]
                  dark:text-[var(--dark-primary-text)]
                "
              >
                Tiba Higher Institute of Computer Science
              </h3>

              <p
                className="
                  text-[14px]
                  text-[var(--light-secondary-text)]
                  dark:text-[var(--dark-secondary-text)]
                "
              >
                Computer Science
              </p>

              <div
                className="
                  flex
                  flex-wrap
                  gap-[15px]
                  text-[12px]
                  text-[var(--light-muted-text)]
                  dark:text-[var(--dark-muted-text)]
                "
              >
                <span className="flex items-center gap-[6px]">
                  <FaCalendarAlt />
                  2023 – 2027
                </span>

                <span className="flex items-center gap-[6px]">
                  <FaMapMarkerAlt />
                  Egypt
                </span>
              </div>

              <p
                className="
                  text-[12px]
                  leading-relaxed
                  text-[var(--light-muted-text)]
                  dark:text-[var(--dark-muted-text)]
                "
              >
                Studying Computer Science with a focus on software
                development, problem solving, and computer science
                fundamentals.
              </p>

            </div>
          </div>


          {/* DEPI */}
          <div
            className="
              relative
              z-0
              flex
              flex-col
              h-full
              text-left
              overflow-hidden
              bg-[var(--light-surface)]
              dark:bg-[var(--dark-surface)]
              border-2
              border-[var(--light-border)]
              dark:border-[var(--dark-border)]
              rounded-[var(--radius-lg)]
              p-[15px]
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            <div
              className="
                flex
                justify-center
                items-center
                w-full
                h-[150px]
                rounded-[var(--radius-md)]
                bg-[var(--light-alt-surface)]
                dark:bg-[var(--dark-alt-surface)]
                mb-[20px]
              "
            >
              <img
                src={depiIcon}
                alt="Digital Egypt Pioneers Initiative"
                className="w-[120px] h-[120px] object-contain"
              />
            </div>

            <div className="flex flex-col gap-[10px] h-full">

              <span
                className="
                  w-fit
                  px-[10px]
                  py-[4px]
                  rounded-[var(--radius-pill)]
                  bg-[var(--light-alt-surface)]
                  dark:bg-[var(--dark-alt-surface)]
                  text-[var(--light-secondary-text)]
                  dark:text-[var(--dark-secondary-text)]
                  text-[11px]
                "
              >
                Professional Training
              </span>

              <h3
                className="
                  font-bold
                  text-[18px]
                  text-[var(--light-primary-text)]
                  dark:text-[var(--dark-primary-text)]
                "
              >
                Digital Egypt Pioneers Initiative
              </h3>

              <p
                className="
                  text-[14px]
                  text-[var(--light-secondary-text)]
                  dark:text-[var(--dark-secondary-text)]
                "
              >
                Full-Stack .NET
              </p>

              <div
                className="
                  flex
                  flex-wrap
                  gap-[15px]
                  text-[12px]
                  text-[var(--light-muted-text)]
                  dark:text-[var(--dark-muted-text)]
                "
              >
                <span className="flex items-center gap-[6px]">
                  <FaCalendarAlt />
                  2026
                </span>

                <span className="flex items-center gap-[6px]">
                  <FaMapMarkerAlt />
                  Egypt
                </span>
              </div>

              <p
                className="
                  text-[12px]
                  leading-relaxed
                  text-[var(--light-muted-text)]
                  dark:text-[var(--dark-muted-text)]
                "
              >
                Professional training focused on Full-Stack .NET
                development, database design, and web application
                development.
              </p>

              <div className="flex flex-wrap gap-[5px] mt-auto pt-[5px]">

                <span className="education-tag">C#</span>
                <span className="education-tag">OOP</span>
                <span className="education-tag">.NET</span>
                <span className="education-tag">ASP.NET Core</span>
                <span className="education-tag">ASP.NET MVC</span>
                <span className="education-tag">REST API</span>
                <span className="education-tag">SQL</span>
                <span className="education-tag">SQL Server</span>
                <span className="education-tag">ERD</span>
                <span className="education-tag">LINQ</span>
                <span className="education-tag">Entity Framework</span>
                <span className="education-tag">Vanilla JavaScript</span>

              </div>

            </div>
          </div>


          {/* Front-End Course */}
          <div
            className="
              relative
              z-0
              flex
              flex-col
              h-full
              text-left
              overflow-hidden
              bg-[var(--light-surface)]
              dark:bg-[var(--dark-surface)]
              border-2
              border-[var(--light-border)]
              dark:border-[var(--dark-border)]
              rounded-[var(--radius-lg)]
              p-[15px]
              transition-all
              duration-300
              hover:-translate-y-1
            "
          >
            <div
              className="
                flex
                justify-center
                items-center
                w-full
                h-[150px]
                rounded-[var(--radius-md)]
                bg-[var(--light-alt-surface)]
                dark:bg-[var(--dark-alt-surface)]
                mb-[20px]
              "
            >
              <img
                src={courseIcon}
                alt="Front-End Development Course"
                className="w-[105px] h-[105px] object-contain"
              />
            </div>

            <div className="flex flex-col gap-[10px] h-full">

              <span
                className="
                  w-fit
                  px-[10px]
                  py-[4px]
                  rounded-[var(--radius-pill)]
                  bg-[var(--light-alt-surface)]
                  dark:bg-[var(--dark-alt-surface)]
                  text-[var(--light-secondary-text)]
                  dark:text-[var(--dark-secondary-text)]
                  text-[11px]
                "
              >
                Front-End Course
              </span>

              <h3
                className="
                  font-bold
                  text-[18px]
                  text-[var(--light-primary-text)]
                  dark:text-[var(--dark-primary-text)]
                "
              >
                Front-End Development
              </h3>

              <p
                className="
                  text-[14px]
                  text-[var(--light-secondary-text)]
                  dark:text-[var(--dark-secondary-text)]
                "
              >
                Tiba Higher Institute
              </p>

              <div
                className="
                  flex
                  flex-wrap
                  gap-[15px]
                  text-[12px]
                  text-[var(--light-muted-text)]
                  dark:text-[var(--dark-muted-text)]
                "
              >
                <span className="flex items-center gap-[6px]">
                  <FaCalendarAlt />
                  2025
                </span>

                <span className="flex items-center gap-[6px]">
                  <FaMapMarkerAlt />
                  Egypt
                </span>
              </div>

              <p
                className="
                  text-[12px]
                  leading-relaxed
                  text-[var(--light-muted-text)]
                  dark:text-[var(--dark-muted-text)]
                "
              >
                Front-End development training covering modern
                web technologies and frameworks.
              </p>

              <div className="flex flex-wrap gap-[5px] mt-auto pt-[5px]">

                <span className="education-tag">HTML5</span>
                <span className="education-tag">CSS3</span>
                <span className="education-tag">JavaScript</span>
                <span className="education-tag">TypeScript</span>
                <span className="education-tag">React</span>
                <span className="education-tag">Next.js</span>
                <span className="education-tag">Redux</span>
                <span className="education-tag">Tailwind CSS</span>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;