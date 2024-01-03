import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  const asciiArt = `
     _                          __                                 _            
    (_) ___   __ _  ___        / _|_ __ ___        ___  __ _ _ __ | |_ ___  ___ 
    | |/ _ \\ / _\` |/ _ \\ _____| |_| '_ \` _ \\ _____/ __|/ _\` | '_ \\| __/ _ \\/ __|
    | | (_) | (_| | (_) |_____|  _| | | | | |_____|\\__ \\ (_| | | | | || (_) \\__ \\
   _/ |\\___/ \\__,_|\\___/      |_| |_| |_| |_|     |___/\\__,_|_| |_|\\__\\___/|___/
  |__/                                                                          
`;
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          <pre>{asciiArt}</pre>
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            <pre>{asciiArt}</pre>
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my personal webpage.</div>
        <div>All you need to know about my portfolio and career can be found here.</div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this {" "}
          <Link href="https://github.com/squerez/joao-fm-santos.dev">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
