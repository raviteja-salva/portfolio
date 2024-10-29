import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaTrophy, FaCode } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const Section = styled.section`
  min-height: 100vh;
  background: transparent;
  padding: 6rem 1.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(100, 255, 218, 0.2), transparent);
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
    min-height: auto;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const Title = styled.h2`
 font-size: 3rem;
  font-weight: 800;
  text-align: center;
  color: #64ffda;
  margin-bottom: 4rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #64ffda, transparent);
  }
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  position: relative;
`;

const ExperienceCard = styled.div`
  background: rgba(17, 24, 39, 0.8);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  animation: ${fadeInUp} 0.6s ease forwards;
  animation-delay: ${props => props.index * 0.2}s;
  opacity: 0;
  border: 1px solid rgba(100, 255, 218, 0.1);
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(135deg, rgba(100, 255, 218, 0.5), transparent);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  &:hover {
    transform: translateY(-5px);
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const CompanyInfo = styled.div`
  flex: 1;
`;

const StatusBadge = styled.span`
  background: linear-gradient(135deg, #64ffda, #64ffda);
  color: #000000;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    align-self: flex-start;
  }
`;

const Company = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: #64ffda;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Position = styled.h4`
  font-size: 1.25rem;
  color: #64ffda;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const Period = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #9ca3af;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;

  svg {
    color: #64ffda;
  }
`;

const Description = styled.p`
  color: #d1d5db;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1rem;
`;

const AchievementsTitle = styled.h5`
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: #64ffda;
  }
`;

const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  gap: 1rem;
`;

const AchievementItem = styled.li`
  color: #d1d5db;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: #64ffda;
  }

  &:hover {
    color: #fff;
    transition: color 0.2s ease;
  }
`;


const experiences = [
  {
    company: "Aptitude Guru Hem",
    position: "Fullstack Developer Intern",
    period: "08/2024 - Present",
    current: true,
    description: "Developed an affiliate marketing site for the user portal using the MERN stack with a focus on efficient data handling and user experience. Managed project tasks via Jira, handled deployment, integrated team tasks, and conducted code reviews.",
    achievements: [
      "Ensured code quality, security, and maintainability using SonarQube for static analysis",
      "Improved user experience through efficient data handling",
      "Managed team collaboration and productivity by handling task integration and code reviews"
    ]
  }
];

const Experience = () => (
  <Section id="experience">
    <Container>
      <Title>Professional Experience</Title>
      <ExperienceGrid>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} index={index}>
            <CompanyHeader>
              <CompanyInfo>
                <Company>
                  <FaBriefcase />
                  {exp.company}
                </Company>
                <Position>{exp.position}</Position>
              </CompanyInfo>
              {exp.current && (
                <StatusBadge>
                  <FaCode />
                  Current Role
                </StatusBadge>
              )}
            </CompanyHeader>
            
            <Period>
              <FaCalendarAlt />
              {exp.period}
            </Period>
            
            <Description>{exp.description}</Description>
            
            <AchievementsTitle>
              <FaTrophy />
              Key Achievements
            </AchievementsTitle>
            <AchievementsList>
              {exp.achievements.map((achievement, idx) => (
                <AchievementItem key={idx}>
                  {achievement}
                </AchievementItem>
              ))}
            </AchievementsList>
          </ExperienceCard>
        ))}
      </ExperienceGrid>
    </Container>
  </Section>
);

export default Experience;

