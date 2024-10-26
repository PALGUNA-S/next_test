import ClearIcon from '@mui/icons-material/Clear';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import { Box, Button, Card, Dialog, InputAdornment, Stack, TextField, Typography, styled } from '@mui/material';
import { Form, Formik } from 'formik';
import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { api_url } from '../../../config/config';
import ReactGA from 'react-ga4';
import axios from 'axios';

const CustomTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        borderRadius: '0',
        backgroundColor: '#ffffff',
        '& fieldset': {
            borderColor: '#142d82',
        },
        '&:hover fieldset': {
            borderColor: '#142d82',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#142d82',
        },
        '& input': {
            color: '#142d82',
            fontWeight: 500,
        },
    },
    '& .MuiInputLabel-root': {
        color: 'gray',
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#074B65',
    },
    '& .MuiFormHelperText-root': {
        marginLeft: 0, // Remove left margin
        color: 'red', // Optional: Customize error text color
    },
}));

const style = {
    position: 'relative',
    width: { xs: 300, md: 500 },
    p: 2,
    boxShadow: 'none',
    backgroundImage: `url(${'https://www.leremitt.com/Images/new/background.jpg'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: 0,
};

const schema = Yup.object().shape({
    to_email: Yup.string()
        .email("Must be a valid Email")
        .required("Email is required"),
});

const Popup = ({ blogId }) => {
    const [open, setOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const popupClosed = sessionStorage.getItem(`popupClosed`);
        if (!popupClosed) {
            const timer = setTimeout(() => {
                setOpen(true);
            }, 9000);
            return () => clearTimeout(timer);
        }
    }, [blogId]);

    const handleClose = () => {
        setOpen(false);
        sessionStorage.setItem(`popupClosed`, 'true');
    };

    const handleSubmitForm = async (values, { resetForm }) => {
        setLoading(true);
        try {
            ReactGA.event({
                category: "Form",
                action: "Submit",
                label: "Get in touch Form Submission",
            });

            const response = await axios.post(`${api_url}/send-feedback`, {
                ...values, product_code: 'P003',
                from: sessionStorage.getItem("from")
            }, {
                headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
            });

            if (response) {
                setSubmitted(true); // Always set submitted to true on successful submission
                resetForm({ to_email: "" });
                window.lintrk("track", { conversion_id: 15699724 });
            } else {
                console.error("Response not successful");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setLoading(false); // Set loading to false when form submission completes
        }
    };


    return (
        <div>
            <Dialog
                open={open}
                onClose={null}
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
                PaperProps={{
                    sx: {
                        borderRadius: 0,
                        boxShadow: 'none'
                    },
                }}
            >
                <Card sx={style}>
                    <Stack direction={'row'} justifyContent={'flex-end'}>
                        <Box>
                            <ClearIcon onClick={handleClose} sx={{ cursor: 'pointer', color: '#142d82', fontSize: '2rem', }} />
                        </Box>
                    </Stack>

                    <Stack sx={{ p: { xs: 0.5, md: 5 }, pt: 2 }}>
                        {submitted ? (
                            // Show thank you message
                            <Typography my={4.8} id="dialog-title" variant="h4" component="h2" textAlign={'center'} fontWeight={500}>
                                Thank You for Subscribing to our Newsletter!
                            </Typography>
                        ) : (
                            <>
                                <Typography id="dialog-title" mb={1} variant="h4" component="h2" textAlign={'center'} fontWeight={500}>
                                    Subscribe to our Newsletter
                                </Typography>
                                <Typography id="dialog-description" variant='body1' fontSize={'1.2rem'} textAlign={'center'}>
                                    Subscribe and stay updated on what's happening latest in Finance & International Trade
                                </Typography>

                                <Formik
                                    initialValues={{ to_email: '' }}
                                    validationSchema={schema}
                                    onSubmit={handleSubmitForm}
                                >
                                    {({ values, handleChange, handleBlur, touched, errors }) => (
                                        <Form>
                                            <Stack direction={{ xs: 'column', md: 'row' }} alignItems={'center'} justifyContent={'center'} sx={{ width: '100%' }} spacing={1} mt={2}>
                                                <CustomTextField
                                                    variant="outlined"
                                                    placeholder="Your Email"
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <ForwardToInboxIcon sx={{ color: '#00e5', fontWeight: 900, fontSize: '1.5rem' }} />
                                                            </InputAdornment>
                                                        ),
                                                    }}
                                                    name="to_email"
                                                    value={values.to_email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={touched.to_email && Boolean(errors.to_email)}
                                                    helperText={touched.to_email && errors.to_email}
                                                    sx={{
                                                        width: { xs: '100%', md: '70%' }, height: '40px',
                                                        '& input': {
                                                            height: '8px',
                                                        },
                                                    }}
                                                />

                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    sx={{
                                                        background: '#142d82',
                                                        boxShadow: 'none',
                                                        borderRadius: '0',
                                                        textTransform: 'capitalize',
                                                        fontSize: '1rem',
                                                        height: '40px',
                                                        '&:hover': { background: '#2645af', boxShadow: 'none', },
                                                        width: { xs: '100%', md: '30%' }
                                                    }}
                                                    disabled={loading}
                                                >
                                                    {loading ? 'Loading...' : 'Subscribe'}
                                                </Button>
                                            </Stack>
                                        </Form>
                                    )}
                                </Formik>
                            </>
                        )}

                    </Stack>
                </Card>
            </Dialog>
        </div>
    );
};

export default Popup;



