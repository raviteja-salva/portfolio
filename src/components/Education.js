import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa';

const fadeIn = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const Section = styled.section`
  min-height: 100vh;
  background: transparent;
  padding: 6rem 2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
    min-height: auto;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    overflow-x: hidden;
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

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, #64ffda20, #64ffda, #64ffda20);

    @media (max-width: 768px) {
      left: 0;
    }
  }
`;

const TimelineItem = styled.div`
  display: flex;
  justify-content: ${props => props.isEven ? 'flex-start' : 'flex-end'};
  padding: 2rem 0;
  width: 100%;
  animation: fadeIn 0.6s ease-out forwards;
  animation-delay: ${props => props.index * 0.2}s;
  opacity: 0;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 20px;
    width: calc(100% - 20px);
  }

  ${fadeIn}
`;

const Card = styled.div`
  width: 45%;
  background: #141414;
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  position: relative;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: calc(100% - 20px);
    margin-left: 20px;
    padding: 1.25rem;
  }

  &::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background: #64ffda;
    border-radius: 50%;
    top: 50%;
    ${props => props.isEven ? 'right: -48px' : 'left: -48px'};
    transform: translateY(-50%);
    border: 3px solid #1e293b;
    z-index: 1;

    @media (max-width: 768px) {
      left: -30px;
      width: 12px;
      height: 12px;
    }
  }
`;

const DegreeTitle = styled.h3`
  font-size: 1.25rem;
  color: #fff;
  margin-bottom: 0.5rem;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Institution = styled.h4`
  font-size: 1rem;
  color: #64ffda;
  margin-bottom: 1.25rem;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-top: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #94a3b8;
  font-size: 0.85rem;
  overflow: hidden;

  svg {
    color: #64ffda;
    flex-shrink: 0;
  }
`;

const Details = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.25rem 0 0;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
  padding-top: 1.25rem;
`;

const DetailItem = styled.li`
  color: #94a3b8;
  margin-bottom: 0.5rem;
  padding-left: 1.25rem;
  position: relative;
  font-size: 0.9rem;
  line-height: 1.4;
  word-wrap: break-word;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: #64ffda;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const StatusBadge = styled.span`
  position: absolute;
  top: -12px;
  right: 20px;
  background: linear-gradient(135deg, #64ffda, #64ffda);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;

  @media (max-width: 768px) {
    padding: 0.3rem 0.6rem;
    font-size: 0.75rem;
    top: -10px;
    right: 10px;
  }
`;


const Education = () => {
  const educationData = [
    {
      degree: "BSc Computer Science (MSCs)",
      institution: "S.V.K.P. Degree College",
      location: "Cumbum, AP",
      duration: "07/2021 - 07/2024",
      details: [
        "Core Computer Science fundamentals",
        "Advanced Mathematics and Statistics",
        "Software Development Principles",
        "Data Structures and Algorithms"
      ]
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Pratibha Junior College",
      location: "Ongole, AP",
      duration: "06/2019 - 06/2021",
      details: [
        "Mathematics, Physics, and Chemistry",
        "Strong foundation in sciences",
        "Analytical problem-solving skills",
        "Academic excellence"
      ]
    },
    {
      degree: "Secondary School Certificate",
      institution: "Sri Sreenivasa High School",
      location: "Cumbum, AP",
      duration: "06/2018 - 06/2019",
      details: [
        "Comprehensive general education",
        "Foundation for higher studies",
        "Critical thinking development",
        "Academic achievements"
      ]
    }
  ];

  return (
    <Section id="education">
      <Container>
        <Title>Educational Background</Title>
        <Timeline>
          {educationData.map((edu, index) => (
            <TimelineItem key={index} isEven={index % 2 === 0} index={index}>
              <Card isEven={index % 2 === 0}>
                {edu.current && <StatusBadge>Current</StatusBadge>}
                <DegreeTitle>{edu.degree}</DegreeTitle>
                <Institution>{edu.institution}</Institution>
                <InfoGrid>
                  <InfoItem>
                    <FaMapMarkerAlt />
                    <span>{edu.location}</span>
                  </InfoItem>
                  <InfoItem>
                    <FaCalendarAlt />
                    <span>{edu.duration}</span>
                  </InfoItem>
                </InfoGrid>
              </Card>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Section>
  );
};

export default Education;
