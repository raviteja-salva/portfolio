import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaDatabase, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiBootstrap, SiTypescript } from 'react-icons/si';
import styled, { keyframes } from 'styled-components';

const skills = [
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 'Advanced' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', level: 'Advanced' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 'Advanced' },
  { name: 'React', icon: FaReact, color: '#61DAFB', level: 'Advanced' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 'Intermediate' },
  { name: 'Python', icon: FaPython, color: '#3776AB', level: 'Intermediate' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 'Intermediate' },
  { name: 'Express', icon: SiExpress, color: '#ffffff', level: 'Intermediate' },
  { name: 'SQL', icon: FaDatabase, color: '#4479A1', level: 'Intermediate' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3', level: 'Advanced' },
];

const Container = styled.section`
  position: relative;
  padding: 6rem 0;
  background: transparent;
  min-height: 100vh;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: transparent;
  }
//linear-gradient(90deg, transparent, rgba(100, 255, 218, 0.3), transparent)
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: transparent;
  }
`;

const glow = keyframes`
  0%, 100% {
    text-shadow: 0 0 10px rgba(100, 255, 218, 0.3),
                 0 0 20px rgba(100, 255, 218, 0.3),
                 0 0 30px rgba(100, 255, 218, 0.3);
  }
  50% {
    text-shadow: 0 0 20px rgba(100, 255, 218, 0.5),
                 0 0 30px rgba(100, 255, 218, 0.5),
                 0 0 40px rgba(100, 255, 218, 0.5);
  }
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

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-300px * ${skills.length / 2}));
  }
`;

const SkillsTrack = styled.div`
  display: flex;
  width: calc(300px * ${skills.length});
  animation: ${scroll} 40s linear infinite;
  opacity: 0.9;

  &:hover {
    animation-play-state: paused;
    opacity: 1;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(2deg);
  }
`;

const shine = keyframes`
  0% {
    background-position: -100% 100%;
  }
  100% {
    background-position: 200% -100%;
  }
`;

const SkillCard = styled.div`
  flex: 0 0 250px;
  height: 280px;
  margin: 0 25px;
  background: rgba(17, 34, 64, 0.6);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  background-image: linear-gradient(
    45deg,
    transparent 25%,
    rgba(100, 255, 218, 0.1) 50%,
    transparent 75%
  );
  background-size: 200% 200%;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${props => props.$index * 0.2}s;

  &:hover {
    transform: translateY(-15px) scale(1.05);
    border-color: rgba(100, 255, 218, 0.5);
    background-color: rgba(17, 34, 64, 0.9);
    animation: ${shine} 1.5s linear infinite;
    
    .icon {
      transform: scale(1.2) rotate(360deg);
    }

    .level {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #64ffda, #0a192f, #64ffda);
    border-radius: 20px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SkillIcon = styled.div`
  font-size: 5rem;
  color: ${props => props.color};
  margin-bottom: 1.5rem;
  transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 80px;
    background: radial-gradient(circle, ${props => props.color}20, transparent 70%);
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: -1;
  }

  &.icon {
    &:hover {
      animation: ${rotate} 2s linear infinite;
    }
  }
`;

const SkillName = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #e6f1ff;
  margin: 0.5rem 0;
  text-align: center;
`;

const SkillLevel = styled.span`
  font-size: 0.9rem;
  color: #64ffda;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  background: rgba(100, 255, 218, 0.1);
  border: 1px solid rgba(100, 255, 218, 0.3);
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  margin-top: 1rem;

  &.level {
    transition-delay: 0.1s;
  }
`;

const SkillsContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: 2rem 0;
  margin: 2rem 0;
  
  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 200px;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: transparent;
  }

  &::after {
    right: 0;
    background: transparent;
  }
`;

const Skills = () => {
  return (
    <Container>
      <Title>Technical Expertise</Title>
      <SkillsContainer>
        <SkillsTrack>
          {[...skills, ...skills].map((skill, index) => (
            <SkillCard key={index} $index={index}>
              <SkillIcon color={skill.color} className="icon">
                {React.createElement(skill.icon)}
              </SkillIcon>
              <SkillName>{skill.name}</SkillName>
              <SkillLevel className="level">{skill.level}</SkillLevel>
            </SkillCard>
          ))}
        </SkillsTrack>
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
