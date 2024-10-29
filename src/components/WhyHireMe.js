import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaCode, FaUsers, FaLightbulb, FaRocket, FaDatabase, FaPuzzlePiece, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const reasons = [
  { icon: FaCode, title: "Full-Stack Expertise", text: "Proficient in MERN Stack with a track record of delivering robust, scalable applications" },
  { icon: FaDatabase, title: "Data-Driven Development", text: "Strong skills in JavaScript, Python, and SQL. Experienced in optimizing database performance and data structures" },
  { icon: FaUsers, title: "Collaborative Team Player", text: "Excellent communication skills with a history of successful cross-functional collaboration" },
  { icon: FaLightbulb, title: "Innovative Problem Solver", text: "Proven ability to tackle complex challenges with creative, efficient solutions" },
  { icon: FaRocket, title: "Rapid Learner & Adaptor", text: "Quick to master new technologies and methodologies, ensuring cutting-edge solutions" },
  { icon: FaPuzzlePiece, title: "Scalable Solution Architect", text: "Passionate about creating efficient, maintainable, and scalable code architectures" },
  { icon: FaChartLine, title: "Performance Optimizer", text: "Skilled at identifying and resolving bottlenecks to enhance application speed and efficiency" },
  { icon: FaShieldAlt, title: "Security-Conscious Developer", text: "Prioritize robust security practices in all stages of development to protect sensitive data" },
];

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background-color: transparent;
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

const ReasonsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ReasonItem = styled.li`
  opacity: 0;
  animation: ${slideInFromLeft} 0.5s ease-out forwards;
  animation-delay: ${props => props.index * 0.1}s;
`;

const ReasonContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  background-color: rgba(100, 255, 218, 0.05);
  
  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translateX(10px);
  }
`;

const IconWrapper = styled.div`
  font-size: 1.5rem;
  color: #64ffda;
  flex-shrink: 0;
  margin-top: 0.25rem;
`;

const TextContent = styled.div`
  flex: 1;
`;

const ReasonTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #64ffda;
  margin-bottom: 0.5rem;
`;

const ReasonText = styled.p`
  font-size: 1rem;
  color: #8892b0;
  line-height: 1.6;
`;

const WhyHireMe = () => {
  return (
    <Container>
      <Title>Why Hire Me?</Title>
      <ReasonsList>
        {reasons.map((reason, index) => (
          <ReasonItem key={index} index={index}>
            <ReasonContent>
              <IconWrapper>
                <reason.icon />
              </IconWrapper>
              <TextContent>
                <ReasonTitle>{reason.title}</ReasonTitle>
                <ReasonText>{reason.text}</ReasonText>
              </TextContent>
            </ReasonContent>
          </ReasonItem>
        ))}
      </ReasonsList>
    </Container>
  );
};

export default WhyHireMe;
