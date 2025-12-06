import React from 'react';
import {
  HeroContainer,
  HeroContent,
  Tagline,
  HeroTitle,
  Highlight,
  HeroDescription,
  CTAButtonGroup,
  CTAButtonPrimary,
  CTAButtonSecondary
} from '../styles/HeroSection.styles';

const HeroSection: React.FC = () => {
  const appSubdomain = process.env.REACT_APP_APP_SUBDOMAIN || 'app.ecomformationtravelsavings.com';

  const handleLaunchApp = () => {
    // Temporarily disabled - demo site under construction
    // window.open(`https://${appSubdomain}`, '_blank');
  };

  const handleScheduleCall = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer>
      <HeroContent>
        <Tagline>Premium Travel Membership Benefits</Tagline>
        <HeroTitle>
          Discover the World
          <Highlight>With Unmatched Privileges</Highlight>
        </HeroTitle>
        <HeroDescription>
          Elevate your travel experiences with our exclusive membership program. Enjoy handpicked luxury 
          accommodations, priority flight services, personalized concierge support, and members-only perks 
          designed to make every journey unforgettable while maximizing your savings.
        </HeroDescription>
        <CTAButtonGroup>
          <CTAButtonPrimary onClick={handleLaunchApp}>
            Start Exploring →
          </CTAButtonPrimary>
          <CTAButtonSecondary onClick={handleScheduleCall}>
            Talk to sales
          </CTAButtonSecondary>
        </CTAButtonGroup>
      </HeroContent>
    </HeroContainer>
  );

};

export default HeroSection;
