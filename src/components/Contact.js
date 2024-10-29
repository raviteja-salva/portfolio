import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaTimesCircle, FaTimes } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  background-color: transparent;
  animation: ${fadeIn} 0.5s ease-out;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Heading = styled.h2`
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
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(100, 255, 218, 0.1);
  border-radius: 1rem;
  overflow: hidden;
  backdrop-filter: blur(10px);

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;

  @media (min-width: 769px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1.25rem;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #64ffda;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border-radius: 0.375rem;
  background-color: rgba(45, 55, 72, 0.5);
  color: #fff;
  border: 1px solid rgba(100, 255, 218, 0.2);
  outline: none;
  transition: all 0.3s ease;
  width: 100%;
  font-size: 1rem;

  &:focus {
    border-color: #64ffda;
    box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.1);
  }

  @media (max-width: 768px) {
    padding: 0.875rem;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border-radius: 0.375rem;
  background-color: rgba(45, 55, 72, 0.5);
  color: #fff;
  border: 1px solid rgba(100, 255, 218, 0.2);
  outline: none;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 150px;
  width: 100%;
  font-size: 1rem;

  &:focus {
    border-color: #64ffda;
    box-shadow: 0 0 0 2px rgba(100, 255, 218, 0.1);
  }

  @media (max-width: 768px) {
    min-height: 120px;
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  border-radius: 0.375rem;
  background-color: transparent;
  color: #64ffda;
  font-weight: bold;
  border: 1px solid #64ffda;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  width: 100%;
  max-width: 200px;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1rem;
    font-size: 1rem;
  }
`;

const InfoSection = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: rgba(45, 55, 72, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 769px) {
    width: 40%;
    border-left: 1px solid rgba(100, 255, 218, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-top: 1px solid rgba(100, 255, 218, 0.1);
  }
`;

const InfoHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #64ffda;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 1.25rem;
  }
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1.25rem;
  }
`;

const InfoItem = styled.p`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #d1d5db;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }

  svg {
    margin-right: 1rem;
    font-size: 1.25rem;
    color: #64ffda;
    flex-shrink: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
    word-break: break-word;

    &:hover {
      color: #64ffda;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.9375rem;
    
    svg {
      font-size: 1.125rem;
      margin-right: 0.75rem;
    }
  }
`;

const Notification = styled.div`
  position: fixed;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  animation: ${slideIn} 0.3s ease-out;
  backdrop-filter: blur(10px);
  background-color: ${props => props.isError ? 'rgba(239, 68, 68, 0.9)' : 'rgba(16, 185, 129, 0.9)'};
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 769px) {
    top: 2rem;
    right: 2rem;
    max-width: 400px;
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    padding: 1rem;
    font-size: 0.9375rem;
  }

  svg {
    font-size: 1.25rem;
    flex-shrink: 0;

    @media (max-width: 768px) {
      font-size: 1.125rem;
    }
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.25rem;
  margin-left: auto;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  flex-shrink: 0;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

// Rest of the component logic remains the same
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_4fd9yew',
        'template_zo5007m',
        formData,
        'i_VAT92XiCq3mvSJi'
      );
      setStatus('Message sent successfully!');
      setIsError(false);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
      setIsError(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(''), 5000);
    }
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
              placeholder="Your message here..."
            />
          </InputGroup>
          <Button type="submit" disabled={isSubmitting}>
            <FaPaperPlane /> {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
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
      {status && (
        <Notification isError={isError}>
          {isError ? <FaTimesCircle /> : <FaCheckCircle />}
          {status}
          <CloseButton onClick={() => setStatus('')}>
            <FaTimes />
          </CloseButton>
        </Notification>
      )}
    </Container>
  );
};

export default Contact;


