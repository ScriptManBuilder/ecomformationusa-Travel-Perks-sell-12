import React, { useState } from 'react';
import {
  FAQContainer,
  FAQContent,
  FAQTitle,
  FAQDescription,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FAQIcon
} from '../styles/FAQSection.styles';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What benefits do members receive?',
      answer: 'Members gain access to handpicked luxury properties with rates up to 65% below standard prices, automatic room upgrades when available, priority flight services, valuable property credits for amenities, dedicated travel advisors, and flexible booking policies with minimal cancellation fees.'
    },
    {
      question: 'How quickly can I access my membership benefits?',
      answer: 'Your membership activates immediately upon enrollment. You can log into your account portal, browse available properties, and start booking at exclusive member rates right away. All perks and privileges are accessible from day one.'
    },
    {
      question: 'Are there travel dates when I cannot use my membership?',
      answer: 'The majority of our partner properties maintain availability year-round with very few restrictions. While some high-demand periods may have limited availability, our real-time booking system shows current inventory and pricing with complete transparency—no surprises.'
    },
    {
      question: 'Can others benefit from my membership?',
      answer: 'Absolutely! Your membership extends to family and friends when you make reservations on their behalf. Benefits like our travel advisory service, exclusive rates, and booking privileges apply to everyone in your travel party on bookings you arrange.'
    },
    {
      question: 'Which locations and properties are included?',
      answer: 'Our network includes 6,200+ premium properties spanning North America, Europe, Asia, the Caribbean, South Pacific, and beyond. Choose from coastal resorts, mountain lodges, city hotels, boutique properties, and exclusive vacation rentals worldwide.'
    },
    {
      question: 'What kind of savings should I expect?',
      answer: 'Based on member data, typical annual savings range from $2,500-$6,000 depending on travel frequency. Individual luxury stays often save $600-$1,200, while international flight upgrades provide $900+ in value per trip. Most members recover their membership investment within 1-2 bookings.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer id="faq">
      <FAQContent>
        <FAQTitle>Common Questions Answered</FAQTitle>
        <FAQDescription>
          Learn more about our premium travel membership and how it works
        </FAQDescription>
        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem key={index} $isOpen={openIndex === index}>
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                {faq.question}
                <FAQIcon $isOpen={openIndex === index}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </FAQIcon>
              </FAQQuestion>
              <FAQAnswer $isOpen={openIndex === index}>
                {faq.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </FAQContent>
    </FAQContainer>
  );
};

export default FAQSection;
