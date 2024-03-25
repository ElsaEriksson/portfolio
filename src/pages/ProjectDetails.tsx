import { useNavigate, useParams } from "react-router-dom";
import { Project } from "../models/Project";
import { useContext, useState } from "react";
import { ProjectsContext } from "../contexts/ProjectsContext";
import { IoMdArrowDropleft } from "react-icons/io";

export const ProjectDetails = () => {
  const navigate = useNavigate();
  const [project, setProject] = useState<Project>();
  const { projects } = useContext(ProjectsContext);

  const { projectId } = useParams();

  if (!project) {
    const clickedProject = projects.find((project) => project.id === projectId);
    setProject(clickedProject);
  }

  return (
    <>
      <section className="mainContent">
        <section className="container--project">
          <section className="container--image">
            <section className="container--text__aboveImage">
              <section
                className="backButton"
                onClick={() => {
                  navigate("/Projects");
                }}
              >
                <span className="backButtonArrows">
                  <article id="arrow1">
                    <IoMdArrowDropleft />
                  </article>
                  <article id="arrow2">
                    <IoMdArrowDropleft />
                  </article>
                  <article id="arrow3">
                    <IoMdArrowDropleft />
                  </article>
                </span>
                <span className="backButtonText">Back</span>
              </section>
              <span className="typeAndYearText">
                {project?.type} / {project?.year}
              </span>
            </section>
            <img src={project?.image} alt="" />
          </section>
          <section className="container--projetTitle">
            <span className="projectTitle">{project?.title}</span>
            <section className="container--dotAndLine">
              <section className="titleDot">●</section>
              <section className="titleLine"></section>
            </section>
          </section>
          <p className="madeByText">{project?.madeBy}</p>
          <p className="projectDescription">{project?.description}</p>
          <p className="builtWith">{project?.builtWith}</p>
          <section className="container--links">
            <section
              className="container--WebsiteLink"
              onClick={(e) => {
                e.preventDefault();
                if (project?.project) {
                  window.open(project.project, "_blank");
                }
              }}
            >
              <span className="websiteLink">Website</span>
              <span className="websiteArrow">
                <i className="fa-solid fa-arrow-up"></i>
              </span>
            </section>
            <section
              className="container--codeLink"
              onClick={(e) => {
                e.preventDefault();
                if (project?.code) {
                  window.open(project.code, "_blank");
                }
              }}
            >
              <span className="codeLink">Code</span>
              <span className="codeLinkArrow">
                <i className="fa-solid fa-arrow-up"></i>
              </span>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};
