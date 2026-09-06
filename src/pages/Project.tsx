import EcommerceApp from "../assets/images/EcommerceApp.png";
import tsIcoimageEditorn from "../assets/images/imageEditor.png";
import weatherApp from "../assets/images/weatherApp.png";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Project = () => {
  return (
    <>
        <section id="projects" className="pb-[50px] bg-[var(--light-alt-bg)] dark:bg-[var(--dark-alt-bg)] pt-[64px] sm:pt-[80px]">
          <div className="container flex flex-col justify-start text-center items-center">
            <h2 className="font-bold [font-size:28px] sm:[font-size:36px] text-[var(--light-primary-text)] dark:text-[var(--dark-primary-text)] px-[5px] border-b-[2px] border-[var(--primary-color)] mb-[15px]">Project</h2>
            <div className="flex flex-col sm:flex-row overflow-hidden w-full max-w-[900px] bg-[var(--light-surface)] dark:bg-[var(--dark-surface)] border-2 dark:border-[var(--dark-border)] border-[var(--light-border)] rounded-[var(--radius-lg)]">
              <div className="imageContainer flex-1">
                <img className="w-full h-full" src={EcommerceApp} alt="EcommerceApp" />
              </div>
              <div className="p-[15px] flex flex-col flex-1 gap-[var(--spacing-lg)]">
                <h2 className="text-[var(--light-secondary-text)] dark:text-[var(--dark-secondary-text)] font-bold [font-size:14px] md:[font-size:25px]">E-Commerce Platform</h2>
                <p className="text-[var(--light-muted-text)] dark:text-[var(--dark-muted-text)] [font-size:10px] md:[font-size:14px]">A responsive e-commerce website built with HTML, CSS, and JavaScript,featuring product browsing, shopping cart, and checkout functionality.</p>
                <div className="flex gap-[4px] md:my-[15px]">
                  <span className="p-[5px] text-[10px] rounded-[var(--radius-pill)] bg-[var(--light-alt-surface)] dark:bg-[var(--dark-alt-surface)] text-[var(--light-secondary-text)] dark:text-[var(--dark-secondary-text)]">HTML5</span>
                  <span className="p-[5px] text-[10px] rounded-[var(--radius-pill)] bg-[var(--light-alt-surface)] dark:bg-[var(--dark-alt-surface)] text-[var(--light-secondary-text)] dark:text-[var(--dark-secondary-text)]">CSS3</span>
                  <span className="p-[5px] text-[10px] rounded-[var(--radius-pill)] bg-[var(--light-alt-surface)] dark:bg-[var(--dark-alt-surface)] text-[var(--light-secondary-text)] dark:text-[var(--dark-secondary-text)]">JavaScript</span>
                </div>
                <div className="links flex flex-col sm:flex-row gap-[15px]">
                  <a className="transition duration-300 px-[8px] w-full sm:w-[50%] py-[5px] bg-[var(--primary-color)] hover:bg-transparent border border-transparent hover:border-[var(--primary-color)] flex-center gap-[8px] rounded-[var(--radius-sm)] text-[var(--dark-secondary-text)] hover:text-[var(--light-secondary-text)] dark:hover:text-[var(--dark-secondary-text)] text-[12px]"target="_blank" href="https://faresxmohamed.github.io/Ecommerce-App-__-HTML-CSS-JS/index.html"><FaExternalLinkAlt /> Live Demo</a>
                  <a className="transition duration-300 px-[8px] w-full sm:w-[50%] py-[5px] bg-transparent hover:bg-[var(--primary-color)] border border-[var(--primary-color)] hover:border-transparent flex-center gap-[8px] rounded-[var(--radius-sm)] text-[var(--light-secondary-text)] hover:text-[var(--dark-secondary-text)] dark:text-[var(--dark-secondary-text)] text-[12px]" target="_blank" href="https://github.com/faresXmohamed/Ecommerce-App-__-HTML-CSS-JS"><FaGithub /> View on Github</a>
                </div>
              </div>
            </div>

            <div className="mt-[15px] grid grid-cols-1 sm:grid-cols-2 gap-[20px] max-w-[900px]">

            <div className="flex flex-col overflow-hidden bg-[var(--light-surface)] dark:bg-[var(--dark-surface)] border-2 dark:border-[var(--dark-border)] border-[var(--light-border)] rounded-[var(--radius-lg)]">
              <div className="imageContainer flex-1">
                <img className="w-full h-full" src={tsIcoimageEditorn} alt="tsIcoimageEditorn" />
              </div>
              <div className="p-[15px] flex flex-col flex-1 gap-[var(--spacing-lg)]">
                <h2 className="text-[var(--light-secondary-text)] dark:text-[var(--dark-secondary-text)] font-bold [font-size:14px] sm:[font-size:18px]">Image Editor</h2>
                <p className="text-[var(--light-muted-text)] dark:text-[var(--dark-muted-text)] [font-size:10px] sm:[font-size:12px]">A browser-based image editor built with HTML, CSS, and Vanilla JavaScript,providing real-time image adjustments and visual filters.</p>
                <div className="flex gap-[4px]">
                  <span className="p-[5px] text-[10px] rounded-[var(--radius-pill)] bg-[var(--light-alt-surface)] dark:bg-[var(--dark-alt-surface)] text-[var(--light-secondary-text)] dark:text-[var(--dark-secondary-text)]">HTML5</span>
                  <span className="p-[5px] text-[10px] rounded-[var(--radius-pill)] bg-[var(--light-alt-surface)] dark:bg-[var(--dark-alt-surface)] text-[var(--light-secondary-text)] dark:text-[var(--dark-secondary-text)]">CSS3</span>
                  <span className="p-[5px] text-[10px] rounded-[var(--radius-pill)] bg-[var(--light-alt-surface)] dark:bg-[var(--dark-alt-surface)] text-[var(--light-secondary-text)] dark:text-[var(--dark-secondary-text)]">JavaScript</span>
                </div>
                <div className="links flex flex-col sm:flex-row gap-[15px]">
                  <a className="transition duration-300 px-[8px] w-full sm:w-[50%] py-[5px] bg-[var(--primary-color)] hover:bg-transparent border border-transparent hover:border-[var(--primary-color)] flex-center gap-[8px] rounded-[var(--radius-sm)] text-[var(--dark-secondary-text)] hover:text-[var(--light-secondary-text)] dark:hover:text-[var(--dark-secondary-text)] text-[12px]"target="_blank" href="https://faresxmohamed.github.io/image-editor-HTML-CSS-Vanilla-JS/"><FaExternalLinkAlt /> Live Demo</a>
                  <a className="transition duration-300 px-[8px] w-full sm:w-[50%] py-[5px] bg-transparent hover:bg-[var(--primary-color)] border border-[var(--primary-color)] hover:border-transparent flex-center gap-[8px] rounded-[var(--radius-sm)] text-[var(--light-secondary-text)] hover:text-[var(--dark-secondary-text)] dark:text-[var(--dark-secondary-text)] text-[12px]" target="_blank" href="https://github.com/faresXmohamed/image-editor-HTML-CSS-Vanilla-JS"><FaGithub /> Github</a>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden bg-[var(--light-surface)] dark:bg-[var(--dark-surface)] border-2 dark:border-[var(--dark-border)] border-[var(--light-border)] rounded-[var(--radius-lg)]">
              <div className="imageContainer flex-1">
                <img className="w-full h-full" src={weatherApp} alt="tsIcoimageEweatherAppditorn" />
              </div>
              <div className="p-[15px] flex flex-col flex-1 gap-[var(--spacing-lg)]">
                <h2 className="text-[var(--light-secondary-text)] dark:text-[var(--dark-secondary-text)] font-bold [font-size:14px] sm:[font-size:18px]">Weather App</h2>
                <p className="text-[var(--light-muted-text)] dark:text-[var(--dark-muted-text)] [font-size:10px] sm:[font-size:12px]">A responsive React weather application for searching cities and viewing real-time weather conditions with light and dark themes.</p>
                <div className="flex gap-[4px]">
                  <span className="p-[5px] text-[10px] rounded-[var(--radius-pill)] bg-[var(--light-alt-surface)] dark:bg-[var(--dark-alt-surface)] text-[var(--light-secondary-text)] dark:text-[var(--dark-secondary-text)]">React</span>
                  <span className="p-[5px] text-[10px] rounded-[var(--radius-pill)] bg-[var(--light-alt-surface)] dark:bg-[var(--dark-alt-surface)] text-[var(--light-secondary-text)] dark:text-[var(--dark-secondary-text)]">Redux Toolkit</span>
                  <span className="p-[5px] text-[10px] rounded-[var(--radius-pill)] bg-[var(--light-alt-surface)] dark:bg-[var(--dark-alt-surface)] text-[var(--light-secondary-text)] dark:text-[var(--dark-secondary-text)]">Axios</span>
                </div>
                <div className="links flex flex-col sm:flex-row gap-[15px]">
                  <a className="transition duration-300 px-[8px] w-full sm:w-[50%] py-[5px] bg-[var(--primary-color)] hover:bg-transparent border border-transparent hover:border-[var(--primary-color)] flex-center gap-[8px] rounded-[var(--radius-sm)] text-[var(--dark-secondary-text)] hover:text-[var(--light-secondary-text)] dark:hover:text-[var(--dark-secondary-text)] text-[12px]"target="_blank" href="https://faresxmohamed.github.io/weatherApp__React/"><FaExternalLinkAlt /> Live Demo</a>
                  <a className="transition duration-300 px-[8px] w-full sm:w-[50%] py-[5px] bg-transparent hover:bg-[var(--primary-color)] border border-[var(--primary-color)] hover:border-transparent flex-center gap-[8px] rounded-[var(--radius-sm)] text-[var(--light-secondary-text)] hover:text-[var(--dark-secondary-text)] dark:text-[var(--dark-secondary-text)] text-[12px]" target="_blank" href="https://github.com/faresXmohamed/weatherApp__React"><FaGithub /> Github</a>
                </div>
              </div>
            </div>

            </div>
              <a className="transition duration-300 gap-[8px] my-[15px] w-[240px] py-[6px] rounded-[var(--radius-pill)] text-[var(--dark-primary-text)] bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] flex-center text-[14px]" href="https://github.com/faresXmohamed" target="_blank">View More Projects <FaArrowRight /></a>

          </div>
        </section>
    </>
  )
}

export default Project