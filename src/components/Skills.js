import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaDatabase, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import styled, { keyframes } from 'styled-components';

const skills = [
  { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'SQL', icon: FaDatabase, color: '#4479A1' },
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Express', icon: SiExpress, color: '#000000' },
];

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 3rem 1rem;
  background-color: #0a192f;
  overflow: hidden;
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

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * ${skills.length}));
  }
`;

const SkillsTrack = styled.div`
  display: flex;
  width: calc(250px * ${skills.length * 2});
  animation: ${scrollAnimation} 40s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const SkillCard = styled.div`
  flex: 0 0 auto;
  width: 200px;
  height: 200px;
  background-color: #112240;
  border-radius: 10px;
  margin-right: 50px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(100, 255, 218, 0.2);
  }
`;

const SkillIcon = styled.div`
  font-size: 4rem;
  color: ${props => props.color};
  margin-bottom: 1rem;
`;

const SkillName = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #ccd6f6;
  margin-bottom: 0.5rem;
`;

const Skills = () => {
  return (
    <Container>
      <Title>My Skills</Title>
      <SkillsTrack>
        {[...skills, ...skills].map((skill, index) => (
          <SkillCard key={index}>
            <SkillIcon color={skill.color}>{React.createElement(skill.icon)}</SkillIcon>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsTrack>
    </Container>
  );
};

export default Skills;





// import React from 'react';
// import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaDatabase, FaReact, FaNodeJs } from 'react-icons/fa';
// import { SiMongodb, SiExpress } from 'react-icons/si';
// import styled, { keyframes } from 'styled-components';

// const skills = [
//   { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
//   { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
//   { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
//   { name: 'Python', icon: FaPython, color: '#3776AB' },
//   { name: 'SQL', icon: FaDatabase, color: '#4479A1' },
//   { name: 'React', icon: FaReact, color: '#61DAFB' },
//   { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
//   { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
//   { name: 'Express', icon: SiExpress, color: '#000000' },
// ];

// const Container = styled.div`
//   max-width: 100%;
//   margin: 0 auto;
//   padding: 3rem 1rem;
//   background-color: transparent;
//   overflow: hidden;
// `;

// const Title = styled.h2`
//   font-size: 2.5rem;
//   font-weight: bold;
//   text-align: center;
//   color: #60a5fa;
//   margin-bottom: 3rem;
//   position: relative;

//   &::after {
//     content: '';
//     position: absolute;
//     bottom: -10px;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 50px;
//     height: 3px;
//     background-color: #60a5fa;
//   }
// `;

// const scrollAnimation = keyframes`
//   0% {
//     transform: translateX(0);
//   }
//   100% {
//     transform: translateX(calc(-250px * ${skills.length}));
//   }
// `;

// const SkillsTrack = styled.div`
//   display: flex;
//   width: calc(250px * ${skills.length * 2});
//   animation: ${scrollAnimation} 40s linear infinite;

//   &:hover {
//     animation-play-state: paused;
//   }
// `;

// const SkillCard = styled.div`
//   flex: 0 0 auto;
//   width: 200px;
//   height: 200px;
//   background-color: #1e293b;
//   border-radius: 1rem;
//   margin-right: 50px;
//   padding: 1.5rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-5px) scale(1.05);
//     box-shadow: 0 6px 12px rgba(96, 165, 250, 0.4);
//   }
// `;

// const SkillIcon = styled.div`
//   font-size: 4rem;
//   color: ${props => props.color};
//   margin-bottom: 1rem;
//   transition: all 0.3s ease;
// `;

// const SkillName = styled.h3`
//   font-size: 1.25rem;
//   font-weight: bold;
//   color: #f1f5f9;
//   margin-bottom: 0.5rem;
// `;

// const Skills = () => {
//   return (
//     <Container>
//       <Title>My Skills</Title>
//       <SkillsTrack>
//         {[...skills, ...skills].map((skill, index) => (
//           <SkillCard key={index}>
//             <SkillIcon color={skill.color}>{React.createElement(skill.icon)}</SkillIcon>
//             <SkillName>{skill.name}</SkillName>
//           </SkillCard>
//         ))}
//       </SkillsTrack>
//     </Container>
//   );
// };

// export default Skills;




// import React from 'react';
// import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaDatabase, FaReact, FaNodeJs } from 'react-icons/fa';
// import { SiMongodb, SiExpress } from 'react-icons/si';
// import styled, { keyframes } from 'styled-components';

// const skills = [
//   { name: 'HTML', icon: FaHtml5, color: '#E34F26' },
//   { name: 'CSS', icon: FaCss3Alt, color: '#1572B6' },
//   { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
//   { name: 'Python', icon: FaPython, color: '#3776AB' },
//   { name: 'SQL', icon: FaDatabase, color: '#4479A1' },
//   { name: 'React', icon: FaReact, color: '#61DAFB' },
//   { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
//   { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
//   { name: 'Express', icon: SiExpress, color: '#000000' },
// ];

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 3rem 1rem;
//   background-color: transparent;
// `;

// const Title = styled.h2`
//   font-size: 2.5rem;
//   font-weight: bold;
//   text-align: center;
//   color: #60a5fa;
//   margin-bottom: 3rem;
//   position: relative;

//   &::after {
//     content: '';
//     position: absolute;
//     bottom: -10px;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 50px;
//     height: 3px;
//     background-color: #60a5fa;
//   }
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
//   gap: 2rem;
// `;

// const pulse = keyframes`
//   0% {
//     transform: scale(1);
//   }
//   50% {
//     transform: scale(1.05);
//   }
//   100% {
//     transform: scale(1);
//   }
// `;

// const SkillCard = styled.div`
//   background-color: #1e293b;
//   border-radius: 1rem;
//   padding: 1.5rem;
//   text-align: center;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
//   }
// `;

// const SkillIcon = styled.div`
//   font-size: 3rem;
//   color: ${props => props.color};
//   margin-bottom: 1rem;
//   transition: all 0.3s ease;

//   ${SkillCard}:hover & {
//     animation: ${pulse} 0.5s ease-in-out;
//   }
// `;

// const SkillName = styled.h3`
//   font-size: 1.25rem;
//   font-weight: bold;
//   color: #f1f5f9;
//   margin-bottom: 0.5rem;
// `;

// const SkillDescription = styled.p`
//   font-size: 0.9rem;
//   color: #9ca3af;
//   line-height: 1.4;
// `;

// const Skills = () => (
//   <Container>
//     <Title>My Skills</Title>
//     <Grid>
//       {skills.map((skill, index) => (
//         <SkillCard key={index}>
//           <SkillIcon color={skill.color}>{React.createElement(skill.icon)}</SkillIcon>
//           <SkillName>{skill.name}</SkillName>
//         </SkillCard>
//       ))}
//     </Grid>
//   </Container>
// );

// export default Skills;