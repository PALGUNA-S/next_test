import InfoIcon from "@mui/icons-material/Info";
import { AppBar, Box, Button, Container, FormControl, Grid, InputAdornment, MenuItem, Select, Skeleton, Stack, Tab, Tabs, TextField, Tooltip, Typography, styled, useMediaQuery, useTheme, } from "@mui/material";
import { tooltipClasses } from "@mui/material/Tooltip";
import Fade from "@mui/material/Zoom";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Ripple from "../Repple/Ripple";
import Image from 'next/image';
import styles from "./banner.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { api_url } from "../../../config/config";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { app_url } from "../../../config/config";
import getUtmParams from "../../utils/utmParams";

const flagFL = [
  { code: "USD", flag: '/assets/Home_section/Usd_Flag.svg' },
  { code: "EUR", flag: '/assets/Home_section/Eur_Flag.svg' },
  { code: "CAD", flag: '/assets/Home_section/Cad_Flag.svg' },
  { code: "GBP", flag: '/assets/Home_section/Gbp_Flag.svg' },
  { code: "INR", flag: '/assets/Home_section/Inr_Flag.svg' },
];

const flagFLHCL = [
  { code: "USD", flag: '/assets/Home_section/Usd_Flag.svg' },
  { code: "EUR", flag: '/assets/Home_section/Eur_Flag.svg' },
  { code: "CAD", flag: '/assets/Home_section/Cad_Flag.svg' },
  { code: "GBP", flag: '/assets/Home_section/Gbp_Flag.svg' },
  { code: "INR", flag: '/assets/Home_section/Inr_Flag.svg' },
];

const getMaxLimitForCurrency = (currencyCode) => {
  let fetchedRate;

  switch (currencyCode) {
    case "USD":
      fetchedRate = 28500;
      break;
    case "GBP":
      fetchedRate = 22490;
      break;
    case "EUR":
      fetchedRate = 26320;
      break;
    case "CAD":
      fetchedRate = 38250;
      break;
    default:
      // Set a default value or handle the case when the currency is not recognized
      fetchedRate = 0;
      break;
  }

  return fetchedRate;
};

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#d9f7fa",
    color: "black",
    maxWidth: 250,
    fontSize: theme.typography.pxToRem(12),
    borderRadius: "0",
  },
}));

const ReadHtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#d9f7fa",
    color: "black",
    width: '350px',
    maxWidth: '330px',
    fontSize: theme.typography.pxToRem(12),
    borderRadius: "0",
    padding: "0.7rem",
  },
}));

// For Tabs
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ height: 390 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
// End Tabs

