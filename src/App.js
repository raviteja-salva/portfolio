import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Home from './components/Home';
import Contact from './components/Contact';
import Experience from './components/Experience';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import WhyHireMe from './components/WhyHireMe';
import Education from './components/Education';
import { FaBars, FaTimes } from 'react-icons/fa';
import "./App.css";

const Container = styled.div`
  background-color: #0a0a0a;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  scroll-behavior: smooth;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ scrolled }) => (scrolled ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.7)')};
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: background-color 0.3s ease;
  box-shadow: ${({ scrolled }) => (scrolled ? '0 4px 10px rgba(0, 0, 0, 0.2)' : 'none')};
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const logoPulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
`;

const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: bold;
  color: #0dd3c5;
  text-decoration: none;
  display: flex;
  align-items: center;
  animation: ${logoPulse} 2s infinite;
  
  &:hover {
    color: #08b1a1;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s;

  &:hover {
    color: #0dd3c5;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #0dd3c5;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }

  &:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #0dd3c5;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 60%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95);
  transition: right 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const MobileNavLink = styled(NavLink)`
  font-size: 1.2rem;
  margin: 1rem 0;
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  color: #0dd3c5;
`;

const Section = styled.section`
  padding: 5rem 1rem;
  margin-top: 4rem;
  scroll-margin-top: 4rem;
`;

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Container>
      <Nav scrolled={scrolled}>
        <NavWrapper>
          <Logo href="#home">KRS</Logo>
          <NavLinks>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#whyhireme">Why Hire Me?</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </NavLinks>
          <MenuIcon onClick={toggleMobileMenu}>
            <FaBars />
          </MenuIcon>
        </NavWrapper>
      </Nav>

      <MobileMenu isOpen={mobileMenuOpen}>
        <CloseIcon onClick={closeMobileMenu}>
          <FaTimes />
        </CloseIcon>
        <MobileNavLink href="#home" onClick={closeMobileMenu}>Home</MobileNavLink>
        <MobileNavLink href="#education" onClick={closeMobileMenu}>Education</MobileNavLink>
        <MobileNavLink href="#experience" onClick={closeMobileMenu}>Experience</MobileNavLink>
        <MobileNavLink href="#projects" onClick={closeMobileMenu}>Projects</MobileNavLink>
        <MobileNavLink href="#skills" onClick={closeMobileMenu}>Skills</MobileNavLink>
        <MobileNavLink href="#whyhireme" onClick={closeMobileMenu}>Why Hire Me?</MobileNavLink>
        <MobileNavLink href="#contact" onClick={closeMobileMenu}>Contact</MobileNavLink>
      </MobileMenu>

      <Section id="home"><Home /></Section>
      <Section id="education"><Education /></Section>
      <Section id="experience"><Experience /></Section>
      <Section id="projects"><Projects /></Section>
      <Section id="skills"><Skills /></Section>
      <Section id="whyhireme"><WhyHireMe /></Section>
      <Section id="contact"><Contact /></Section>
    </Container>
  );
};

export default App;
