import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Password Randomizer',
      description: 'JavaScript Password Generator',
      link: "https://riaaah3.github.io/password-randomizer/",
      repo: "https://github.com/riaaah3/password-randomizer.git"
    },
    {
      name: 'Note Taker',
      description: 'Express.js application used for taking notes',
      link: "https://note-taker-1wy5.onrender.com/",
      repo: "https://github.com/riaaah3/note-taker.git"
    },
    {
      name: 'My Busy Day',
      description: 'Scheduler made using Third-Party APIs',
      link: "https://riaaah3.github.io/my-busy-day/",
      repo: "https://github.com/riaaah3/my-busy-day.git"
    },
    {
      name: 'Text Editor',
      description: 'Progressive Web Application',
      link: "https://text-editor-bhwt.onrender.com/",
      repo: "https://github.com/riaaah3/text-editor.git"
    },
    {
      name: 'Accessibility For All',
      description: 'Accessible Website made using HTML/CSS',
      link: "https://riaaah3.github.io/accessibility-for-all/",
      repo: "https://github.com/riaaah3/accessibility-for-all.git"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
