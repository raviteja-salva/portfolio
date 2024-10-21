import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #0a192f;
  color: #a8b2d1;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const TextSection = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    width: 60%;
    margin-bottom: 0;
    padding-right: 3rem;
  }
`;

const Heading = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  color: #60a5fa;
  margin-bottom: 1.5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #60a5fa;
  }
`;

const Description = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #a8b2d1;
`;

const Highlight = styled.span`
  color: #93c5fd;
  font-weight: 600;
`;

const ImageSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    width: 40%;
  }
`;

const ImageContainer = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #60a5fa;
  box-shadow: 0 0 20px rgba(96, 165, 250, 0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const About = () => {
  return (
    <Container>
      <TextSection>
        <Heading>About Me</Heading>
        <Description>
          Hello! I'm <Highlight>Kasi Raviteja Salva</Highlight>, a passionate full stack developer 
          specializing in the <Highlight>MERN stack</Highlight>. With a BSc in Computer Science, 
          I bring a robust foundation in programming principles and a keen eye for creating 
          efficient, scalable web applications.
          <br /><br />
          My journey in tech is driven by a desire to craft <Highlight>user-centric solutions </Highlight> 
          that make a meaningful impact. I thrive on challenges and constantly push myself to learn 
          new technologies and methodologies.
        </Description>
      </TextSection>
      <ImageSection>
        <ImageContainer>
          <Image src="https://i.ibb.co/Dt6YSCC/853e0398f81b.jpg" alt="Kasi Raviteja Salva" />
        </ImageContainer>
      </ImageSection>
    </Container>
  );
};

export default About;