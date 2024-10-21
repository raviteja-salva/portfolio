import React from 'react';
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

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ReasonCard = styled.div`
  background-color: #1e293b;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out;
  animation-fill-mode: both;
  animation-delay: ${props => props.index * 0.1}s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #60a5fa;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  ${ReasonCard}:hover & {
    transform: scale(1.1);
  }
`;

const ReasonTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #f1f5f9;
  margin-bottom: 0.5rem;
`;

const ReasonText = styled.p`
  font-size: 1rem;
  color: #9ca3af;
  line-height: 1.6;
`;

const WhyHireMe = () => {
  return (
    <Container>
      <Title>Why Hire Me?</Title>
      <Grid>
        {reasons.map((reason, index) => (
          <ReasonCard key={index} index={index}>
            <IconWrapper>
              <reason.icon />
            </IconWrapper>
            <ReasonTitle>{reason.title}</ReasonTitle>
            <ReasonText>{reason.text}</ReasonText>
          </ReasonCard>
        ))}
      </Grid>
    </Container>
  );
};

export default WhyHireMe;