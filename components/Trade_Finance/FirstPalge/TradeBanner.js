import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
// import Modifi from '../../Assets/Modifi.png'

const TradeFirstPage = () => {
    return (
        <>
            <Box id="TradeFirstPage" sx={{
                backgroundImage: `url(${'https://www.leremitt.com/Images/Pro%26ser-section/InwardBanner_bg.svg'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                py: { xs: 6, md: 16 },
            }}>
                <Container>
                    <Grid container>
                        <Grid item sm={6} lg={5}>
                            <Box paddingTop={7}>
                                <Typography variant="h1" fontSize={'2.25rem'} fontWeight={500} color={"white"} pb={2}>
                                    Get {" "}
                                    <span style={{ color: "#07bfde", fontWeight: 400 }}>
                                        Trade Finance
                                    </span>{" "}
                                    for your business
                                </Typography>
                                <Typography variant="body1" color={'white'} fontSize={'1.2rem'}>
                                    At LeRemitt, we understand how critical working capital is for our exporters. We have partnered with industry leaders to bring you post shipment financing for all your exports.
                                </Typography>
                            </Box>
                        </Grid>

                        {/* <Grid item sm={6} lg={7}>
                            <Stack direction={'row'} justifyContent={'end'} alignItems={'center'} height={'100%'} paddingTop={7}>
                                <Box>
                                    <Typography variant="h1" fontSize={'1.5rem'} fontWeight={500} color={"white"} pb={1}>In partnership with:</Typography>
                                    <Box component='img' src={Modifi} alt="Modifi" sx={{ width: 250, height: 'auto', background: '#daedf2', p: 1.5 }} />
                                </Box>
                            </Stack>
                        </Grid> */}
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default TradeFirstPage