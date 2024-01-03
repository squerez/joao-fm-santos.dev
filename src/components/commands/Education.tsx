import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "BSc in Geography and Regional Planning",
    desc: "Universidade Nova de Lisboa | 2011 ~ 2014",
  },
  {
    title: "PGDip in Computer Science and Business Management",
    desc: "ISCTE - Instituto Universitário de Lisboa | 2015 ~ 2017",
  },
];

export default Education;
