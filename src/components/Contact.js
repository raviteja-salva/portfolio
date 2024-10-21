import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
  background-color: transparent;
  animation: ${fadeIn} 0.5s ease-out;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
  text-align: center;
  color: #60a5fa;
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

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: #1e293b;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #d1d5db;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border-radius: 0.375rem;
  background-color: #2d3748;
  color: #fff;
  border: 1px solid #4b5563;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border-radius: 0.375rem;
  background-color: #2d3748;
  color: #fff;
  border: 1px solid #4b5563;
  outline: none;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 120px;

  &:focus {
    border-color: #60a5fa;
    box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.2);
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  border-radius: 0.375rem;
  background-color: #60a5fa;
  color: #fff;
  font-weight: bold;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: #3b82f6;
    transform: translateY(-2px);
  }
`;

const InfoSection = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: #2d3748;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    width: 40%;
  }
`;

const InfoHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #60a5fa;
  margin-bottom: 1.5rem;
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoItem = styled.p`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #d1d5db;

  svg {
    margin-right: 1rem;
    font-size: 1.25rem;
    color: #60a5fa;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #60a5fa;
    }
  }
`;

const StatusMessage = styled.p`
  margin-top: 1rem;
  text-align: center;
  color: ${props => props.isError ? '#ef4444' : '#10b981'};
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setIsError(false);

    emailjs.send(
      'service_4fd9yew', 
      'template_zo5007m',
      formData,
      'i_VAT92XiCq3mvSJi'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setIsError(false);
      }, (error) => {
        console.log('FAILED...', error);
        setStatus('Failed to send message. Please try again.');
        setIsError(true);
      });
  };

  return (
    <Container>
      <Heading>Contact Me</Heading>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Your message here..."
            ></TextArea>
          </InputGroup>
          <Button type="submit">
            <FaPaperPlane /> Send Message
          </Button>
          {status && <StatusMessage isError={isError}>{status}</StatusMessage>}
        </Form>
        <InfoSection>
          <InfoHeading>Get in Touch</InfoHeading>
          <InfoList>
            <InfoItem>
              <FaEnvelope />
              <a href="mailto:ravitejasalva@gmail.com">ravitejasalva@gmail.com</a>
            </InfoItem>
            <InfoItem>
              <FaPhone />
              <a href="tel:+919381598559">+919381598559</a>
            </InfoItem>
            <InfoItem>
              <FaLinkedin />
              <a href="https://www.linkedin.com/in/kasi-raviteja-salva-8a1464272/" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </InfoItem>
            <InfoItem>
              <FaGithub />
              <a href="https://github.com/raviteja-salva" target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
            </InfoItem>
          </InfoList>
        </InfoSection>
      </FormContainer>
    </Container>
  );
};

export default Contact;





// import React, { useState } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 3rem 1rem;
//   background-color: transparent;
//   animation: ${fadeIn} 0.5s ease-out;
// `;

// const Heading = styled.h2`
//   font-size: 2.5rem;
//   font-weight: bold;
//   margin-bottom: 3rem;
//   text-align: center;
//   color: #60a5fa;
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

// const FormContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
//   background-color: #1e293b;
//   border-radius: 1rem;
//   overflow: hidden;
//   box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);

//   @media (min-width: 768px) {
//     flex-direction: row;
//   }
// `;

// const Form = styled.form`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
//   padding: 2rem;

//   @media (min-width: 768px) {
//     width: 60%;
//   }
// `;

// const InputGroup = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const Label = styled.label`
//   font-size: 0.875rem;
//   font-weight: 500;
//   color: #d1d5db;
//   margin-bottom: 0.5rem;
// `;

// const Input = styled.input`
//   padding: 0.75rem;
//   border-radius: 0.375rem;
//   background-color: #2d3748;
//   color: #fff;
//   border: 1px solid #4b5563;
//   outline: none;
//   transition: all 0.3s ease;

//   &:focus {
//     border-color: #60a5fa;
//     box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.2);
//   }
// `;

// const TextArea = styled.textarea`
//   padding: 0.75rem;
//   border-radius: 0.375rem;
//   background-color: #2d3748;
//   color: #fff;
//   border: 1px solid #4b5563;
//   outline: none;
//   transition: all 0.3s ease;
//   resize: vertical;
//   min-height: 120px;

//   &:focus {
//     border-color: #60a5fa;
//     box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.2);
//   }
// `;

// const Button = styled.button`
//   padding: 0.75rem;
//   border-radius: 0.375rem;
//   background-color: #60a5fa;
//   color: #fff;
//   font-weight: bold;
//   transition: all 0.3s ease;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.5rem;

//   &:hover {
//     background-color: #3b82f6;
//     transform: translateY(-2px);
//   }
// `;

// const InfoSection = styled.div`
//   width: 100%;
//   padding: 2rem;
//   background-color: #2d3748;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   @media (min-width: 768px) {
//     width: 40%;
//   }
// `;

// const InfoHeading = styled.h3`
//   font-size: 1.5rem;
//   font-weight: bold;
//   color: #60a5fa;
//   margin-bottom: 1.5rem;
// `;

// const InfoList = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 1.5rem;
// `;

// const InfoItem = styled.p`
//   display: flex;
//   align-items: center;
//   font-size: 1rem;
//   color: #d1d5db;

//   svg {
//     margin-right: 1rem;
//     font-size: 1.25rem;
//     color: #60a5fa;
//   }

//   a {
//     color: inherit;
//     text-decoration: none;
//     transition: color 0.3s ease;

//     &:hover {
//       color: #60a5fa;
//     }
//   }
// `;

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <Container>
//       <Heading>Contact Me</Heading>
//       <FormContainer>
//         <Form onSubmit={handleSubmit}>
//           <InputGroup>
//             <Label htmlFor="name">Name</Label>
//             <Input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               placeholder="Your Name"
//             />
//           </InputGroup>
//           <InputGroup>
//             <Label htmlFor="email">Email</Label>
//             <Input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder="your.email@example.com"
//             />
//           </InputGroup>
//           <InputGroup>
//             <Label htmlFor="message">Message</Label>
//             <TextArea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               rows="5"
//               placeholder="Your message here..."
//             ></TextArea>
//           </InputGroup>
//           <Button type="submit">
//             <FaPaperPlane /> Send Message
//           </Button>
//         </Form>
//         <InfoSection>
//           <InfoHeading>Get in Touch</InfoHeading>
//           <InfoList>
//             <InfoItem>
//               <FaEnvelope />
//               <a href="mailto:ravitejasalva@gmail.com">ravitejasalva@gmail.com</a>
//             </InfoItem>
//             <InfoItem>
//               <FaPhone />
//               <a href="tel:+919381598559">+919381598559</a>
//             </InfoItem>
//             <InfoItem>
//               <FaLinkedin />
//               <a href="https://www.linkedin.com/in/kasi-raviteja-salva-8a1464272/" target="_blank" rel="noopener noreferrer">
//                 LinkedIn Profile
//               </a>
//             </InfoItem>
//             <InfoItem>
//               <FaGithub />
//               <a href="https://github.com/raviteja-salva" target="_blank" rel="noopener noreferrer">
//                 GitHub Profile
//               </a>
//             </InfoItem>
//           </InfoList>
//         </InfoSection>
//       </FormContainer>
//     </Container>
//   );
// };

// export default Contact;
