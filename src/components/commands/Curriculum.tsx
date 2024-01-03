import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  JobContainer,
  JobDesc,
  JobIntro,
  JobTitle,
} from "../styles/Curriculum.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Curriculum: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "curriculum")) {
      curriculum.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4", "5"]) ? (
      <Usage cmd="curriculum" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="curriculum">
      <JobIntro>
        Here are some of the client I have worked with 
      </JobIntro>
      {curriculum.map(({ id, title, desc }) => (
        <JobContainer key={id}>
          <JobTitle>{`${id}. ${title}`}</JobTitle>
          <JobDesc>{desc}</JobDesc>
        </JobContainer>
      ))}
      <Usage cmd="curriculum" marginY />
    </div>
  );
};

const curriculum = [
  {
    id: 1,
    title: "Mercedes-Benz.io",
    desc: "Managed CI/CD pipelines, Kubernetes deployments, and orchestrated migration to Airflow, along with custom DAGs for data pipelines using Azure services. Maintained platform health and security.",
    url: "https://www.mercedes-benz.io/",
  },
  {
    id: 2,
    title: "United Nations (UNICC)",
    desc: "Supported infrastructure changes using Terraform for Azure services, although the role shifted from the intended data engineering focus.",
    url: "https://www.unicc.org/",
  },
  {
    id: 3,
    title: "Bild Analytics (now Ascent)",
    desc: "Engineered ingestion platforms for clients like Kantar and DS Smith, developed MLOps POC, Quality-Checks framework, and DevOps IAC using Terraform.",
    url: "https://www.ascent.io/",
  },
  {
    id: 4,
    title: "Aubay",
    desc: "Built an end-to-end data platform for UNICRE on Azure, utilizing Azure Data Factory and Databricks, ensuring compliance with legal requirements.",
    url: "https://www.aubay.pt/",
  },
  {
    id: 5,
    title: "Boost IT",
    desc: "Contributed to Carlsberg Analytics Platform with data pipelines, transformation classes, cube model generation, and data integration using Azure services. Also worked on projects for MetLife and Antas da Cunha Ecije.",
    url: "https://boost-it.pt/pt/",
  },
];

export default Curriculum;

