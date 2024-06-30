import React from "react";
import dataProjects from "../projects/pro";

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-light duration-700 dark:bg-[#03001C]"
    >
      <h2 className="text-6xl text-center text-black dark:text-white font-bold">
        Projects
        <hr className="w-24 h-1 mx-auto my-6 bg-name rounded border-0"></hr>
      </h2>
      <div className="py-24">
        <div className="flex mx-10 md:flex-row flex-col flex-wrap">
          {dataProjects.map((project) => {
            return (
              <div
                data-aos="fade-up"
                key={project.id}
                className="dark:text-light m-3 rounded-lg text-dark text-center mx-auto p-4"
              >
                <a href={project.url} target="_blank">
                  <img
                    className="rounded-lg drop-shadow-2xl project-image cursor-pointer"
                    src={project.image}
                    alt={project.name}
                    width="300"
                    height="200"
                  />
                </a>
                <div className="p-2">
                  <h1 className="text-xl py-2 font-bold">{project.name}</h1>
                  <button>
                    <a
                      className={project.status}
                      href={project.link}
                      target="_blank"
                    >
                      <h6 className="dark:text-dark rounded-md px-3 py-1 dark:bg-light text-light bg-dark font-bold">
                        {project.desc}
                      </h6>
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
