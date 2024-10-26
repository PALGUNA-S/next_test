import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

const PostShipmentFinance = [
    {
        id: 1,
        title: '80% of Invoice Paid Upfront',
        text: 'When a seller completes a shipment, LeRemitt steps in to provide immediate financial support by paying 80% or more of the invoice amount to the seller within just 48 hours. This rapid payment process is part of LeRemitt\'s innovative trade finance solution, designed to enhance the seller\'s cash flow and reduce the financial strain often associated with waiting for payment from buyers.',
        icon: 'https://www.leremitt.com/Images/new/bill.png'
    },
    {
        id: 2,
        title: '120-day Credit Period for Buyers',
        text: 'LeRemitt\'s trade finance solution offers a strategic advantage by providing a 120-day credit period for buyers, while ensuring immediate liquidity for sellers. This approach fosters a balanced and flexible financial environment, benefiting both parties involved in the transaction.',
        icon: 'https://www.leremitt.com/Images/new/credit-card.png'
    },
    {
        id: 3,
        title: 'Ease of Access to Working Capital',
        text: 'One of the key benefits that sellers gain from trade finance with LeRemitt is the ease of access to working capital. This advantage plays a crucial role in helping businesses maintain smooth operations, seize growth opportunities, and manage their financial health more effectively.',
        icon: 'https://www.leremitt.com/Images/new/ease.png'
    },
    {
        id: 4,
        title: 'Buyer Default Protection',
        text: 'Buyer Default Protection is a crucial feature of LeRemitt\'s trade finance solution, offering sellers a safeguard against the financial risk of non-payment by buyers. This protection ensures that sellers can trade with confidence, knowing that they are shielded from potential losses due to buyer defaults.',
        icon: 'https://www.leremitt.com/Images/new/encrypted.png'
    },
]

const ShipmentFinance = () => {
    // Initialize with the ID of the first item
    const [selectedId, setSelectedId] = useState(PostShipmentFinance[0].id)

    const handleTitleClick = (id) => {
        setSelectedId(id)
    }

    const selectedContent = PostShipmentFinance.find(item => item.id === selectedId)?.text

    return (
        <Box id='ShipmentFinance'
            sx={{
                backgroundImage: `url(${'https://www.leremitt.com/Images/about/coreTbg.svg'})`, backgroundSize: 'cover',
                backgroundPosition: 'center', py: { xs: 6, md: 12 }
            }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} mb={{ xs: 2, md: 4 }}>
                        <Box>
                            <Typography variant="h2" fontSize={'1.2rem'} pb={1} fontWeight={600}>What do you get?</Typography>
                            <Typography variant="h3" fontSize={'2.2rem'} pb={{ xs: 2, lg: 0 }} sx={{ fontWeight: "500", color: "#2645af" }}>Post Shipment Finance</Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box>
                            {PostShipmentFinance.map((item) => (
                                <Box key={item.id} sx={{ mb: 2, }} onClick={() => handleTitleClick(item.id)}>
                                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                                        <img src={item.icon} alt={item.title} style={{ width: 32, height: 32, }} />
                                        <Typography variant="body1" sx={{
                                            fontSize: "15px", cursor: 'pointer', color: selectedId === item.id ? "#2645af" : "black",
                                            fontWeight: selectedId === item.id ? "600" : "500",
                                            transition: "opacity 0.7s ease-in-out, transform 0.5s ease-in-out",
                                        }}>
                                            {item.title}
                                        </Typography>
                                    </Stack>
                                </Box>
                            ))}
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            transition: "opacity 0.5s ease-in-out",
                        }}>
                            <Typography variant="body1" sx={{ fontSize: "15px", fontWeight: "400", lineHeight: "2" }}>{selectedContent}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default ShipmentFinance

