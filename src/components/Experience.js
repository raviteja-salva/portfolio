import React from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import styled from 'styled-components';

const experiences = [
  {
    company: "Aptitude Guru Hem",
    position: "Fullstack Developer Intern",
    period: "08/2024 - Present",
    description: "Developed an affiliate marketing site for the user portal using the MERN stack with a focus on efficient data handling and user experience. Managed project tasks via Jira, handled deployment, integrated team tasks, and conducted code reviews.",
    achievements: [
      "Ensured code quality, security, and maintainability using SonarQube for static analysis",
      "Improved user experience through efficient data handling",
      "Managed team collaboration and productivity by handling task integration and code reviews"
    ]
  }
];


const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  background-color: transparent;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  color: #60a5fa;
  margin-bottom: 3rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background-color: #60a5fa;
  }
`;

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const ExperienceItem = styled.div`
  position: relative;
  padding-left: 2rem;
  border-left: 2px solid #60a5fa;
  
  @media (min-width: 768px) {
    padding-left: 3rem;
  }
`;

const Dot = styled.div`
  position: absolute;
  left: -12px;
  top: 0;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #60a5fa;
  border-radius: 50%;
  transition: transform 0.3s ease;
  
  ${ExperienceItem}:hover & {
    transform: scale(1.2);
  }
`;

const ExperienceContent = styled.div`
  background-color: #1e293b;
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Company = styled.h3`
  font-size: 1.75rem;
  font-weight: bold;
  color: #60a5fa;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Position = styled.h4`
  font-size: 1.25rem;
  color: #60a5fa;
  margin-bottom: 0.5rem;
`;

const Period = styled.p`
  display: flex;
  align-items: center;
  color: #9ca3af;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const Description = styled.p`
  color: #f1f5f9;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const AchievementsList = styled.ul`
  color: #f1f5f9;
  padding-left: 1.5rem;
  margin-top: 1rem;
`;

const AchievementItem = styled.li`
  margin-bottom: 0.5rem;
  position: relative;
  
  &::before {
    content: '▹';
    position: absolute;
    left: -1.5rem;
    color: #60a5fa;
  }
`;

const Experience = () => (
  <Container>
    <Title>My Experience</Title>
    <ExperienceWrapper>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index}>
          <Dot />
          <ExperienceContent>
            <Company><FaBriefcase style={{ marginRight: '0.75rem' }} />{exp.company}</Company>
            <Position>{exp.position}</Position>
            <Period><FaCalendarAlt style={{ marginRight: '0.5rem' }} />{exp.period}</Period>
            <Description>{exp.description}</Description>
            <AchievementsList>
              {exp.achievements.map((achievement, idx) => (
                <AchievementItem key={idx}>{achievement}</AchievementItem>
              ))}
            </AchievementsList>
          </ExperienceContent>
        </ExperienceItem>
      ))}
    </ExperienceWrapper>
  </Container>
);

export default Experience;

