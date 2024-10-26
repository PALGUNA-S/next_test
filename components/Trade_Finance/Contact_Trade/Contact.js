
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import axios from "axios";
import { Form, Formik } from 'formik';
import React, { useState } from "react";
import ReactGA from "react-ga4";
import * as Yup from "yup";
import { api_url } from "../../../config/config";

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState(false);
    const [loading, setLoading] = useState(false);

    ReactGA.initialize("G-VD04WS1MZE");

    const schema = Yup.object().shape({
        to_email: Yup.string()
            .email("Must be a valid Email")
            .required("Email is required"),
        last_name: Yup.string().required("Last Name is required"),
        phone: Yup.string()
            .required("Mobile number is required")
            .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits"),
        first_name: Yup.string().required("First Name is required"),
        description: Yup.string(),
    });

    const handleSubmitForm = async (values, { resetForm }) => {
        try {
            setLoading(true);
            // Track a custom event when the form is submitted
            ReactGA.event({
                category: "Form",
                action: "Submit",
                label: "Get in touch Form Submission",
            });
            const response = await axios({
                method: "POST",
                url: `${api_url}/send-feedback`,
                data: { ...values, from: sessionStorage.getItem("from"), product_code: 'P002' },
                headers: { Authorization: "Bearer " + sessionStorage.getItem("token") },
            });
            if (response) {
                setSuccessMessage(true);
                resetForm({
                    first_name: "",
                    last_name: "",
                    description: "",
                    phone: "",
                    to_email: "",
                });
                window.lintrk("track", { conversion_id: 15699724 });
                setTimeout(() => {
                    setSuccessMessage(false);
                }, 5000);
            } else {
                setSuccessMessage(false);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSuccessMessage(false);
        } finally {
            setLoading(false); // Stop loading after submission
        }
    };

    return (
        <Box id='ContactTrade' sx={{
            background: `url(${'https://www.leremitt.com/Images/Home_section-Svg/hom-media-blog_bg.svg'})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            objectFit: "cover",
            py: { xs: 6, md: 12 }
        }}>
            <Container>
                <Grid container spacing={2}>

                    <Grid item xs={12} md={6}>
                        <Box sx={{ background: '#FFF', p: 3 }}>
                            <Box mb={3}>
                                <Typography variant="body1" fontSize={'2.25rem'} fontWeight={500}>
                                    Get in <span style={{ color: "#00b8d4" }}>Touch</span>
                                </Typography>
                            </Box>

                            <Formik validationSchema={schema}
                                onSubmit={handleSubmitForm}
                                initialValues={{
                                    first_name: "",
                                    last_name: "",
                                    description: "",
                                    phone: "",
                                    to_email: "",
                                }}>
                                {({ handleSubmit, handleChange, values, touched, errors }) => (
                                    <Form noValidate onSubmit={handleSubmit}>
                                        <Grid container spacing={2}>
                                            {/* First Name and Last Name */}
                                            <Grid item xs={12} md={6}>
                                                <TextField name="first_name"
                                                    required
                                                    fullWidth
                                                    id="first_name"
                                                    label="First Name"
                                                    value={values.first_name}
                                                    onChange={handleChange}
                                                    error={touched.first_name && errors.first_name ? true : false}
                                                    helperText={errors.first_name}
                                                    InputProps={{
                                                        style: {
                                                            borderRadius: 0,
                                                            WebkitBorderRadius: 0,
                                                            MozBorderRadius: 0,
                                                        },
                                                    }} />
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <TextField required
                                                    fullWidth
                                                    id="last_name"
                                                    label="Last Name"
                                                    name="last_name"
                                                    autoComplete="family-name"
                                                    value={values.last_name}
                                                    onChange={handleChange}
                                                    error={touched.last_name && errors.last_name ? true : false}
                                                    helperText={errors.last_name}
                                                    InputProps={{
                                                        style: {
                                                            borderRadius: 0,
                                                            WebkitBorderRadius: 0,
                                                            MozBorderRadius: 0,
                                                        },
                                                    }} />
                                            </Grid>

                                            {/* Email and Phone */}
                                            <Grid item xs={12} md={6}>
                                                <TextField autoComplete="given-name"
                                                    name="to_email"
                                                    required
                                                    fullWidth
                                                    id="to_email"
                                                    label="Email Address"
                                                    value={values.to_email}
                                                    onChange={handleChange}
                                                    error={touched.to_email && errors?.to_email ? true : false}
                                                    helperText={errors.to_email}
                                                    InputProps={{
                                                        style: {
                                                            borderRadius: 0,
                                                            WebkitBorderRadius: 0,
                                                            MozBorderRadius: 0,
                                                        },
                                                    }} />
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <TextField required
                                                    fullWidth
                                                    id="phone"
                                                    label="Phone Number"
                                                    name="phone"
                                                    autoComplete="family-name"
                                                    value={values.phone}
                                                    onChange={handleChange}
                                                    error={touched.phone && errors?.phone ? true : false}
                                                    helperText={errors.phone}
                                                    InputProps={{
                                                        style: {
                                                            borderRadius: 0,
                                                            WebkitBorderRadius: 0,
                                                            MozBorderRadius: 0,
                                                        },
                                                    }} />
                                            </Grid>

                                            {/* Comment */}
                                            <Grid item xs={12}>
                                                <TextField id="description"
                                                    label="Add Your Comment"
                                                    multiline
                                                    rows={5}
                                                    style={{ width: "100%" }}
                                                    name="description"
                                                    value={values.description}
                                                    onChange={handleChange}
                                                    error={touched.description && errors?.description ? true : false}
                                                    helperText={errors.description}
                                                    InputProps={{
                                                        style: {
                                                            borderRadius: 0,
                                                            WebkitBorderRadius: 0,
                                                            MozBorderRadius: 0,
                                                        },
                                                    }} />
                                            </Grid>

                                            {/* Submit Button */}
                                            <Grid item xs={12}>
                                                <Stack pt={1} direction={{ xs: 'column', md: 'row' }} justifyContent={'space-between'}>
                                                    <a href="tel:+91 80500 87593" style={{ textDecoration: 'none' }}>
                                                        <Button
                                                            startIcon={<PhoneForwardedIcon />}
                                                            variant="contained"
                                                            sx={{
                                                                background: "#FFF",
                                                                color: "#142d82",
                                                                fontWeight: "500",
                                                                fontSize: "1.3rem",
                                                                paddingLeft: 0,
                                                                boxShadow: "none",
                                                                textTransform: "capitalize",
                                                                borderRadius: 0,
                                                                "&:hover": {
                                                                    backgroundColor: "#FFF",
                                                                    boxShadow: "none",
                                                                },
                                                            }}
                                                        >
                                                            Call Now: +91 80500 87593
                                                        </Button>
                                                    </a>

                                                    <Button
                                                        type="submit"
                                                        variant="contained"
                                                        disabled={loading}
                                                        sx={{
                                                            background: "#142d82",
                                                            color: "#fff",
                                                            fontWeight: "400",
                                                            fontSize: "1.3rem",
                                                            boxShadow: "none",
                                                            textTransform: "capitalize",
                                                            borderRadius: 0,
                                                            "&:hover": {
                                                                backgroundColor: "#2645af",
                                                                boxShadow: "none",
                                                            },
                                                        }}
                                                    >
                                                        {loading ? "loading" : "Submit"}
                                                    </Button>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    </Form>
                                )}
                            </Formik>

                            {/* Success Message */}
                            {successMessage && (
                                <Box>
                                    <Typography pt={2} variant="body1" textAlign={'center'} color={'#142d82'} fontWeight={500} fontSize={'1.3rem'}>
                                        Thank you for submitting your details, We will get back to you soon!
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Stack direction={'row'} height={'100%'} justifyContent={'center'} alignItems={'center'}>
                            <Box component="img" src={'https://www.leremitt.com/Images/about/illus_01.svg'}
                                sx={{
                                    width: '100%',
                                    animation: 'float 3s ease-in-out infinite',
                                    '@keyframes float': {
                                        '0%': { transform: 'translateY(0)' },
                                        '50%': { transform: 'translateY(-10px)' },
                                        '100%': { transform: 'translateY(0)' },
                                    },
                                }}
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Contact;
