import { ProjectCard } from "./ProjectCard";
import "./Projects.css";

export const Projects = () => {
  return (
    <div className="projectSection">
      <h1>PROJECTS</h1>
      <div className="Projects">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};
