import {
  FaLayerGroup,
  FaCode,
  FaServer,
  FaPlug,
  FaDatabase,
  FaLaptopCode,
} from "react-icons/fa6";

const Services = () => {
  return (
    <section
      id="offeredservices"
      className="relative z-0 pb-[50px] bg-[var(--light-bg)] dark:bg-[var(--dark-bg)] pt-[64px] sm:pt-[80px]"
    >
      <div className="container flex flex-col justify-start items-center">

        {/* Section Title */}
        <h2 className="font-bold text-[20px] sm:text-[36px] text-[var(--light-primary-text)] dark:text-[var(--dark-primary-text)] px-[5px] border-b-[2px] border-[var(--primary-color)] mb-[15px]">
          Offered Services
        </h2>


        {/* Services Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">

          {/* Full-Stack Web Development */}
          <div className="group relative z-0 flex flex-col p-[20px] bg-[var(--light-surface)] dark:bg-[var(--dark-surface)] border-2 border-[var(--light-border)] dark:border-[var(--dark-border)] rounded-[var(--radius-lg)] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">

            <div className="flex items-center justify-center w-[55px] h-[55px] rounded-[var(--radius-md)] bg-[var(--light-alt-surface)] dark:bg-[var(--dark-alt-surface)] mb-[20px] transition-all duration-300 group-hover:scale-110">
              <FaLayerGroup className="text-[28px] text-[var(--primary-color)]" />
            </div>

            <h3 className="font-bold text-[18px] text-[var(--light-primary-text)] dark:text-[var(--dark-primary-text)] mb-[10px]">
              Full-Stack Web Development
            </h3>

            <p className="text-[13px] leading-relaxed text-[var(--light-secondary-text)] dark:text-[var(--dark-secondary-text)] mb-[15px]">
              Building complete web applications from frontend interfaces
              to backend logic, APIs, and database integration.
            </p>

            <div className="flex flex-wrap gap-[6px] mt-auto">
              <span className="service-tag">React</span>
              <span className="service-tag">TypeScript</span>
              <span className="service-tag">C#</span>
              <span className="service-tag">.NET</span>
              <span className="service-tag">SQL Server</span>
            </div>

          </div>


          {/* Frontend Development */}
          <div className="group relative z-0 flex flex-col p-[20px] bg-[var(--light-surface)] dark:bg-[var(--dark-surface)] border-2 border-[var(--light-border)] dark:border-[var(--dark-border)] rounded-[var(--radius-lg)] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">

            <div className="flex items-center justify-center w-[55px] h-[55px] rounded-[var(--radius-md)] bg-[var(--light-alt-surface)] dark:bg-[var(--dark-alt-surface)] mb-[20px] transition-all duration-300 group-hover:scale-110">
              <FaCode className="text-[28px] text-[var(--primary-color)]" />
            </div>

            <h3 className="font-bold text-[18px] text-[var(--light-primary-text)] dark:text-[var(--dark-primary-text)] mb-[10px]">
              Front-End Development
            </h3>

            <p className="text-[13px] leading-relaxed text-[var(--light-secondary-text)] dark:text-[var(--dark-secondary-text)] mb-[15px]">
              Creating responsive, modern, and interactive user interfaces
              with reusable and maintainable components.
            </p>

            <div className="flex flex-wrap gap-[6px] mt-auto">
              <span className="service-tag">React</span>
              <span className="service-tag">Next.js</span>
              <span className="service-tag">TypeScript</span>
              <span className="service-tag">Tailwind CSS</span>
              <span className="service-tag">Redux</span>
            </div>

          </div>


          {/* ASP.NET Core & MVC */}
          <div className="group relative z-0 flex flex-col p-[20px] bg-[var(--light-surface)] dark:bg-[var(--dark-surface)] border-2 border-[var(--light-border)] dark:border-[var(--dark-border)] rounded-[var(--radius-lg)] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">

            <div className="flex items-center justify-center w-[55px] h-[55px] rounded-[var(--radius-md)] bg-[var(--light-alt-surface)] dark:bg-[var(--dark-alt-surface)] mb-[20px] transition-all duration-300 group-hover:scale-110">
              <FaServer className="text-[28px] text-[var(--primary-color)]" />
            </div>

            <h3 className="font-bold text-[18px] text-[var(--light-primary-text)] dark:text-[var(--dark-primary-text)] mb-[10px]">
              ASP.NET Core & MVC
            </h3>

            <p className="text-[13px] leading-relaxed text-[var(--light-secondary-text)] dark:text-[var(--dark-secondary-text)] mb-[15px]">
              Developing backend applications and web solutions using
              C#, ASP.NET Core, MVC, and structured application architecture.
            </p>

            <div className="flex flex-wrap gap-[6px] mt-auto">
              <span className="service-tag">C#</span>
              <span className="service-tag">.NET</span>
              <span className="service-tag">ASP.NET Core</span>
              <span className="service-tag">MVC</span>
            </div>

          </div>


          {/* REST API Development */}
          <div className="group relative z-0 flex flex-col p-[20px] bg-[var(--light-surface)] dark:bg-[var(--dark-surface)] border-2 border-[var(--light-border)] dark:border-[var(--dark-border)] rounded-[var(--radius-lg)] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">

            <div className="flex items-center justify-center w-[55px] h-[55px] rounded-[var(--radius-md)] bg-[var(--light-alt-surface)] dark:bg-[var(--dark-alt-surface)] mb-[20px] transition-all duration-300 group-hover:scale-110">
              <FaPlug className="text-[28px] text-[var(--primary-color)]" />
            </div>

            <h3 className="font-bold text-[18px] text-[var(--light-primary-text)] dark:text-[var(--dark-primary-text)] mb-[10px]">
              REST API Development
            </h3>

            <p className="text-[13px] leading-relaxed text-[var(--light-secondary-text)] dark:text-[var(--dark-secondary-text)] mb-[15px]">
              Building and integrating REST APIs to connect frontend
              applications with backend services and databases.
            </p>

            <div className="flex flex-wrap gap-[6px] mt-auto">
              <span className="service-tag">ASP.NET Core</span>
              <span className="service-tag">REST API</span>
              <span className="service-tag">C#</span>
              <span className="service-tag">JSON</span>
            </div>

          </div>


          {/* Database Development */}
          <div className="group relative z-0 flex flex-col p-[20px] bg-[var(--light-surface)] dark:bg-[var(--dark-surface)] border-2 border-[var(--light-border)] dark:border-[var(--dark-border)] rounded-[var(--radius-lg)] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">

            <div className="flex items-center justify-center w-[55px] h-[55px] rounded-[var(--radius-md)] bg-[var(--light-alt-surface)] dark:bg-[var(--dark-alt-surface)] mb-[20px] transition-all duration-300 group-hover:scale-110">
              <FaDatabase className="text-[28px] text-[var(--primary-color)]" />
            </div>

            <h3 className="font-bold text-[18px] text-[var(--light-primary-text)] dark:text-[var(--dark-primary-text)] mb-[10px]">
              Database Development
            </h3>

            <p className="text-[13px] leading-relaxed text-[var(--light-secondary-text)] dark:text-[var(--dark-secondary-text)] mb-[15px]">
              Designing and working with structured relational databases
              for reliable and efficient web applications.
            </p>

            <div className="flex flex-wrap gap-[6px] mt-auto">
              <span className="service-tag">SQL</span>
              <span className="service-tag">SQL Server</span>
              <span className="service-tag">ERD</span>
              <span className="service-tag">Database Design</span>
            </div>

          </div>


          {/* Custom Web Applications */}
          <div className="group relative z-0 flex flex-col p-[20px] bg-[var(--light-surface)] dark:bg-[var(--dark-surface)] border-2 border-[var(--light-border)] dark:border-[var(--dark-border)] rounded-[var(--radius-lg)] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">

            <div className="flex items-center justify-center w-[55px] h-[55px] rounded-[var(--radius-md)] bg-[var(--light-alt-surface)] dark:bg-[var(--dark-alt-surface)] mb-[20px] transition-all duration-300 group-hover:scale-110">
              <FaLaptopCode className="text-[28px] text-[var(--primary-color)]" />
            </div>

            <h3 className="font-bold text-[18px] text-[var(--light-primary-text)] dark:text-[var(--dark-primary-text)] mb-[10px]">
              Custom Web Applications
            </h3>

            <p className="text-[13px] leading-relaxed text-[var(--light-secondary-text)] dark:text-[var(--dark-secondary-text)] mb-[15px]">
              Developing custom web applications based on specific
              business requirements, from architecture to deployment.
            </p>

            <div className="flex flex-wrap gap-[6px] mt-auto">
              <span className="service-tag">Full-Stack</span>
              <span className="service-tag">React</span>
              <span className="service-tag">.NET</span>
              <span className="service-tag">SQL Server</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;