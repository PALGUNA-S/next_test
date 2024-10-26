import { Box, Container, Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from "react";

const AskQue = () => {
  const accordionContent = [
    {
      id: 1,
      question: "1. What is LeRemitt Platform?",
      answer: "LeRemitt is a cutting-edge B2B cross-border platform designed to facilitate international trade seamlessly. Our inaugural product “Receive Money” can collect money from US, UK, Europe and Canada in USD, CAD, GBP and EUR. LeRemitt also offer FCY account in said currencies to facilitate the local transfers.",
    },
    {
      id: 2,
      question: "2. How does LeRemitt work?",
      answer: "LeRemitt simplifies cross-border transactions. Users will register on the platform through our user-friendly interface to start receiving money from US, UK, Europe, and Canada. Our platform acts as an intermediary, ensuring secure and efficient exchanges between you and your customer to ensure hassle free remittance.",
    },
    {
      id: 3,
      question: "3. Is LeRemitt platform regulated entity?",
      answer: "LeRemitt operates in accordance with the guidelines set by the Reserve Bank of India (RBI) under the OPGSP framework. Our platform collaborates with trusted banking partners and is consistently subject to compliance checks and audits as per the OPGSP guidelines. Furthermore, LeRemitt takes great care to ensure that all its partners are duly authorized and licensed within their respective domains. This commitment ensures that we provide our users with the utmost reliability and trustworthiness in both our products and services.",
    },
    {
      id: 4,
      question: "4. What countries does LeRemitt serve?",
      answer: "Currently, LeRemitt serves Indian customers to receive funds from US, CAD, Europe and UK. However, we are continually expanding our reach to include more countries, striving to provide global access to our services.",
    },
    {
      id: 5,
      question: "5. How do I create an account on LeRemitt?",
      answer: "Creating an account on LeRemitt is a straightforward process. Just visit our website and follow the registration prompts. We'll ask for some basic information and email verification to get you started.",
    },
    {
      id: 6,
      question: "6. How are transactions conducted on LeRemitt?",
      answer: "LeRemitt has integrated with leading banking and collections partners globally to provide our customer seamless transaction experience. Once the user is registered on the platform and completes the KYC, the platform instantly provides FCY account in your preferred currencies. The user can collect funds from designated countries at low cost for both remitter and beneficiary.",
    },
    {
      id: 7,
      question: "7. Are there fees associated with using LeRemitt?",
      answer: "LeRemitt maintains transparency on transaction fees, assuring users that all applicable charges will be clearly communicated, promoting trust and clarity in financial transactions on the platform.",
    },
    {
      id: 8,
      question: "8. How does LeRemitt handle currency conversion for international transactions?",
      answer: "For international transactions, LeRemitt provides mid-market rates in desired currency pair. Our platform displays prices and performs real-time conversions based on prevailing exchange rates, making it easy for users to understand the prevailing rates in the market.",
    },
    {
      id: 9,
      question: "9. What is the dispute resolution process on LeRemitt?",
      answer: "LeRemitt takes multiple checks to ensure that your payments have safely arrived in your account. In case of a dispute, LeRemitt offers a structured dispute resolution process. Users can initiate a dispute, and our team will intermediate to resolve the dispute ASAP.",
    },
    {
      id: 10,
      question: "10. How do I contact customer support for assistance?",
      answer: "If you have questions or need assistance, our dedicated customer support team is here to help. You can reach us through LeConnect@leremitt.com, and we'll promptly assist you with any issues or inquiries. You can contact us at +918050087593, Leconnect@leremitt.com.",
    },
    {
      id: 11,
      question: "11. Is my personal information kept private on LeRemitt?",
      answer: "We prioritize your privacy, treating your data with utmost care. Be confident that your information remains confidential and is handled in full compliance with our Privacy Policy. Your trust is well-placed; your data is secure with us.",
    },
    {
      id: 12,
      question: "12. What should I do if I suspect fraudulent activity on LeRemitt?",
      answer: "If you suspect any fraudulent activity on our platform, please report it to us immediately at fraud@leremitt.com. We investigate all reported incidents to ensure the security of our users and the integrity of our platform.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleChange = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  return (
    <section id="faqs" style={{backgroundColor:'#e8f8fa'}}>
      <Container>
        <Box pt={{ xs: 5, md: 0 }}>
          <Typography variant="h1" fontSize={'2.25rem'} fontWeight={500} pb={{ xs: 2, md: 3 }}>
            Frequently Asked <span style={{ color: "#00b8d4" }}>Questions</span>
          </Typography>
        </Box>

        <Grid container>
          {accordionContent.map((item, index) => (
            <Grid item xs={12} key={item.id}>
              <Accordion 
                expanded={expandedIndex === index}
                onChange={() => handleChange(index)}
                sx={{ borderRadius: 0, boxShadow: 'none', mt: 0.5 }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index + 1}a-content`}
                  id={`panel${index + 1}a-header`}
                >
                  <Typography variant="h2" fontWeight={500} fontSize={'1.2rem'} sx={{'&:hover': { color: '#142d82' }, transition: 'color 0.3s' }}>{item.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1">{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default AskQue;