const Banner = () => {
  const [fromValue, setFromValue] = useState("USD");
  const [fromValueHCL, setFromValueHCL] = useState("USD");
  const [toValue, setToValue] = useState("INR"); // Set default "To" value
  const [toValueHCL, setToValueHCL] = useState("INR"); // Set default "To" value
  const [amount, setAmount] = useState("500"); // Set default amount
  const [calcharges, setCalCharges] = useState({ charges: {}, historicalDate: {}, exchange_rate: "", });
  const [skeLoading, setSkeLoading] = useState(true);
  const isScreenBelow1075px = useMediaQuery("(max-width:1075px)");
  const [displayText, setDisplayText] = useState("Total amount converted");
  const [visibleMaxlimit, setVisibleMaxlimit] = useState(false);

  const [historicalDate, setHistoricalDate] = useState({
    amount: "",
    date: dayjs().subtract(1, 'day').format('YYYY-MM-DD'),
    user_amount: "",
  });

  const [errorDateMessage, setErrorDateMessage] = useState('');

  // Tabs
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // Tabs

  const handleScrollToBetaAccess = () => {
    let utm_params = getUtmParams()
    window.open(`${app_url}/#/registrationscreen/defaultregistrationscreen${utm_params ? '?' + utm_params : ''}`, '_blank');
  };

  useEffect(() => {
    if (isScreenBelow1075px) {
      setDisplayText("Converted");
    } else {
      setDisplayText("Total amount converted");
    }
  }, [isScreenBelow1075px]);

  const handleFromChange = (event) => {
    setFromValue(event.target.value);
    const maxLimit = getMaxLimitForCurrency(event.target.value);
    if (amount > maxLimit) {
      setVisibleMaxlimit(true);
    } else {
      setVisibleMaxlimit(false);
    }
  };

  const handleFromChangeHCL = (event) => {
    setFromValueHCL(event.target.value);

    // Clear both Remitter Amount and Total Received Amount when the currency changes
    setHistoricalDate((prevState) => ({
      ...prevState,
      amount: "", // Clear the remitter amount
      user_amount: "", // Clear the total received amount
    }));

    const maxLimit = getMaxLimitForCurrency(event.target.value);
    if (amount > maxLimit) {
      setVisibleMaxlimit(true);
    } else {
      setVisibleMaxlimit(false);
    }
  };

  const handleToChange = (event) => {
    setToValue(event.target.value);
  };

  const handleToChangeHCL = (event) => {
    setToValueHCL(event.target.value);
  };

  const handleAmountChange = (event) => {
    let enteredAmount = event.target.value;
    // If backspace is pressed and the input is empty, set amount to 0
    if (enteredAmount === "" && event.nativeEvent.inputType === "deleteContentBackward") {
      setAmount("0");
      setVisibleMaxlimit(false);
    } else {
      // Limit the length to 5 digits
      const parsedAmount = parseFloat(enteredAmount);
      if (parsedAmount <= getMaxLimitForCurrency(fromValue)) {
        setAmount(enteredAmount.charAt(0) === '0' ? parsedAmount.toString() : enteredAmount.toString());
      } else if (enteredAmount === "") {
        setAmount("0");
        setVisibleMaxlimit(false);
        return;
      }

      const maxLimit = getMaxLimitForCurrency(fromValue);
      if (parsedAmount > maxLimit) {
        setVisibleMaxlimit(true);
      } else {
        setVisibleMaxlimit(false);
      }
    }
  };

  const renderCountryOptions = (from_to) => {
    return flagFL.map(({ code, flag }) => (
      <MenuItem
        key={code}
        value={code}
        disabled={from_to === "from" ? code !== "USD" : code !== "INR"}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image src={flag} alt={code} width={27} height={27} />
          <span style={{ marginLeft: "10px" }}>{code}</span>
        </Box>
      </MenuItem>
    ));
  };


  const renderCountryOptionsHCL = (from_to) => {
    return flagFLHCL.map(({ code, flag }) => (
      <MenuItem
        key={code}
        value={code}
        disabled={from_to === "from" ? code === "INR" : code !== "INR"}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={flag} alt={code} width={27} height={27} />
          <span style={{ marginLeft: "10px" }}>{code}</span>
        </Box>
      </MenuItem>
    ));
  };

  const Chargesapi = () => {
    let date = {
      from_country_code: fromValue,
      to_country_code: toValue,
      amount: amount,
    };

    const URL = `${api_url}/charges/getCharges`;

    fetch(URL, {
      method: "POST", // Use POST method to send data in the request body
      headers: {
        "Content-Type": "application/json", // Specify the content type as JSON
      },
      body: JSON.stringify(date), // Convert the data to JSON format
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        setCalCharges((prev) => ({ ...prev, charges: responseData }));
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        // Handle errors appropriately, e.g., show a user-friendly message
      });
  };

  const HistoricalChargesapi = () => {

    let historicalchargesdate = {
      from_country_code: fromValue,
      to_country_code: toValue,
      amount: historicalDate.amount ? historicalDate.amount : 0,
      user_amount: historicalDate.user_amount ? historicalDate.user_amount : 0,
      date: historicalDate.date,
    };

    const URL = `${api_url}/charges/historicalCharges`;
    // const URL = "https://dev-api.leremitt.com/api/v1/charges/historicalCharges";

    fetch(URL, {
      method: "POST", // Use POST method to send data in the request body
      headers: {
        "Content-Type": "application/json", // Specify the content type as JSON
      },
      body: JSON.stringify(historicalchargesdate), // Convert the data to JSON format
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        if (responseData.status)
          setCalCharges((prev) => ({ ...prev, historicalDate: responseData }));
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        // Handle errors appropriately, e.g., show a user-friendly message
      });
  };

  useEffect(() => {
    if (
      historicalDate.amount &&
      historicalDate.date &&
      historicalDate.user_amount
    )
      HistoricalChargesapi();
  }, [historicalDate, fromValue, toValue]);

  useEffect(() => {
    Chargesapi();
  }, [fromValue, toValue, amount]);

  useEffect(() => {
    setTimeout(() => {
      setSkeLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    AOS.init({ duration: "1500", delay: "100" });
  }, []);

  const handleHistoricalData = (e) => {
    const { id, value } = e.target;
    setHistoricalDate((val) => ({ ...val, [id]: value }));
  };

  useEffect(() => {
    handleExchangeRate();
  }, [fromValueHCL, toValueHCL, historicalDate.date]);

  const handleExchangeRate = async () => {
    const resDate = dayjs(historicalDate.date)
    const dateformat = dayjs(historicalDate.date).format("YYYY-MM-DD");
    const date_valid = dayjs(dateformat).isValid()
    const minDate = '2010/01/01'
    const maxDate = dayjs().subtract(1, 'day')
    if (date_valid && resDate.isAfter(minDate) && resDate.isBefore(maxDate)) {
      let date = {
        from_country_code: fromValueHCL,
        to_country_code: toValueHCL,
        date: historicalDate.date,
      };

      const URL = `${api_url}/charges/getrates`;

      fetch(URL, {
        method: "POST", // Use POST method to send data in the request body
        headers: {
          "Content-Type": "application/json", // Specify the content type as JSON
        },
        body: JSON.stringify(date), // Convert the data to JSON format
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((responseData) => {
          setCalCharges((prev) => ({
            ...prev,
            exchange_rate: responseData.exchange_rate,
          }));
          // setCalCharges((prev) => ({ ...prev, charges: responseData }));
        })
        .catch((error) => {
          console.error("Fetch error:", error);
          // Handle errors appropriately, e.g., show a user-friendly message
        });
      setErrorDateMessage('');
    } else {
      setErrorDateMessage('Invalid date range. Date should be between 2010/01/01 and yesterday.');
    }
  };

  return (
    <section id="homebanner" className={styles.homeBanner} >
      <Container>
        <Grid container pt={1}>
          <Grid item sm={4} md={4} xs={12}>
            <Box>
              <Box mb={1}>
                <Typography mt={{ sm: 4, md: 2 }} variant="h1" sx={{ color: "white", paddingBottom: "3px", fontSize: '2.25rem', fontWeight: "500" }} >
                  <span style={{ color: "#04cee5" }}>Le</span>Check
                </Typography>
              </Box>

              <Box sx={{ background: "transparent", width: 356 }}>
                <AppBar position="static" sx={{ boxShadow: "0", borderRadius: "0", backgroundColor: "transparent", }} >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    sx={{
                      "& .MuiTabs-indicator": {
                        display: "none",
                      },
                      "& .MuiTab-root": {
                        transition: "background-color 0.5s ease",
                        backgroundColor: "transparent",
                        "&.Mui-selected": {
                          backgroundColor: "#0096c8",
                        },
                      },
                    }}
                  >
                    <Tab
                      label="LeCheck"
                      {...a11yProps(0)}
                      sx={{ textTransform: "capitalize", fontSize: "1rem" }}
                    />
                    <Tab
                      label="Historical Rates"
                      {...a11yProps(1)}
                      sx={{ textTransform: "capitalize", fontSize: "1rem" }}
                    />
                  </Tabs>
                </AppBar>

                <TabPanel value={value} index={0} dir={theme.direction}>
                  <div className={styles.converter}>
                    <TextField
                      placeholder="500"
                      variant="standard"
                      margin="normal"
                      type="number"
                      value={amount}
                      onChange={handleAmountChange}
                      onKeyDown={(e) => {
                        const allowedKeys = [
                          "Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab", "Home", "End"
                        ];
                        if (
                          !(
                            allowedKeys.includes(e.key) ||
                            /^\d*\.?\d{0,2}$/.test(e.target.value + e.key)
                          )
                        ) {
                          e.preventDefault();
                        }
                      }}
                      sx={{
                        width: "100%",
                        "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                          display: "none",
                        },
                        "& input[type=number]": {
                          MozAppearance: "textfield",
                        },
                      }}
                      InputProps={{
                        disableUnderline: true,
                        style: { color: "white", fontSize: "20px", paddingLeft: 0, },
                        startAdornment: (
                          <InputAdornment position="start">
                            <FormControl sx={{ minWidth: "120px" }}>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                sx={{
                                  color: "white",
                                  "& fieldset": {
                                    border: "none",
                                  },
                                  "& .MuiSelect-icon": {
                                    color: "white",
                                  },
                                }}
                                value={fromValue}
                                onChange={handleFromChange}
                              >
                                {renderCountryOptions("from")}
                              </Select>
                            </FormControl>
                          </InputAdornment>
                        ),
                      }}
                    />

                    {visibleMaxlimit && (
                      <>
                        <Box data-aos="zoom-in" data-aos-delay="100" sx={{ padding: "0 0 3px 20px" }} >
                          <Typography variant="body1">
                            Maximum limit to receive funds is{" "}
                            <span style={{ color: "#04cee5" }}>
                              {fromValue} {getMaxLimitForCurrency(fromValue)}
                            </span>{" "}
                            per transaction
                            <HtmlTooltip
                              TransitionComponent={Fade}
                              TransitionProps={{ timeout: 500 }}
                              placement="bottom-start"
                              title={
                                <React.Fragment>
                                  <Typography color="inherit" padding={"0.2rem"} >
                                    Do you have multiple transactions, email at{" "}
                                    <Link style={{ color: "#142d82", fontWeight: "600", }} href={"mailto:support@leremitt.com"} >
                                      leconnect@leremitt.com{" "}
                                    </Link>{" "}
                                    for preferred rates.
                                  </Typography>
                                </React.Fragment>
                              }
                            >
                              {" "}
                              <Button sx={{ minWidth: "0", padding: "0" }}>
                                <InfoIcon style={{ fontSize: "14px", color: "white" }} />
                              </Button>
                            </HtmlTooltip>
                          </Typography>
                        </Box>
                        <Box sx={{ padding: "0 0 3px 20px", }} >
                          <Typography sx={{ opacity: "0.7" }} border={1} borderColor={"#04cee5"} ></Typography>
                        </Box>
                      </>
                    )}

                    {skeLoading ? (
                      <Box sx={{ padding: "5px 0 0 20px" }}>
                        <Skeleton animation="wave" height={23} width="70%" sx={{ backgroundColor: "#647ac3", opacity: "0.4", borderRadius: "0", }} />
                        <Skeleton animation="wave" height={23} width="80%" sx={{ backgroundColor: "#647ac3", opacity: "0.4", borderRadius: "0", }} />
                        <Skeleton animation="wave" height={23} width="90%" sx={{ backgroundColor: "#647ac3", opacity: "0.4", borderRadius: "0", }} />
                        <Skeleton animation="wave" height={23} width="50%" sx={{ backgroundColor: "#647ac3", opacity: "0.4", borderRadius: "0", }} />
                      </Box>
                    ) : (
                      calcharges.charges?.charges &&
                      Object.entries(calcharges.charges.charges).map(([key, value]) => (
                        <Box
                          sx={{
                            padding: "5px 0 0 20px",
                            display: "flex",
                            justifyContent: "space-between",
                            fontSize: "14px",
                          }}
                          key={key}
                        >
                          <Typography>{key}</Typography>
                          <Typography>{value} {fromValue} </Typography>
                        </Box>
                      ))
                    )}

                    <Box sx={{ padding: "7px 0 3px 20px", }} >
                      <Typography sx={{ opacity: "0.7" }} border={1} borderColor={"#04cee5"}  ></Typography>
                    </Box>

                    <Box sx={{ padding: "5px 0 0 20px", display: "flex", justifyContent: "space-between", }} >
                      <Typography variant="body1" fontSize={'1rem'}>
                        {displayText} (Rate @{" "}
                        {calcharges.charges?.exchange_rate})
                      </Typography>
                      <Typography variant="body1" fontSize={'1rem'}>
                        {calcharges.charges?.total_amount} {fromValue}
                      </Typography>
                    </Box>

                    <TextField
                      variant="standard"
                      margin="normal"
                      placeholder="LeRate"
                      disabled
                      value={calcharges.charges?.converted_total_amount || ""}
                      sx={{
                        width: "100%",
                        "& .MuiInputBase-input.Mui-disabled": {
                          WebkitTextFillColor: "white",
                        },
                      }}
                      InputProps={{
                        disableUnderline: true,
                        style: {
                          color: "white",
                          fontSize: "20px",
                          paddingLeft: 0,
                        },
                        startAdornment: (
                          <InputAdornment position="start">
                            <FormControl sx={{ minWidth: "120px" }}>
                              <Select
                                sx={{
                                  color: "white",
                                  "& fieldset": {
                                    border: "none",
                                  },
                                  "& .MuiSelect-icon": {
                                    color: "white",
                                  },
                                }}
                                value={toValue}
                                onChange={handleToChange}
                              >
                                {renderCountryOptions("to")}
                              </Select>
                            </FormControl>
                          </InputAdornment>
                        ),
                      }}
                    />

                    <Box pl={2} pt={0.4}>
                      <Typography variant="body2" color={'#04cee5'}>*Disclaimer : The rates are indicative. The actual rates may vary at the time of the transaction.</Typography>
                    </Box>

                  </div>

                  <Stack mt={0.6}>
                    {calcharges.charges?.exchange_rate && (
                      <Typography variant="body1" fontSize="1rem">
                        {`1 ${fromValue} = ${calcharges.charges.exchange_rate} ${toValue}`}
                      </Typography>
                    )}
                  </Stack>

                  <Button
                    variant="contained"
                    endIcon={<img src={'/Assets/Reusable_section/Button_Icon_01.svg'} alt="Button_Icon_01" />}
                    sx={{
                      width: "100%",
                      "&:hover": {
                        backgroundColor: "#dff0f1",
                        boxShadow: "none",
                      },
                      boxShadow: "none",
                      borderRadius: 0,
                      background: "#ffff",
                      color: "#142d82",
                      fontWeight: "700",
                      padding: "10px 20px",
                      marginTop: "20px",
                      fontSize: "15px",
                      justifyContent: "space-between",
                      textTransform: "none",
                    }}
                    onClick={handleScrollToBetaAccess}
                  >
                    Register Now
                  </Button>
                </TabPanel>

                <TabPanel value={value} index={1} dir={theme.direction}>
                  <Box>
                    <div className={styles.Historicalconverter}>
                      <Stack pl={2} pt={2}
                        sx={{
                          svg: { color: "white" },
                          input: {
                            color: "white",
                            border: "none",
                            fontSize: "1.2rem",
                            padding: "10px",
                          },
                          label: { color: "#04cee5" },
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "#04cee5",
                              borderRadius: "0",
                            },
                            "&:hover fieldset": {
                              borderColor: "#04cee5",
                              borderRadius: "0",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "#04cee5",
                              borderRadius: "0",
                            },
                          },
                        }}
                      >
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          {/* <DemoContainer components={["DatePicker"]}> */}
                          <DatePicker
                            onError={(e) => e}
                            sx={{ width: "100%" }}
                            value={
                              historicalDate.date
                                ? dayjs(historicalDate.date)
                                : null
                            }
                            onChange={(newValue) => {
                              if (newValue) {
                                setHistoricalDate((val) => ({
                                  ...val,
                                  date: dayjs(newValue).format("YYYY-MM-DD"),
                                }));
                              }
                            }}
                            format="YYYY-MM-DD"
                            minDate={dayjs("2010/01/01")}
                            maxDate={dayjs().subtract(1, 'day')}
                          />
                          {/* </DemoContainer> */}
                        </LocalizationProvider>
                        {errorDateMessage && <Typography data-aos="zoom-in"
                          data-aos-easing="ease-out-cubic"
                          data-aos-duration="800" mt={1} variant="body2" sx={{ color: 'white' }}>{errorDateMessage}</Typography>}
                      </Stack>

                      <Box pl={2} pt={1} sx={{ display: "flex", justifyContent: "space-between", }} >
                        <TextField
                          id="amount"
                          placeholder="Remitter Amount"
                          value={historicalDate.amount}
                          onChange={handleHistoricalData}
                          onKeyDown={(e) => {
                            const allowedKeys = [
                              "Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab", "Home", "End"
                            ];

                            // We want limit then use the below code
                            // const currentValue = e.target.value;
                            // const isDigit = /^\d$/.test(e.key);
                            // const isDot = e.key === ".";
                            // const [integerPart, decimalPart] = currentValue.split('.');

                            if (
                              !(
                                allowedKeys.includes(e.key) ||
                                /^\d*\.?\d{0,2}$/.test(e.target.value + e.key)

                                // We want limit then use the below code
                                // (isDigit && (!decimalPart && integerPart.length < 6)) ||
                                // (isDot && !currentValue.includes('.')) ||
                                // (isDigit && decimalPart && decimalPart.length < 2)
                              )
                            ) {
                              e.preventDefault();
                            }
                          }}
                          sx={{
                            width: "100%",
                            input: {
                              color: "white",
                              padding: "10px",
                              fontSize: "1.2rem",
                              border: "none",
                            },
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "#04cee5",
                                borderRadius: "0",
                              },
                              "&:hover fieldset": {
                                borderColor: "#04cee5",
                                borderRadius: "0",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#04cee5",
                                borderRadius: "0",
                              },
                            },
                          }}
                          InputProps={{
                            disableUnderline: true,
                            style: {
                              color: "white",
                              fontSize: "20px",
                              paddingLeft: 0,
                            },
                            startAdornment: (
                              <InputAdornment position="start">
                                <FormControl sx={{ minWidth: "120px" }}>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    sx={{
                                      color: "white",
                                      "& fieldset": {
                                        border: "none",
                                      },
                                      "& .MuiSelect-icon": {
                                        color: "white",
                                      },
                                    }}
                                    value={fromValueHCL}
                                    onChange={handleFromChangeHCL}
                                  >
                                    {renderCountryOptionsHCL("from")}
                                  </Select>
                                </FormControl>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Box>

                      <Box pl={2} pt={1} sx={{ display: "flex", justifyContent: "space-between", }} >
                        <Typography variant="body1" fontSize={'1rem'}>Conversion Rates</Typography>
                        {calcharges?.exchange_rate ? (
                          <Typography variant="body1" fontSize={'1rem'}
                            data-aos="zoom-in"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="800"
                          >
                            Rate @ {calcharges?.exchange_rate}
                          </Typography>
                        ) : null}
                      </Box>

                      <Box pl={2} pt={1} sx={{ display: "flex", justifyContent: "space-between", }}  >
                        <TextField
                          disabled={fromValueHCL !== "USD"}
                          id="user_amount"
                          placeholder="Total Received Amount"
                          value={historicalDate.user_amount}
                          onChange={handleHistoricalData}
                          onKeyDown={(e) => {
                            if (
                              !(
                                e.key === "Backspace" ||
                                /^\d*\.?\d{0,2}$/.test(e.target.value + e.key)
                              )
                            ) {
                              e.preventDefault();
                            }
                          }}
                          sx={{
                            width: "100%",
                            input: {
                              color: "white",
                              padding: "10px",
                              fontSize: "1.2rem",
                              border: "none",
                            },
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "#04cee5",
                                borderRadius: "0",
                              },
                              "&:hover fieldset": {
                                borderColor: "#04cee5",
                                borderRadius: "0",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#04cee5",
                                borderRadius: "0",
                              },
                            },
                            "& .MuiInputBase-root.Mui-disabled": {
                              "& > fieldset": {
                                borderColor: "#04cee5",
                              }
                            }
                          }}
                          InputProps={{
                            disableUnderline: true,
                            style: {
                              color: "white",
                              fontSize: "20px",
                              paddingLeft: 0,
                            },
                            startAdornment: (
                              <InputAdornment position="start">
                                <FormControl sx={{ minWidth: "120px" }}>
                                  <Select
                                    sx={{
                                      color: "white",
                                      "& fieldset": {
                                        border: "none",
                                      },
                                      "& .MuiSelect-icon": {
                                        color: "white",
                                      },
                                    }}
                                    value={toValueHCL}
                                    onChange={handleFromChangeHCL}
                                  >
                                    {renderCountryOptionsHCL("to")}
                                  </Select>
                                </FormControl>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Box>

                      <Box pl={2} pt={0.5} pb={0.5}>
                        {fromValueHCL === "USD" && (
                          <Typography variant="body1" fontSize={'1rem'}
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box>
                              If you chose LeRemitt, you would have received
                            </Box>
                            <Box>
                              <ReadHtmlTooltip
                                TransitionComponent={Fade}
                                TransitionProps={{ timeout: 500 }}
                                placement="top-start"
                                title={
                                  <React.Fragment>
                                    {calcharges.historicalDate?.charges
                                      ? Object.entries(
                                        calcharges.historicalDate.charges
                                      ).map(([key, value]) => (
                                        <Box
                                          sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            fontSize: "1rem",
                                          }}
                                          key={key}
                                        >
                                          <Typography variant="body1" fontWeight={400} mb={1} >{key}</Typography>
                                          <Typography variant="body1" fontWeight={400} mb={1} >
                                            {value} {fromValue}
                                          </Typography>
                                        </Box>
                                      ))
                                      : null}
                                    <Box sx={{ display: "flex", justifyContent: "space-between", fontSize: '1rem' }} >
                                      <Typography variant="body1" fontWeight={400} mb={1} >
                                        {displayText} (Rate @{" "}
                                        {calcharges.historicalDate?.exchange_rate}
                                        )
                                      </Typography>
                                      <Typography variant="body1" fontWeight={400} mb={1} >
                                        {calcharges.historicalDate?.total_amount}{" "}
                                        {fromValue}
                                      </Typography>
                                    </Box>
                                    <Box mb={1}>
                                      <Typography sx={{ opacity: "0.7" }} border={1} borderColor={"#04cee5"}></Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", fontSize: '1rem' }} >
                                      <Typography variant="body1" fontWeight={400} mb={1} >
                                        LeRemitt Total received amount
                                      </Typography>
                                      <Typography variant="body1" fontWeight={400} mb={1} >
                                        {calcharges.historicalDate
                                          ?.converted_total_amount || ""}{" "}
                                        INR
                                      </Typography>
                                    </Box>
                                  </React.Fragment>
                                }
                              >
                                <Button sx={{ minWidth: "0", padding: "0" }}> <InfoIcon style={{ fontSize: "14px", color: "white" }} /> </Button>
                              </ReadHtmlTooltip>
                            </Box>
                          </Typography>
                        )}
                      </Box>

                      <Box pl={2} sx={{ display: "flex", justifyContent: "space-between", }} >
                        <TextField
                          disabled
                          placeholder="LeRate"
                          // value={ calcharges.historicalDate?.converted_total_amount || "" }
                          value={fromValueHCL !== "USD" ? "NA" : calcharges.historicalDate?.converted_total_amount || ""}

                          sx={{
                            "& .MuiInputBase-input.Mui-disabled": {
                              WebkitTextFillColor: "white",
                            },
                            width: "100%",
                            input: {
                              color: "white",
                              padding: "10px",
                              fontSize: "1.2rem",
                              border: "none",
                            },
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "#04cee5",
                                borderRadius: "0",
                              },
                              "&:hover fieldset": {
                                borderColor: "#04cee5",
                                borderRadius: "0",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "#04cee5",
                                borderRadius: "0",
                              },
                              "&.Mui-disabled fieldset": {
                                borderColor: "#04cee5",
                                borderRadius: "0",
                              },
                            },
                          }}
                          InputProps={{
                            disableUnderline: true,
                            style: {
                              color: "white",
                              fontSize: "20px",
                              paddingLeft: 0,
                            },
                            startAdornment: (
                              <InputAdornment position="start">
                                <FormControl sx={{ minWidth: "120px" }}>
                                  <Select
                                    sx={{
                                      color: "white",
                                      "& fieldset": {
                                        border: "none",
                                      },
                                      "& .MuiSelect-icon": {
                                        color: "white",
                                      },
                                    }}
                                    value={toValueHCL}
                                    onChange={handleFromChangeHCL}
                                  >
                                    {renderCountryOptionsHCL("to")}
                                  </Select>
                                </FormControl>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Box>

                      <Box pl={2} pt={1} sx={{ display: "flex", justifyContent: "space-between", }}  >
                        <Typography variant="body1" fontWeight={400} fontSize={'1.5rem'} >LeRemitt Savings</Typography>
                        <Typography variant="body1" fontWeight={400} fontSize={'1.5rem'} >
                          {/* {calcharges.historicalDate?.profit} INR */}
                          {fromValueHCL !== "USD" ? "NA" : calcharges.historicalDate?.profit ? `${calcharges.historicalDate.profit} INR` : "INR"}
                        </Typography>
                      </Box>

                      <Box pl={2} pt={0.4}>
                        <Typography variant="body2" color={'#04cee5'}>*Disclaimer : Historic rates are indicative and may vary based on the specific time of transactions.</Typography>
                      </Box>
                    </div>
                  </Box>

                  <Button
                    variant="contained"
                    endIcon={<img src={'/Assets/Reusable_section/Button_Icon_01.svg'} alt="Button_Icon_01" />}
                    sx={{
                      width: "100%",
                      "&:hover": {
                        backgroundColor: "#dff0f1",
                        boxShadow: "none",
                      },
                      boxShadow: "none",
                      borderRadius: 0,
                      background: "#fff",
                      color: "#142d82",
                      fontWeight: "700",
                      padding: "10px 20px",
                      marginTop: "20px",
                      fontSize: "15px",
                      justifyContent: "space-between",
                      textTransform: "none",
                    }}
                    onClick={handleScrollToBetaAccess}
                  >
                    Register Now
                  </Button>
                </TabPanel>
              </Box>
            </Box>
          </Grid>

          <Grid item sm={8} md={8} xs={12}>
            <Box sx={{ position: "relative", height: "78vh !important", }} >
              <Box className={styles.cadFlag}>
                <div className={styles.ripplecad}>
                  <Box className={toValue === "CAD" || fromValue === "CAD" ? styles.visible : styles.hidden} >
                    <Ripple />
                  </Box>
                </div>
                <img src={'/assets/Home_section/Cad_Pole.svg'} alt="Cad_Pole" className={styles.cadpole} loading="lazy" />
                <Typography
                  className={toValue === "CAD" || fromValue === "CAD" ? styles.whiteText : styles.blackText} variant="body1" fontSize={'1.25rem'} >
                  CAD&nbsp;
                  {toValue === "CAD" ? calcharges.charges?.converted_total_amount || "" : fromValue === "CAD" ? amount
                    : parseFloat(calcharges.charges?.all_rates?.CAD * calcharges.charges?.total_amount).toFixed(2)}
                </Typography>
              </Box>

              <Box className={styles.usdFlag}>
                <div className={styles.rippleusd}>
                  <Box className={toValue === "USD" || fromValue === "USD" ? styles.visible : styles.hidden} >
                    <Ripple />
                  </Box>
                </div>
                <img src={'/assets/Home_section/Usd_Pole.svg'} alt="Usd_Pole" className={styles.usdpole} loading="lazy" />
                <Typography
                  className={toValue === "USD" || fromValue === "USD" ? styles.whiteText : styles.blackText}
                  variant="body1" fontSize={'1.25rem'}
                >
                  USD&nbsp;
                  {toValue === "USD" ? calcharges.charges?.converted_total_amount || "" : fromValue === "USD" ? amount
                    : parseFloat(calcharges.charges?.all_rates?.USD * calcharges.charges?.total_amount).toFixed(2)}
                </Typography>
              </Box>

              <Box className={styles.gbpFlag}>
                <div className={styles.ripplegbp}>
                  <Box className={toValue === "GBP" || fromValue === "GBP" ? styles.visible : styles.hidden} >
                    <Ripple />
                  </Box>
                </div>
                <img src={'/assets/Home_section/Gbp_Pole.svg'} alt="Gbp_Pole" className={styles.gbppole} loading="lazy" />
                <Typography className={toValue === "GBP" || fromValue === "GBP" ? styles.whiteText : styles.blackText} variant="body1" fontSize={'1.25rem'} >
                  GBP&nbsp;
                  {toValue === "GBP" ? calcharges.charges?.converted_total_amount || "" : fromValue === "GBP" ? amount
                    : parseFloat(calcharges.charges?.all_rates?.GBP * calcharges.charges?.total_amount).toFixed(2)}
                </Typography>
              </Box>

              <Box className={styles.eurFlag}>
                <div className={styles.rippleeur}>
                  <Box className={toValue === "EUR" || fromValue === "EUR" ? styles.visible : styles.hidden} >
                    <Ripple />
                  </Box>
                </div>
                <img src={'/assets/Home_section/Eur_Pole.svg'} alt="Eur_Pole" className={styles.eurpole} loading="lazy" />
                <Typography className={toValue === "EUR" || fromValue === "EUR" ? styles.whiteText : styles.blackText} variant="body1" fontSize={'1.25rem'} >
                  EUR&nbsp;
                  {toValue === "EUR" ? calcharges.charges?.converted_total_amount || "" : fromValue === "EUR" ? amount
                    : parseFloat(calcharges.charges?.all_rates?.EUR * calcharges.charges?.total_amount).toFixed(2)}
                </Typography>
              </Box>

              <Box className={styles.inrFlagFirst}>
                <div className={styles.rippleinr}>
                  <Box className={toValue === "INR" || fromValue === "INR" ? styles.visible : styles.hidden}>
                    <Ripple />
                  </Box>
                </div>
                <img src={'/assets/Home_section/Inr_Pole.svg'} alt="Inr_Pole" className={styles.usdpole} loading="lazy" />

                <Typography className={toValue === "INR" || fromValue === "INR" ? styles.whiteText : styles.blackText} variant="body1" fontSize={'1.25rem'} >
                  INR&nbsp;
                  {toValue === "INR" ? calcharges.charges?.converted_total_amount || "" : fromValue === "INR" ? amount
                    : parseFloat(calcharges.charges?.all_rates?.INR * calcharges.charges?.total_amount).toFixed(2)}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Banner;
