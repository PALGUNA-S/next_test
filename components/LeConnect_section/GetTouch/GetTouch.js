import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { Form, Formik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import ReactGA from "react-ga4";
import * as Yup from "yup";
import { api_url } from "../../../config/config";
import OrganizationSchema from "../../Reusable_Components/OrganizationSchema/OrganizationSchema";
import styles from './GetTouch.module.css';

const contactData = [
  { id: 1, title: "Email Address", spantitle: "connect@leremitt.com", spantitleafter: "Le", link: "mailto:support@leremitt.com", },
  { id: 2, title: "Phone Number", spantitle: "8050087593", spantitleafter: "+91", },
  { id: 3, title: "Business Hours", spantitle: " Support:", spantitleafter: "Customer ", textone: "Mon-Fri 10:00 AM to 7:00 PM,", },
];


const GetTouch = () => {
  const [successmessage, setsuccessmessage] = useState(false);
  const [loading, setLoading] = useState(false);

  ReactGA.initialize("G-VD04WS1MZE");

  const schema = Yup.object().shape({
    to_email: Yup.string()
      .email("Must be a valid Email")
      .required("Email is required"),
    last_name: Yup.string().required("Last Name is required"),
    phone: Yup.string().required("Mobile number is required"),
    first_name: Yup.string().required("First Name is required"),
    description: Yup.string().required("Comment is required"),
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
        data: { ...values, from: sessionStorage.getItem("from") },
        headers: { Authorization: "Barer " + sessionStorage.getItem("token") },
      });
      if (response) {
        setsuccessmessage(true);
        resetForm({
          first_name: "",
          last_name: "",
          description: "",
          phone: "",
          to_email: "",
        });
        window.lintrk("track", { conversion_id: 15699724 });
      } else {
        setsuccessmessage(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setsuccessmessage(false);
    } finally {
      setLoading(false); // Stop loading after submission
    }
  };

  return (
    <>
      <OrganizationSchema />
      <section id="GetTouch" className={styles.GetTouch}>
        <Container sx={{pt:{xs:0,md:4,lg:8}}}>
        <Grid container spacing={4}>
          <Grid pr={2} item xs={12} md={6}>
            <Box pb={4}>
              <Typography pb={1} variant="h1" fontSize={'2.5rem'} fontWeight={500} color={"#142d82"} >
                Le<span style={{ color: "#00b8d4" }}>Connect</span>{" "}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "14px", fontWeight: "400" }}>
                Feel free to let us know if you have any further questions or if there's anything else we can assist you with.
              </Typography>
            </Box>

            <Box pb={4}>
              <Typography pb={1} variant="body1" fontSize={'1.5rem'} fontWeight={500} color={"#142d82"} >
                Address
              </Typography>
              <Typography
                component={Link}
                href="https://www.google.com/maps/search/?api=1&query=LeRemitt,+3rd+floor,+Obeya+nest,+1126,+18th+Cross+Rd,+Sector+7,+HSR+Layout,+Bengaluru,+Karnataka+560102"
                target="_blank"
                rel="noopener noreferrer"
                variant="body1"
                sx={{ fontSize: "14px", fontWeight: "400" }}
              >
                <span style={{ color: "#142d82" }}>Le</span>
                <span style={{ color: "#00b8d4" }}>Remitt,</span> 3rd floor,
                Obeya nest, 1126, 18th Cross Rd, beside Indian Overseas Bank,
                Sector 7, HSR Layout, Bengaluru, Karnataka 560102
              </Typography>
            </Box>

            <Grid container>
              {contactData.map((item) => (
                <Grid item xs={12} sm={6} key={item.id}>
                  <Box sx={{ height: "100%" }} pb={2}>
                    <Typography pb={1} variant="body1" fontSize={'1.5rem'} fontWeight={500} color={"#142d82"} >
                      {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#00b8d4", fontWeight: "500" }}  >
                      {item.subtitle}
                    </Typography>
                    <Typography
                      variant="body1"
                      component={Link}
                      href={item.link || "#"}
                      sx={{ fontSize: "14px", fontWeight: "400", paddingTop: "5px", }}>
                      <span style={{ color: "#142d82" }}>
                        {item.spantitleafter}
                      </span>
                      <span style={{ color: "#00b8d4" }}>{item.spantitle}</span>
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ fontSize: "14px", fontWeight: "400", paddingTop: "5px", }} >
                      {item.textone}
                    </Typography>
                    <Typography variant="body1"
                      sx={{ fontSize: "14px", fontWeight: "400", paddingTop: "5px", }} >
                      {item.texttwo}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} sx={{ background: "white", ml: { md: 0, xs: "25px" } }} >
            <img src={'/Assets/Reusable_section/Arrow_One.svg'} alt="arrow" className={styles.arrow1} />
            <img src={'/Assets/Reusable_section/Arrow_Two.svg'} alt="arrow" className={styles.arrow2} />
            <Box pt={{ md: 4 }} pr={4}>
              <Box>
                <Typography variant="body1" fontSize={'2.25rem'} fontWeight={500}>
                  Get in <span style={{ color: "#00b8d4" }}>Touch</span>
                </Typography>
              </Box>
              <Formik
                validationSchema={schema}
                onSubmit={handleSubmitForm}
                initialValues={{ first_name: "", last_name: "", description: "", phone: "", to_email: "", }}         >
                {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors, }) => (
                  <Form id="GetInTouchForm" noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={4} pt={4}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          name="first_name"
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
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField required fullWidth id="last_name" label="Last Name" name="last_name" autoComplete="family-name" value={values.last_name}
                          onChange={handleChange}
                          error={touched.last_name && errors.last_name ? true : false}
                          helperText={errors.last_name}
                          InputProps={{
                            style: {
                              borderRadius: 0,
                              WebkitBorderRadius: 0,
                              MozBorderRadius: 0,
                            },
                          }}
                        />
                      </Grid>
                    </Grid>

                    <Grid container spacing={4} pt={4}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="given-name"
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
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
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
                          }}
                        />
                      </Grid>
                    </Grid>

                    <Grid container pt={4}>
                      <Grid item xs={12}>
                        <TextField
                          id="description"
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
                          }}
                        />
                      </Grid>
                    </Grid>

                    <Box pt={{ xs: 2, lg: 4 }} pb={2} sx={{ float: "right" }}>
                      <Button
                        type="submit"
                        variant="contained"
                        disabled={loading}
                        sx={{
                          background: "#142d82",
                          color: "#fff",
                          fontWeight: "400",
                          padding: "6px 22px",
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
                    </Box>
                  </Form>
                )}
              </Formik>
              <Box pt={2}>
                <Typography variant="body1">
                  {successmessage ? "Thank you for submitting your details, We will get back to you soon!" : null}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        </Container>
      </section>
    </>
  );
};

export default GetTouch;
