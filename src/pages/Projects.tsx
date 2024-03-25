import { useContext } from "react";
import { Project } from "../models/Project";
import { useNavigate } from "react-router-dom";
import { ProjectsContext } from "../contexts/ProjectsContext";

export const Projects = () => {
  const navigate = useNavigate();
  const { projects } = useContext(ProjectsContext);

  return (
    <>
      <section className="mainContent">
        <section className="container--listOfProjects">
          {projects.map((project: Project) => (
            <section
              className="container--oneProjectInList"
              key={project.id}
              onClick={() => {
                navigate("/Projects/" + project.id);
              }}
            >
              <span className="typeAndYearTextList">
                {project.type} / {project.year}
              </span>
              <section className="container--projectTitle">
                <span className="projectTitleList">{project.title}</span>
                <section className="container--dotAndLineList">
                  <section className="titleDot">●</section>
                  <section className="titleLine"></section>
                </section>
              </section>
            </section>
          ))}
        </section>
      </section>
    </>
  );
};
