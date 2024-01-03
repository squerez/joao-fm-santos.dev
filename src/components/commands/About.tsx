import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>João Santos</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a data engineer</HighlightAlt> based in Lisbon,
        Portugal.
      </p>
      <p>
        I've always been captivated by tech and programming. <br />
      </p>
      <p>
        Academically, I have a degree in Geography and Regional Planning, not the most obvious path to a career in tech, I know, <br /> 
        but I've always been a curious person and programming was (and still is) quite exciting for me.
      </p>
      <p>
        When I first started, building a simple Python script to print messages in text boxes was quite the challenge for me. 
        <br />Fast-forward to this day, I've made some progress, but hey, there's always more to explore and learn.
      </p>
    </AboutWrapper>
  );
};

export default About;
