import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "maestro",
    desc: "Python-based data engineering metadata-driven framework. Currently in a testing phase, evolving as I learn more in the DE field.",
    url: "https://github.com/squerez/maestro",
  },
  {
    id: 2,
    title: "shamir",
    desc: "simple OTP API designed for team use, born from my curious mind exploring API design concepts.",
    url: "https://github.com/squerez/shamir",
  },
  {
    id: 3,
    title: "goji",
    desc: "A simple orchestration engine built with Go designed to be used with Docker, for learning purposes.",
    url: "https://github.com/squerez/goji",
  },
  {
    id: 4,
    title: "rustnake",
    desc: "A simple snake game built with Rust and Raylib, for learning purposes.",
    url: "https://github.com/squerez/rustnake",
  },
];

export default Projects;
