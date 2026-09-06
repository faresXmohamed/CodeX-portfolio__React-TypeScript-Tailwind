import sendmail from "../assets/images/minutemailer.svg"
import linkedin from "../assets/images/linkedin-svgrepo-com.svg"
import githup from "../assets/images/github.svg"
const About = () => {
  return (
    <section id="about" className="pb-[80px] bg-[var(--light-alt-bg)] dark:bg-[var(--dark-alt-bg)] pt-[64px] sm:pt-[80px]">
        <div className="container flex flex-col justify-start text-center items-center">

        <h2 className="font-bold [font-size:28px] sm:[font-size:36px] text-[var(--light-primary-text)] dark:text-[var(--dark-primary-text)] px-[5px] border-b-[2px] border-[var(--primary-color)] mb-[15px]">About</h2>
        <div className="aboutText w-[100%] sm:w-[70%] text-start text-[var(--light-muted-text)] dark:text-[var(--dark-muted-text)]">
        <p>
           I'm a software developer (FULL STACK), and I love to develop high quality websites. I enjoy solving problems through high-quality website development, and I follow certain principles when working on my projects, including thoroughly understanding the problem, finding the best solution, and paying attention to the smallest details to deliver a professional result.
        </p>
        <br />
        <p>
            One of the things that distinguishes me most is that I take deadlines and the quality of my work very seriously, as meeting deadlines is an essential quality of professionals. I also do not accept finishing a project at a merely good level; rather, I want to improve it and take it further to achieve a result that satisfies me and the client. One of the things I also enjoy is writing clear and clean code and providing logical solutions, rather than only addressing current problems.
        </p><br />
        <p>
            I am open to working on different projects and gaining new experiences. One of my beliefs is that every project represents an opportunity to learn and develop, and a step toward becoming a better developer than I was yesterday.
        </p><br />
        <p>
            If you are looking for a freelance developer to turn your ideas into reality or a developer to join your team, I am always interested in providing useful solutions, tackling complex challenges, and completing the work to the highest possible standard.
        </p><br />
        <div className="flex gap-[20px]">
            <a target="_blank" className="flex gap-[5px] text-[#2ca0ff]" href="mailto:faresmohamedsaiedahmed@gmail.com"><img className="w-[20px]" src={sendmail} alt="Email" />Email</a>
            <a target="_blank" className="flex gap-[5px] text-[#2ca0ff]" href="www.linkedin.com/in/faresxmohamed"><img className="w-[20px]" src={linkedin} alt="Linkedin" />Linkedin</a>
            <a target="_blank" className="flex gap-[5px] text-[#2ca0ff]" href="https://github.com/faresXmohamed"><img className="w-[20px]" src={githup} alt="GitHup" />GitHup</a>
        </div>
        </div>
        </div>
    </section>
  )
}

export default About