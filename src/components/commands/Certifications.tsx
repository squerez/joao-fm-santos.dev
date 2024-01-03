import { CertIntro, CertList } from "../styles/Certifications.styled";
import { Wrapper } from "../styles/Output.styled";

const Certifications: React.FC = () => {
  return (
    <Wrapper data-testid="certifications">
      <CertIntro>Here you can find my certifications!</CertIntro>
      {eduBg.map(({ title, desc }) => (
        <CertList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </CertList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Databricks Certified Associate Developer for Apache Spark 3.0",
    desc: "Certification for Apache Spark 3.0, including Spark SQL, DataFrames, Datasets, Structured Streaming, MLlib, and GraphX. Issued by Databricks. | 2020",
  },
  {
    title: "Azure Data Engineer Associate",
    desc: "Certification for Azure Data Engineer Associate, including Azure Data Factory, Azure Data Lake, Azure Synapse Analytics, Azure Databricks, Azure Stream Analytics, Azure Cosmos DB, Azure SQL Database, Azure SQL Managed Instance, Azure Database for PostgreSQL, Azure Database for MySQL, and Azure Synapse Analytics. Issued by Microsoft. | 2021",
  },
  {
    title: "Terraform Associate",
    desc: "Certification for Terraform Associate, including Terraform CLI, Terraform Workflow (Write, Plan, and Create), Provision Infrastructure, Manage Infrastructure, Configure Infrastructure, Secure Terraform Automation, and Understand Terraform Cloud and Enterprise Capabilities. Issued by Terraform. | 2021",
  },
  {
    title: "Databricks Certified Data Engineer Associate",
    desc: "Certification for Databricks Certified Data Engineer Associate, including Data Engineering Fundamentals, Data Engineering on Azure Databricks, and Data Engineering on AWS Databricks. Issued by Databricks. | 2022",
  },
  {
    title: "Certified Kubernetes Application Developer",
    desc: "Certification for Certified Kubernetes Application Developer, including Core Concepts, Configuration, Multi-Container Pods, Observability, Pod Design, Services \& Networking, State Persistence, and Scheduling \& Performance. Issued by the CNCF and the Linux Foundation. | 2023",
  },
];

export default Certifications;
