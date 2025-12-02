import React from 'react';
import {
  StatsContainer,
  StatsContent,
  StatsSectionTitle,
  StatsSectionDescription,
  StatsGrid,
  StatCard,
  StatTitle,
  StatDescription,
  StatValue
} from '../styles/StatsSection.styles';

const StatsSection: React.FC = () => {
  const stats = [
    {
      title: 'Member Savings Per Year',
      description: 'Average annual value members receive through exclusive rates, upgrades, and premium benefits',
      value: '$4,150',
      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    },
    {
      title: 'Luxury Hotels Worldwide',
      description: 'Premium properties available exclusively to members across major destinations globally',
      value: '6,200+',
      background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
    },
    {
      title: 'Satisfaction Rate',
      description: 'Members consistently rate their booking experience and travel benefits as outstanding',
      value: '96%',
      background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)'
    },
    {
      title: 'Average Discount',
      description: 'Typical savings on luxury accommodations compared to standard booking rates',
      value: '65%',
      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    }
  ];

  return (
    <StatsContainer id="stats">
      <StatsContent>
        <StatsSectionTitle>Real Value, Real Results</StatsSectionTitle>
        <StatsSectionDescription>
          Discover how our membership program transforms the way you travel with exceptional perks and savings.
        </StatsSectionDescription>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index} $background={stat.background}>
              <StatTitle>{stat.title}</StatTitle>
              <StatDescription>{stat.description}</StatDescription>
              <StatValue>{stat.value}</StatValue>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsContent>
    </StatsContainer>
  );
};

export default StatsSection;
