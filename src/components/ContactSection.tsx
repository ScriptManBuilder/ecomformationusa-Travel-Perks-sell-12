import React, { useState } from 'react';
import {
  ContactContainer,
  ContactContent,
  ContactGrid,
  ContactForm,
  ContactInfo,
  ContactTitle,
  ContactDescription,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
  InfoCard,
  InfoTitle,
  InfoDescription,
  InfoLink
} from '../styles/ContactSection.styles';

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccess(true);
        form.reset();
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      title: 'Member-Only Pricing',
      description: 'Unlock extraordinary discounts on luxury accommodations that are exclusively available to our members, with rates significantly below public offerings.'
    },
    {
      title: 'Tailored Recommendations',
      description: 'Receive personalized destination suggestions and itinerary planning from experienced advisors who learn your travel style and preferences.'
    },
    {
      title: 'Immediate Benefits',
      description: 'Access your membership privileges the moment you join, with no waiting period to start enjoying exclusive rates and enhanced services.'
    }
  ];

  return (
    <ContactContainer id="contact">
      <ContactContent>
        <ContactTitle>Ready to Transform Your Travel?</ContactTitle>
        <ContactDescription>
          Connect with us to discover how membership unlocks exceptional travel opportunities and substantial savings.
        </ContactDescription>
        
        <ContactGrid>
          <ContactForm onSubmit={handleSubmit}>
            <h3>Get in Touch</h3>
            {showSuccess && (
              <div style={{ 
                padding: '1rem', 
                backgroundColor: '#10b981', 
                color: 'white', 
                borderRadius: '8px',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                ✓ Thank you! Your message has been received. We'll respond shortly.
              </div>
            )}
            <p>Complete the form to learn about our premium membership benefits.</p>
            
            {/* Hidden field with your Web3Forms access key */}
            <input type="hidden" name="access_key" value={process.env.REACT_APP_WEB3FORMS_KEY} />
            
            <FormGroup>
              <FormLabel>Full Name</FormLabel>
              <FormInput 
                type="text" 
                name="name"
                placeholder="Enter your name" 
                required 
                disabled={isSubmitting}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Email Address</FormLabel>
              <FormInput 
                type="email" 
                name="email"
                placeholder="you@example.com" 
                required 
                disabled={isSubmitting}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Your Message</FormLabel>
              <FormTextarea 
                name="message"
                placeholder="Share your travel interests and any questions you have..." 
                rows={5}
                required 
                disabled={isSubmitting}
              />
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
            </SubmitButton>
          </ContactForm>
          
          <ContactInfo>
            {features.map((feature, index) => (
              <InfoCard key={index}>
                <InfoTitle>{feature.title}</InfoTitle>
                <InfoDescription>{feature.description}</InfoDescription>
              </InfoCard>
            ))}
            
            <InfoCard style={{ marginTop: '2rem' }}>
              <InfoDescription>
                Contact us directly: <span style={{ fontWeight: 600, userSelect: 'none', pointerEvents: 'none' }}>{process.env.REACT_APP_EMAIL_SUPPORT}</span>
                <br />
                <br />
                Phone support: {' '}
                <InfoLink href={`tel:${process.env.REACT_APP_PHONE_NUMBER?.replace(/\s+/g, '')}`}>
                  {process.env.REACT_APP_PHONE_DISPLAY}
                </InfoLink>
              </InfoDescription>
            </InfoCard>
          </ContactInfo>
        </ContactGrid>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactSection;