import React, { useState } from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
    {
        question: 'What are the eligibility criteria for the exporters and buyers (for import)?',
        answer: `The exporters (and buyers in case of importers) need to meet certain criteria to be eligible for Trade Financing:

        • The Seller Volume needs to be $10Mn of exports as recorded in the previous year
        • The buyer volume needs to be $25Mn of imports as recorded in the previous year
        • The Seller needs to have completed at least one trade with the said buyer`
    },
    {
        question: 'What countries you can export to?',
        answer: `Seller Countries:

        1. India
        2. Pakistan
        3. Bangladesh
        4. Singapore
        5. United Kingdom
        6. China
        7. Hong Kong
        8. USA
        9. UAE
        10. Germany
        11. Netherlands
        12. Canada
        13. EU
        14. Thailand
        15. Vietnam
        16. Spain
        17. Mexico

        Buyer Countries:

        1. USA
        2. UK
        3. Germany
        4. Netherlands
        5. Mexico
        6. Hong Kong
        7. China
        8. Peru
        9. Brazil
        10. India
        11. Australia
        12. OCED Countries
        13. Singapore
        14. Taiwan
        15. Uruguay
        16. Malaysia
        17. Qatar
        18. Vietnam
        19. Kuwait
        20. Saudi Arabia
        21. South Africa
        22. Costa Rica
        23. Thailand
        24. Colombia
        25. Austria
        26. Belgium
        27. Canada
        28. Chile
        29. Czech Republic
        30. Denmark
        31. Estonia
        32. Finland
        33. France
        34. Greece
        35. Hungary
        36. Iceland
        37. Ireland
        38. Israel
        39. Italy
        40. Japan
        41. Korea
        42. Latvia
        43. Lithuania
        44. Luxembourg
        45. the Netherlands
        46. New Zealand
        47. Norway
        48. Poland
        49. Portugal
        50. Slovak Republic
        51. Slovenia
        52. Spain
        53. Sweden
        54. Switzerland
        55. Turkey`
    },
    {
        question: 'What industry players cannot avail Trade Finance from LeRemitt?',
        answer: 'Gems & Jewellery and Petroleum sectors are negatively earmarked.'
    },
    {
        question: 'What are the documentation requirements?',
        answer: `China/Hongkong:

        • Latest Audited Financials for last 3 years
        • KYC details of Directors
        • Bank Details
        • Company Documents - Unified Social Credit Code, Association Documents, Business License, Shareholding Certificate

        Bangladesh (BD):

        • Vendors/Sellers last 2 years audited financials
        • Bank Details and last 6 months bank statements
        • Registration Number - Business Identification Number, Tax Identification Number
        • EKYC - Passport and National ID of the Directors
        • Certificate of Incorporation, MOA/AOA, Business License (Import Export License), Trade Register Extract, Share Holder List/Pattern, VAT Certificate (TAX), Board Resolution, RJSC List of Directors: Form XII, DCCI Certificate of Membership

        Singapore/UK:

        • Latest Audited Financials for last 3 years
        • KYC details of Directors
        • Company Documents - Certificate of Incorporation, Association Documents, Certificate of Registration, Trade Register Extract, Tax Number Certificate, Shareholding Certificate and organizational chart
        • Bank Details

        UAE:

        • Latest Audited Financials for last 3 years
        • KYC details of Directors
        • Company Documents - Association Documents, Business License, Certificate of Registration, Shareholding Certificate and organizational chart
        • Bank Details`
    },
    {
        question: 'What is the interest rate being charged by the Partner?',
        answer: '11%-14% (annualized). T&C Applied.'
    },
    {
        question: 'What if the buyer defaults?',
        answer: 'Since it’s a non-recourse product, the buyer’s line is being covered by an insurance company.'
    },
    {
        question: 'Will it reflect on exporters’ balance sheet?',
        answer: 'It’s an off-balance sheet solution.'
    }
];

const FAQ = () => {
    // Initialize the state with the first panel open by default
    const [expanded, setExpanded] = useState(['panel0']);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded((prevExpanded) =>
            isExpanded
                ? [...prevExpanded, panel]
                : prevExpanded.filter((item) => item !== panel)
        );
    };

    return (
        <Box id="faq" sx={{ background: '#e8f8fa', py: { xs: 6, md: 12 } }}>
            <Container>
                <Box pt={{ xs: 5, md: 0 }}>
                    <Typography variant="h1" fontSize={'2.25rem'} fontWeight={500} pb={{ xs: 2, md: 3 }}>
                        Frequently Asked <span style={{ color: "#00b8d4" }}>Questions</span>
                    </Typography>
                </Box>

                {faqs.map((faq, index) => (
                    <Accordion
                        key={index}
                        expanded={expanded.includes(`panel${index}`)}
                        onChange={handleChange(`panel${index}`)}
                        sx={{ marginBottom: 0.4, boxShadow: 'none', borderRadius: 0, border: 'none' }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            id={`panel${index}-header`}
                        >
                            <Typography
                                sx={{
                                    fontSize: "1.2rem",
                                    fontWeight: 500,
                                }}
                                variant="h2"
                            >
                                {faq.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ pt: 0 }}>
                            {faq.answer.split('\n').map((line, idx) => {
                                if (line.includes('The exporters (and buyers in case of importers) need to meet certain criteria to be eligible for Trade Financing:') ||
                                    line.includes('Seller Countries:') ||
                                    line.includes('Buyer Countries:') ||
                                    line.includes('China/Hongkong:') ||
                                    line.includes('Bangladesh (BD)') ||
                                    line.includes('Singapore/UK:') ||
                                    line.includes('UAE:')) {
                                    return (
                                        <Typography key={idx} variant="body1" sx={{ fontWeight: 'bold', pt: 1 }}>
                                            {line}
                                        </Typography>
                                    );
                                } else if (line.startsWith('• ')) {
                                    return (
                                        <Typography key={idx} component="li" variant="body1" sx={{ marginLeft: 2 }}>
                                            {line}
                                        </Typography>
                                    );
                                } else if (line.trim()) {
                                    return (
                                        <Typography key={idx} variant="body1" sx={{ marginTop: 1 }}>
                                            {line}
                                        </Typography>
                                    );
                                }
                                return null;
                            })}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Container>
        </Box>
    );
}

export default FAQ;
