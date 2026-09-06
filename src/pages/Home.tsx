import myphoto from "../assets/images/MYphoto.png";

const Home = () => {
  return (
    <section
      id="home"
      className="
        min-h-screen
        bg-[var(--light-bg)]
        dark:bg-[var(--dark-bg)]
        pt-[80px]
        pb-[20px]
        sm:pt-[100px]
        flex items-center
      "
    >
      <div
        className="
          container
          flex
          flex-col-reverse
          md:flex-row
          items-center
          justify-between
          gap-[var(--spacing-xl)]
        "
      >

        <div className="text-center md:text-left md:w-[55%]">

          <p
            className="
              mb-[var(--spacing-sm)]
              text-[17px]
              sm:text-[19px]
              text-[#69757d]
              tracking-[2px]
            "
          >
            Hi, my name is Helmy Mohamed
          </p>

          <h1
            className="
              text-[38px]
              sm:text-[48px]
              lg:text-[58px]
              font-bold
              leading-tight
              text-[var(--light-primary-text)]
              dark:text-[var(--dark-primary-text)]
            "
          >
            Full-Stack Developer
          </h1>

          <p
            className="
              mt-[var(--spacing-md)]
              max-w-[620px]
              text-[16px]
              sm:text-[18px]
              leading-relaxed
              text-[var(--light-secondary-text)]
              dark:text-[var(--dark-secondary-text)]
            "
          >
            I build modern and scalable web applications,
            working across the frontend with React and TypeScript
            and the backend with .NET.
          </p>

          <div
            className="
              mt-[var(--spacing-md)]
              flex
              flex-wrap
              justify-center
              md:justify-start
              gap-2
            "
          >
            <span className="px-3 py-1 rounded-full bg-[var(--surface-color)] dark:bg-[var(--dark-surface)] text-sm">
              React
            </span>

            <span className="px-3 py-1 rounded-full bg-[var(--surface-color)] dark:bg-[var(--dark-surface)] text-sm">
              Next.js
            </span>
            
            <span className="px-3 py-1 rounded-full bg-[var(--surface-color)] dark:bg-[var(--dark-surface)] text-sm">
              TypeScript
            </span>

            <span className="px-3 py-1 rounded-full bg-[var(--surface-color)] dark:bg-[var(--dark-surface)] text-sm">
              .NET
            </span>

            <span className="px-3 py-1 rounded-full bg-[var(--surface-color)] dark:bg-[var(--dark-surface)] text-sm">
              C#
            </span>
          </div>

          <div
            className="
              mt-[var(--spacing-lg)]
              flex
              flex-wrap
              justify-center
              md:justify-start
              gap-[var(--spacing-md)]
            "
          >
            <a
              href="#projects"
              className="
                px-[var(--spacing-lg)]
                py-[var(--spacing-sm)]
                rounded-[var(--radius-md)]
                bg-[var(--primary-color)]
                text-white
                font-medium
                transition-all
                duration-300
                hover:scale-105
              "
            >
              View My Work
            </a>

          </div>
        </div>

        <div
          className="
            photo
            w-[60%]
            sm:w-[45%]
            md:w-[35%]
            lg:w-[30%]
          "
        >
          <img
            src={myphoto}
            alt="Helmy Mohamed"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
