import React, { useState, useRef, useEffect } from 'react';
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';

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


const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
  background-color: #0a192f;
`;

const Title = styled.h2`
  font-size: 2.8rem;
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
    width: 100px;
    height: 3px;
    background-color: #60a5fa;
  }
`;

const ProjectsContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px; // Adjust this to match your card width
  margin: 0 auto;
`;

const ProjectsScroller = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
`;

const ProjectCard = styled.div`
  flex: 0 0 100%;
  width: 100%;
  scroll-snap-align: start;
  background-color: #1e293b;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(96, 165, 250, 0.2);
  }
`;

const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(96, 165, 250, 0.8);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 10;

  &:hover {
    background-color: rgba(59, 130, 246, 0.9);
  }

  &:disabled {
    background-color: rgba(96, 165, 250, 0.4);
    cursor: not-allowed;
  }
`;

const LeftScrollButton = styled(ScrollButton)`
  left: -50px; // Adjust this value as needed
`;

const RightScrollButton = styled(ScrollButton)`
  right: -50px; // Adjust this value as needed
`;
const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 3px solid #60a5fa;
  border-radius:10px;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #60a5fa;
`;

const ProjectDescription = styled.p`
  color: #a8b2d1;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  margin-bottom: 1.5rem;
`;

const FeatureItem = styled.li`
  color: #a8b2d1;
  margin-bottom: 0.5rem;
  
  &:before {
    content: '▹';
    color: #60a5fa;
    margin-right: 0.5rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background-color: #293548;
  color: #60a5fa;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: #60a5fa;
  color: #0a192f;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #3b82f6;
    transform: translateY(-2px);
  }

  svg {
    margin-left: 0.5rem;
  }
`;

const Credentials = styled.p`
  color: #a8b2d1;
  font-size: 0.875rem;
  margin-top: 1rem;
  font-style: italic;
`;

const Projects = () => {
    const scrollRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleScroll = (direction) => {
      const container = scrollRef.current;
      if (container) {
        const newIndex = direction === 'left' 
          ? Math.max(0, currentIndex - 1) 
          : Math.min(projects.length - 1, currentIndex + 1);
        
        container.scrollTo({ left: newIndex * container.offsetWidth, behavior: 'smooth' });
        setCurrentIndex(newIndex);
      }
    };
  
    useEffect(() => {
      const container = scrollRef.current;
      if (container) {
        const handleScrollEnd = () => {
          const newIndex = Math.round(container.scrollLeft / container.offsetWidth);
          setCurrentIndex(newIndex);
        };
        
        container.addEventListener('scrollend', handleScrollEnd);
        return () => container.removeEventListener('scrollend', handleScrollEnd);
      }
    }, []);
  
    return (
      <Container>
        <Title>Projects</Title>
        <ProjectsContainer>
          <LeftScrollButton 
            onClick={() => handleScroll('left')}
            disabled={currentIndex === 0}
          >
            <FaChevronLeft />
          </LeftScrollButton>
          <ProjectsScroller ref={scrollRef}>
            {projects.map((project, index) => (
              <ProjectCard key={index}>
                 <ProjectContent>
            <ProjectImage src={project.image} />      
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <FeatureList>
              {project.features.map((feature, i) => (
                <FeatureItem key={i}>{feature}</FeatureItem>
              ))}
            </FeatureList>
            <TechStack>
              {project.technologies.map((tech, i) => (
                <TechTag key={i}>{tech}</TechTag>
              ))}
            </TechStack>
            <ProjectLinks>
              <ProjectLink 
                href={project.deployedLink} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Live Demo <FaExternalLinkAlt />
              </ProjectLink>
              <ProjectLink 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub <FaGithub />
              </ProjectLink>
            </ProjectLinks>
            {project.credentials && (
              <Credentials>
                Demo Credentials: Username: {project.credentials.username}, Password: {project.credentials.password}
              </Credentials>
            )}
          </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsScroller>
          <RightScrollButton 
            onClick={() => handleScroll('right')}
            disabled={currentIndex === projects.length - 1}
          >
            <FaChevronRight />
          </RightScrollButton>
        </ProjectsContainer>
      </Container>
    );
  };
  
  export default Projects;
  /* 

    <ProjectContent>
            <ProjectImage src={project.image} />      
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <FeatureList>
              {project.features.map((feature, i) => (
                <FeatureItem key={i}>{feature}</FeatureItem>
              ))}
            </FeatureList>
            <TechStack>
              {project.technologies.map((tech, i) => (
                <TechTag key={i}>{tech}</TechTag>
              ))}
            </TechStack>
            <ProjectLinks>
              <ProjectLink 
                href={project.deployedLink} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Live Demo <FaExternalLinkAlt />
              </ProjectLink>
              <ProjectLink 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                GitHub <FaGithub />
              </ProjectLink>
            </ProjectLinks>
            {project.credentials && (
              <Credentials>
                Demo Credentials: Username: {project.credentials.username}, Password: {project.credentials.password}
              </Credentials>
            )}
          </ProjectContent>


  */