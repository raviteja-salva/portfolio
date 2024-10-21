import React from 'react';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 4rem);
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  animation: ${fadeIn} 1s ease-out;
  background: linear-gradient(45deg, #60a5fa, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SubTitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease-out 0.3s forwards;
  opacity: 0;
  color: #cbd5e1;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease-out 0.6s forwards;
  opacity: 0;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: ${props => props.primary ? '#60a5fa' : 'transparent'};
  color: ${props => props.primary ? '#fff' : '#60a5fa'};
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  transition: all 0.3s ease;
  text-decoration: none;
  border: 2px solid ${props => props.primary ? '#60a5fa' : 'transparent'};
  
  &:hover {
    background-color: ${props => props.primary ? '#3b82f6' : 'rgba(96, 165, 250, 0.1)'};
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  svg {
    margin-left: 0.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  animation: ${fadeIn} 1s ease-out 0.9s forwards;
  opacity: 0;
`;

const SocialLink = styled.a`
  color: #cbd5e1;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #60a5fa;
  }
`;

const Home = () => (
  <HomeContainer>
    <Title>Kasi Raviteja Salva</Title>
    <SubTitle>Full Stack Developer | Turning Ideas into Reality</SubTitle>
    <ButtonContainer>
      <Button 
        href="https://drive.google.com/file/d/1e_UFo7y4astIoIPLfdPB2_idTH83arrC/view" 
        target="_blank" 
        rel="noopener noreferrer"
        primary
      >
        View Resume <FaArrowRight />
      </Button>
      <Button href="#projects">
        Explore Projects
      </Button>
    </ButtonContainer>
  </HomeContainer>
);

export default Home;