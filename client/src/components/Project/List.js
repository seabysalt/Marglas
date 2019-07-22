import React from "react";
import { Link } from "react-router-dom";

const ProjectList = props => {
  return (
    <div>
      {props.projects.length > 0 && <h2>Projects:</h2>}

      {props.projects.map(project => {
        return (
          <div key={project._id}>
            <Link to={`/projects/${project._id}`}>
              <h3>{project.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
