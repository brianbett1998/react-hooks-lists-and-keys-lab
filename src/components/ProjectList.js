import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <ul id="project-list">
        {/* render ProjectItem components here */}
        {projects.map((project) => (
          <li key={project.name}>
            <ProjectItem
              name={project.name}
              about={project.about}
              technologies={project.technologies}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
