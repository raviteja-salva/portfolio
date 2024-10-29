import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

//Hi

const projects = [
  {
    name: "Nxt Trendz (E-Commerce Clone - Amazon, Flipkart)",
    deployedLink: "https://nxttrendzrts.ccbp.tech/",
    githubLink: "https://github.com/raviteja-salva/nxt_trendz_website",
    image: "https://th.bing.com/th/id/R.82ba779360b50f5c461e8592fb7473d1?rik=RcI3k0vhEbR%2fpg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fe-commerce-png-sell-your-products-and-services-online-1000.png&ehk=LZ2GD%2fGQ98UUOsXo6cKf4wz84A1wac5zM6LprYBb79A%3d&risl=&pid=ImgRaw&r=0",
    description: "A secure, modern e-commerce platform inspired by Amazon and Flipkart, built with React JS.",
    features: [
      "JWT authentication for secure user sessions",
      "REST API integration for dynamic product data",
      "Responsive design for seamless mobile and desktop experience",
      "Product search, filtering, and sorting functionalities",
    ],
    technologies: ["React JS", "JavaScript", "CSS", "Bootstrap", "REST API", "JWT", "Local Storage"],
    credentials: { username: "raja", password: "raja@2021" }
  },
  {
    name: "Jobby App",
    deployedLink: "https://jobbyapprts.ccbp.tech/",
    githubLink: "https://github.com/raviteja-salva/jobby-app",
    image: "https://specials-images.forbesimg.com/imageserve/6010706b32cbb402c830ace5/960x0.jpg?fit=scale",
    description: "A job search and filtering application enabling user authentication with JWT tokens and smooth navigation using React Router.",
    features: [
      "User authentication with JWT tokens",
      "Job search and filtering functionality",
      "Navigation with React Router",
    ],
    technologies: ["React JS", "JavaScript", "CSS", "Bootstrap", "REST API", "JWT", "Routing", "Local Storage"],
    credentials: { username: "rahul", password: "rahul@2021" }
  },
  {
    name: "Quick Todo Application",
    deployedLink: "https://raviquicktodo.ccbp.tech/",
    githubLink: "https://github.com/raviteja-salva/quick-todo-application",
    image: "https://www.completecontroller.com/wp-content/uploads/to-do-list-Complete-Controller.jpg",
    description: "A robust task tracking system with CRUD capabilities for managing tasks efficiently.",
    features: [
      "Create, Read, Update, Delete (CRUD) tasks",
      "Secure task persistence with local storage",
      "User-friendly task management interface"
    ],
    technologies: ["React JS", "JavaScript", "CSS", "Local Storage"]
  },
  {
    name: "Food Munch",
    deployedLink: "https://foodwebbyrts.ccbp.tech/",
    githubLink: "https://github.com/yourusername/not-diployed",
    image: "https://wallpapercave.com/wp/wp3376127.jpg",
    description: "A responsive food store website where users can view food items and offers.",
    features: [
      "Responsive design with a mobile-first approach",
      "Bootstrap embed and modal components for product videos"
    ],
    technologies: ["HTML", "CSS", "Bootstrap"]
  },
  {
    name: "Countries Search",
    deployedLink: "https://countrysrchrts.ccbp.tech/",
    githubLink: "https://github.com/yourusername/not-diployed",
    image: "https://studyfinds.org/wp-content/uploads/2023/03/World-population-surrounding-the-Earth-scaled.jpeg",
    description: "A responsive countries search application displaying all countries and respective populations.",
    features: [
      "Search by specific country",
      "Fetched country data using REST API",
      "Responsive design using Bootstrap"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "REST API", "Bootstrap"]
  }
];

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

const Container = styled.section`
  padding: 6rem 2rem;
  background: transparent;
  min-height: 100vh;
`;

const SectionTitle = styled.h2`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.article`
  position: relative;
  background: rgba(17, 34, 64, 0.8);
  border-radius: 1rem;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.4s ease-in-out;
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${props => props.$index * 0.2}s;
  opacity: 0;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(100, 255, 218, 0.3);
    box-shadow: 0 10px 30px -15px rgba(100, 255, 218, 0.2);
  }
`;

const ProjectImage = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent, rgba(10, 25, 47, 0.9));
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #e6f1ff;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: #8892b0;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 0.35rem 0.75rem;
  border-radius: 99px;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.2);
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 99px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  background: ${props => props.$primary ? 'rgba(100, 255, 218, 0.1)' : 'transparent'};
  color: #64ffda;
  border: 1px solid rgba(100, 255, 218, 0.3);

  &:hover {
    background: rgba(100, 255, 218, 0.2);
    transform: translateY(-2px);
  }

  svg {
    font-size: 0.9rem;
  }
`;

const Credentials = styled.div`
  margin-top: 1rem;
  padding: 0.75rem;
  background: rgba(100, 255, 218, 0.05);
  border-radius: 0.5rem;
  border: 1px dashed rgba(100, 255, 218, 0.2);

  p {
    color: #8892b0;
    font-size: 0.8rem;
    margin: 0;
    
    span {
      color: #64ffda;
      font-weight: 500;
    }
  }
`;

const Projects = () => {
  return (
    <Container>
      <SectionTitle>Featured Projects</SectionTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} $index={index}>
            <ProjectImage>
              <img src={project.image} alt={project.name} />
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.technologies.map((tech, i) => (
                  <TechTag key={i}>{tech}</TechTag>
                ))}
              </TechStack>
              <ProjectLinks>
                <LinkButton
                  href={project.deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  $primary
                >
                  <FaExternalLinkAlt /> Live Demo
                </LinkButton>
                <LinkButton
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> Code
                </LinkButton>
              </ProjectLinks>
              {project.credentials && (
                <Credentials>
                  <p>
                    Demo Credentials: <br />
                    <span>Username:</span> {project.credentials.username} <br />
                    <span>Password:</span> {project.credentials.password}
                  </p>
                </Credentials>
              )}
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Container>
  );
};

export default Projects;
