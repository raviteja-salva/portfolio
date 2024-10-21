import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Home from './components/Home';
import Contact from './components/Contact';
import Experience from './components/Experience';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import WhyHireMe from './components/WhyHireMe';
import { FaBars, FaTimes } from 'react-icons/fa';
import "./App.css";

const Container = styled.div`
  background-color: #0a192f; // Darker navy blue for the overall background
  color: #fff;
  font-family: 'Poppins', sans-serif;
  scroll-behavior: smooth; // Ensures smooth scroll
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(10, 25, 47, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease-in-out;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const logoAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: bold;
  color: #007BFF; // Bright blue for logo
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    color: #0056b3; // Darker blue on hover
    animation: ${logoAnimation} 0.5s ease-in-out;
  }

  &::before {
    content: '<';
    margin-right: 2px;
    opacity: 0.7;
  }

  &::after {
    content: '/>';
    margin-left: 2px;
    opacity: 0.7;
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
  color: #007BFF; // Blue for normal state
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem 0;

  &:hover {
    color: #0056b3; // Darker blue on hover
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #007BFF; // Blue underline
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
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
  color: #007BFF; // Blue for the menu icon
  
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
  background-color: rgba(10, 25, 47, 0.98);
  backdrop-filter: blur(10px);
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
  color: #007BFF; // Blue for the close icon
`;

const Section = styled.section`
  padding: 5rem 1rem;
  margin-top: 4rem;
  scroll-margin-top: 4rem; // Ensures proper scroll when using navbar
`;

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Container>
      <Nav style={{ 
        backgroundColor: scrolled ? 'rgba(10, 25, 47, 0.95)' : 'rgba(10, 25, 47, 0.7)',
        boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'
      }}>
        <NavWrapper>
          <Logo href="#home">KRS</Logo>
          <NavLinks>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#experience">Experience</NavLink>
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
        <MobileNavLink href="#about" onClick={closeMobileMenu}>About</MobileNavLink>
        <MobileNavLink href="#projects" onClick={closeMobileMenu}>Projects</MobileNavLink>
        <MobileNavLink href="#experience" onClick={closeMobileMenu}>Experience</MobileNavLink>
        <MobileNavLink href="#skills" onClick={closeMobileMenu}>Skills</MobileNavLink>
        <MobileNavLink href="#whyhireme" onClick={closeMobileMenu}>Why Hire Me?</MobileNavLink>
        <MobileNavLink href="#contact" onClick={closeMobileMenu}>Contact</MobileNavLink>
      </MobileMenu>

      <Section id="home">
        <Home />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="experience">
        <Experience />
      </Section>
      <Section id="skills">
        <Skills />
      </Section>
      <Section id="whyhireme">
        <WhyHireMe />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </Container>
  );
};

export default App;
