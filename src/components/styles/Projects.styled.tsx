import styled from "styled-components";

export const ProjectContainer = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.875rem;
`;

export const ProjectsIntro = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  line-height: 1.5rem;
`;

export const ProjectTitle = styled.div`
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

export const ProjectDesc = styled.div`
  color: ${({ theme }) => theme.colors?.text[200]};
  text-align: justify;
  line-height: 1.5rem;
  max-width: 500px;
`;

export const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors?.secondary};
  text-decoration: none;
  line-height: 1.5rem;
  white-space: nowrap;
  border-bottom: 2px dashed ${({ theme }) => theme.colors?.secondary};

  &:hover {
    border-bottom-style: solid;
  }
`;
