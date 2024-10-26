import InfoIcon from "@mui/icons-material/Info";
import { AppBar, Box, Button, Container, FormControl, Grid, InputAdornment, MenuItem, Select, Skeleton, Stack, Tab, Tabs, TextField, Tooltip, Typography, styled, useMediaQuery, useTheme, } from "@mui/material";
import { tooltipClasses } from "@mui/material/Tooltip";
import Fade from "@mui/material/Zoom";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from './Converter.module.css'
import Image from 'next/image';

import AOS from "aos";
import "aos/dist/aos.css";

import { api_url, app_url } from "../../config/config";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import getUtmParams from "../utils/utmParams";

const flagFL = [
  { code: "USD", flag: 'https://www.leremitt.com/Images/Home_section-Svg/USA.svg' },
  { code: "EUR", flag: 'https://www.leremitt.com/Images/Home_section-Svg/EUR.svg' },
  { code: "CAD", flag: 'https://www.leremitt.com/Images/Home_section-Svg/CAD.svg' },
  { code: "GBP", flag: 'https://www.leremitt.com/Images/Home_section-Svg/GBP.svg' },
  { code: "INR", flag: 'https://www.leremitt.com/Images/Home_section-Svg/INR.svg' },
];

const flagFLHCL = [
  { code: "USD", flag: 'https://www.leremitt.com/Images/Home_section-Svg/USA.svg' },
  { code: "EUR", flag: 'https://www.leremitt.com/Images/Home_section-Svg/EUR.svg' },
  { code: "CAD", flag: 'https://www.leremitt.com/Images/Home_section-Svg/CAD.svg' },
  { code: "GBP", flag: 'https://www.leremitt.com/Images/Home_section-Svg/GBP.svg' },
  { code: "INR", flag: 'https://www.leremitt.com/Images/Home_section-Svg/INR.svg' },
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
    maxWidth: 500,
    fontSize: theme.typography.pxToRem(12),
    borderRadius: "0",
    padding: "1rem",
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
        <Box>
          <Typography>{children}</Typography>
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

const Converter = () => {
  const [fromValue, setFromValue] = useState("USD"); // Set default "From" value
  const [fromValueHCL, setFromValueHCL] = useState("USD");
  const [toValue, setToValue] = useState("INR"); // Set default "To" value
  const [toValueHCL] = useState("INR");
  const [amount, setAmount] = useState("500"); // Set default amount
  const [calcharges, setCalCharges] = useState({
    charges: {},
    historicalDate: {},
    exchange_rate: "",
  });
  const [skeLoading, setSkeLoading] = useState(true);
  const isScreenBelow1075px = useMediaQuery("(max-width:1075px)");
  const [displayText, setDisplayText] = useState("Total amount converted");
  const [visibleMaxlimit, setvisibleMaxlimit] = useState(false);

  const [historicalDate, setHistoricalDate] = useState({
    amount: "",
    date: dayjs().subtract(1, 'day').format('YYYY-MM-DD'),
    user_amount: "",
  });
  const [convertedAmounts, setConvertedAmounts] = useState({});
  const [mobileviewcharges, setmobileviewcharges] = useState({});

  const [errorDateMessage, setErrorDateMessage] = useState('');


  // Tabs
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleRegister = () => {
    let utm_params = getUtmParams()
    window.open(`${app_url}/#/registrationscreen/defaultregistrationscreen${utm_params ? '?' + utm_params : ''}`, '_blank');
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // Tabs

  useEffect(() => {
    if (isScreenBelow1075px) {
      setDisplayText("Amount converted");
    } else {
      setDisplayText("Total amount converted");
    }
  }, [isScreenBelow1075px]);

  const handleFromChange = (event) => {
    setFromValue(event.target.value);
    const maxLimit = getMaxLimitForCurrency(event.target.value);
    if (amount > maxLimit) {
      setvisibleMaxlimit(true);
    } else {
      setvisibleMaxlimit(false);
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
      setvisibleMaxlimit(true);
    } else {
      setvisibleMaxlimit(false);
    }
  };

  const handleToChange = (event) => {
    setToValue(event.target.value);
  };

  const handleAmountChange = (event) => {
    let enteredAmount = event.target.value;

    // If backspace is pressed and the input is empty, set amount to 0
    if (
      enteredAmount === "" &&
      event.nativeEvent.inputType === "deleteContentBackward"
    ) {
      setAmount("0");
      setvisibleMaxlimit(false);
    } else {
      // Limit the length to 5 digits
      const parsedAmount = parseFloat(enteredAmount);
      if (parsedAmount <= getMaxLimitForCurrency(fromValue)) {
        // setAmount(parsedAmount.toString());
        setAmount(enteredAmount.charAt(0) === '0' ? parsedAmount.toString() : enteredAmount.toString());
      } else if (enteredAmount === "") {
        setAmount("0");
        setvisibleMaxlimit(false);
        return;
      }

      const maxLimit = getMaxLimitForCurrency(fromValue);
      if (parsedAmount > maxLimit) {
        setvisibleMaxlimit(true);
      } else {
        setvisibleMaxlimit(false);
      }
    }
  };

  const renderCountryOptions = (from_to) => {
    return flagFL.map(({ code, flag }) => (
      <MenuItem
        key={code}
        value={code}
        // disabled={from_to === "from" ? code === "INR" : code !== "INR"}
        disabled={from_to === "from" ? code !== "USD" : code !== "INR"}
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
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(date),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        setCalCharges((prev) => ({ ...prev, charges: responseData }));
        let date = {
          USD:
            parseFloat(
              responseData?.all_rates?.USD * responseData?.total_amount
            ).toFixed(2) / amount,
          CAD:
            parseFloat(
              responseData?.all_rates?.CAD * responseData?.total_amount
            ).toFixed(2) / amount,

          GBP:
            parseFloat(
              responseData?.all_rates?.GBP * responseData?.total_amount
            ).toFixed(2) / amount,
          EUR:
            parseFloat(
              responseData?.all_rates?.EUR * responseData?.total_amount
            ).toFixed(2) / amount,
        };

        delete date[fromValue];
        setmobileviewcharges(date);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
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
    }, 1000);
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

  const handleMobileCharges = async (fromCon, toCon, amount) => {
    let date = {
      from_country_code: fromCon,
      to_country_code: toCon,
      amount: amount,
    };

    const URL = `${api_url}/charges/getCharges`;
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(date),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData = await response.json();
      return responseData?.converted_total_amount;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchConvertedAmounts = async () => {
      const convertedAmountsObj = {};
      await Promise.all(
        Object.entries(mobileviewcharges).map(async ([currencyCode, rate]) => {
          const convertedAmount = await handleMobileCharges(currencyCode, toValue, amount);
          convertedAmountsObj[currencyCode] = convertedAmount;
        })
      );
      setConvertedAmounts(convertedAmountsObj);
    };

    fetchConvertedAmounts();
  }, [mobileviewcharges, toValue, amount]);

  return (
    <section id="mobile_screen" className={styles.mobile_screen}>
      <Container>
        <Grid container alignItems="stretch">
          <Box>
            <Typography variant="h1" fontSize={'2.25rem'} sx={{ color: "#2645af", paddingBottom: "3px", fontWeight: "500" }} >
              <span style={{ color: "#00b8d4" }}>Le</span>Check
            </Typography>
            {/* <Typography sx={{ paddingBottom: "20px", fontSize: "13px" }}>
              The rates are subject to changes and should be used for reference
              purposes only.
            </Typography> */}
          </Box>
          <Grid item xs={12}>
            <Box sx={{ background: "#142d82", color: "white", height: "100%", }} >
              <Box sx={{ background: "transparent" }}>
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
                    <Tab label="LeCheck"  {...a11yProps(0)} sx={{ textTransform: "capitalize", fontSize: "1rem" }} />
                    <Tab label="Historical Rates"  {...a11yProps(1)} sx={{ textTransform: "capitalize", fontSize: "1rem" }} />
                  </Tabs>
                </AppBar>

                <TabPanel value={value} index={0} dir={theme.direction}>
                  <div className={styles.Mobconverter}>
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
                        <Box
                          data-aos="zoom-in"
                          data-aos-delay="100"
                          sx={{ padding: "0 0 3px 20px", display: "flex", justifyContent: "space-between", }}
                        >
                          <Typography>
                            Maximum limit to receive funds is{" "}
                            <span style={{ color: "#04cee5" }}>
                              {fromValue} {getMaxLimitForCurrency(fromValue)}
                            </span>{" "}
                            per transaction
                          </Typography>
                          <HtmlTooltip
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 500 }}
                            placement="bottom-start"
                            title={
                              <React.Fragment>
                                <Typography color="inherit" padding={"0.2rem"}  >
                                  Do you have multiple transactions, email at{" "}
                                  <Link style={{ color: "#142d82", fontWeight: "600", }} href={"mailto:support@leremitt.com"} >
                                    leconnect@leremitt.com{" "}
                                  </Link>{" "}
                                  for preferred rates.
                                </Typography>
                              </React.Fragment>
                            }
                          >
                            <Button sx={{ minWidth: "0", padding: "0" }}>
                              <InfoIcon
                                style={{ fontSize: "14px", color: "white" }}
                              />
                            </Button>
                          </HtmlTooltip>
                        </Box>
                        <Box sx={{ padding: "0 0 3px 20px", }} >
                          <Typography
                            sx={{ opacity: "0.7" }}
                            border={1}
                            borderColor={"#04cee5"}
                          ></Typography>
                        </Box>
                      </>
                    )}

                    {/* {calcharges?.charges &&
                  Object.entries(calcharges?.charges).map(([key, value]) => (
                    <Box
                      sx={{
                        padding: "5px 0 0 20px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      key={key}
                    >
                      <Typography>{key}</Typography>
                      <Typography>
                        {value} {fromValue}
                      </Typography>
                    </Box>
                  ))} */}
                    {/* {skeLoading ? (
                      <Box sx={{ padding: "5px 0 0 20px" }}>
                        <Skeleton
                          animation="wave"
                          height={22}
                          width="70%"
                          sx={{
                            backgroundColor: "#647ac3",
                            opacity: "0.4",
                            borderRadius: "0",
                          }}
                        />
                        <Skeleton
                          animation="wave"
                          height={22}
                          width="80%"
                          sx={{
                            backgroundColor: "#647ac3",
                            opacity: "0.4",
                            borderRadius: "0",
                          }}
                        />
                        <Skeleton
                          animation="wave"
                          height={22}
                          width="90%"
                          sx={{
                            backgroundColor: "#647ac3",
                            opacity: "0.4",
                            borderRadius: "0",
                          }}
                        />
                        <Skeleton
                          animation="wave"
                          height={22}
                          width="50%"
                          sx={{
                            backgroundColor: "#647ac3",
                            opacity: "0.4",
                            borderRadius: "0",
                          }}
                        />
                      </Box>
                    ) : calcharges.charges?.charges ? (
                      Object.entries(calcharges.charges.charges).map(
                        ([key, value]) => (
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
                            <Typography>
                              {value} {fromValue}
                            </Typography>
                          </Box>
                        )
                      )
                    ) : null} */}
                    {skeLoading ? (
                      <Box sx={{ padding: "5px 0 0 20px" }}>
                        <Skeleton animation="wave" height={22} width="70%" sx={{ backgroundColor: "#647ac3", opacity: "0.4", borderRadius: "0", }} />
                        <Skeleton animation="wave" height={22} width="80%" sx={{ backgroundColor: "#647ac3", opacity: "0.4", borderRadius: "0", }} />
                        <Skeleton animation="wave" height={22} width="90%" sx={{ backgroundColor: "#647ac3", opacity: "0.4", borderRadius: "0", }} />
                        <Skeleton animation="wave" height={22} width="50%" sx={{ backgroundColor: "#647ac3", opacity: "0.4", borderRadius: "0", }} />
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
                          <Typography>  {value} {fromValue}  </Typography>
                        </Box>
                      ))
                    )}


                    <Box sx={{ padding: "7px 0 3px 20px", }} >
                      <Typography
                        sx={{ opacity: "0.7" }}
                        border={1}
                        borderColor={"#04cee5"}
                      ></Typography>
                    </Box>


                    {skeLoading ? (
                      <Box sx={{ padding: "5px 0 0 20px", display: "flex", justifyContent: "space-between", }} >
                        <Skeleton
                          animation="wave"
                          height={24}
                          width="60%"
                          sx={{
                            backgroundColor: "#647ac3",
                            opacity: "0.4",
                            borderRadius: "0",
                          }}
                        />
                        <Skeleton
                          animation="wave"
                          height={24}
                          width="30%"
                          sx={{
                            backgroundColor: "#647ac3",
                            opacity: "0.4",
                            borderRadius: "0",
                          }}
                        />
                      </Box>
                    ) : (
                      <Box sx={{ padding: "5px 0 0 20px", display: "flex", justifyContent: "space-between", }} >
                        <Typography>
                          {displayText} (Rate @{" "}
                          {calcharges.charges?.exchange_rate})
                        </Typography>
                        <Typography>
                          {calcharges.charges?.total_amount} {fromValue}
                        </Typography>
                      </Box>
                    )}

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
                  </div>


                  {skeLoading ? (
                    <Box pt={1} pb={1} pl={2} pr={2}>
                      <Skeleton animation="wave" height={20}
                        width="100%"
                        sx={{
                          backgroundColor: "#647ac3",
                          opacity: "0.4",
                          borderRadius: "0",
                        }}
                      />
                      <Skeleton animation="wave" height={20}
                        width="60%"
                        sx={{
                          backgroundColor: "#647ac3",
                          opacity: "0.4",
                          borderRadius: "0",
                        }}
                      />
                    </Box>
                  ) : (
                    <Box pt={1} pb={1} pl={2} pr={2}>
                      <Typography variant="body1" color={'#04cee5'}>*Disclaimer : The rates are indicative. The actual rates may vary at the time of the transaction.</Typography>
                    </Box>
                  )}


                  <Box pl={2}>
                    {skeLoading ? (
                      <Skeleton
                        animation="wave"
                        height={15}
                        width="50%"
                        sx={{
                          backgroundColor: "#647ac3",
                          opacity: "0.4",
                          borderRadius: "0",
                        }}
                      />
                    ) : (
                      calcharges.charges?.exchange_rate && (
                        <Typography sx={{ paddingTop: "6px" }}>
                          {`1 ${fromValue} = ${calcharges.charges?.exchange_rate}  ${toValue}`}
                        </Typography>
                      )
                    )}
                  </Box>

                  <Box pt={1} pb={1} pl={2} pr={2}>
                    <Typography
                      sx={{ opacity: "0.7" }}
                      border={1}
                      borderColor={"#04cee5"}
                    ></Typography>
                  </Box>

                  <Box p={2}>
                    {skeLoading ? (
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            paddingBottom: "10px",
                          }}
                        >
                          <Skeleton
                            animation="wave"
                            variant="circular"
                            width={30}
                            height={30}
                            sx={{
                              backgroundColor: "#04cee5",
                              opacity: "0.4",
                            }}
                          />
                          <Skeleton
                            animation="wave"
                            width={70}
                            height={20}
                            sx={{
                              backgroundColor: "#04cee5",
                              opacity: "0.4",
                            }}
                          />
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            paddingBottom: "10px",
                          }}
                        >
                          <Skeleton
                            animation="wave"
                            variant="circular"
                            width={30}
                            height={30}
                            sx={{
                              backgroundColor: "#04cee5",
                              opacity: "0.4",
                            }}
                          />
                          <Skeleton
                            animation="wave"
                            width={70}
                            height={20}
                            sx={{
                              backgroundColor: "#04cee5",
                              opacity: "0.4",
                            }}
                          />
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            paddingBottom: "5px",
                          }}
                        >
                          <Skeleton
                            animation="wave"
                            variant="circular"
                            width={30}
                            height={30}
                            sx={{
                              backgroundColor: "#04cee5",
                              opacity: "0.4",
                            }}
                          />
                          <Skeleton
                            animation="wave"
                            width={70}
                            height={20}
                            sx={{
                              backgroundColor: "#04cee5",
                              opacity: "0.4",
                            }}
                          />
                        </Box>
                      </Box>
                    ) : (
                      <Box>
                        <Typography>
                          {Object.entries(mobileviewcharges).map(([currencyCode, rate]) => {
                            return (
                              <Box
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  paddingBottom: "15px",
                                }}
                                key={currencyCode}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <img
                                    style={{
                                      width: "40px",
                                      paddingRight: "15px",
                                    }}
                                    src={
                                      flagFL.find((flag) => flag.code === currencyCode)?.flag
                                    }
                                    alt={currencyCode}
                                  />
                                  <span>{amount} {currencyCode} </span>
                                </Box>

                                <span>
                                  {convertedAmounts[currencyCode]} {toValue}
                                </span>
                              </Box>
                            );
                          })}
                        </Typography>
                      </Box>
                      //   <Box>
                      //   <Typography>
                      //     {Object.entries(mobileviewcharges).map(
                      //       ([currencyCode, rate]) => 
                      //       {
                      //         return (
                      //         <Box
                      //           style={{
                      //             display: "flex",
                      //             justifyContent: "space-between",
                      //             paddingBottom: "15px",
                      //           }}
                      //           key={currencyCode}
                      //         >
                      //           <Box
                      //             sx={{
                      //               display: "flex",
                      //               alignItems: "center",
                      //               justifyContent: "space-between",
                      //             }}
                      //           >
                      //             <img
                      //               style={{
                      //                 width: "40px",
                      //                 paddingRight: "15px",
                      //               }}
                      //               src={
                      //                 flagFL.find(
                      //                   (flag) => flag.code === currencyCode
                      //                 )?.flag
                      //               }
                      //               alt={currencyCode}
                      //             />
                      //             <span> {currencyCode} </span>
                      //           </Box>

                      //           <span>
                      //             {(amount * rate).toFixed(2)} {currencyCode}
                      //           </span>
                      //         </Box>
                      //       )}
                      //     )}
                      //   </Typography>
                      // </Box>
                    )}
                  </Box>

                  <Box p={2}>
                    {skeLoading ? (
                      <Skeleton
                        animation="wave"
                        height={60}
                        width="100%"
                        sx={{
                          backgroundColor: "#647ac3",
                          opacity: "0.4",
                          borderRadius: 0,
                        }}
                      />
                    ) : (
                      <Button
                        variant="contained"
                        endIcon={<img src={'https://www.leremitt.com/Images/Home_section-Svg/heroarrowbtn.svg'} alt="HereArrowBtn" />}
                        sx={{
                          width: "100%",
                          "&:hover": {
                            backgroundColor: "#dff0f1",
                            boxShadow: "none",
                          },
                          boxShadow: "none",
                          borderRadius: 0,
                          background: "#FFF",
                          color: "#142d82",
                          fontWeight: "700",
                          padding: "10px 20px",
                          fontSize: "15px",
                          justifyContent: "space-between",
                          textTransform: "none",
                        }}
                        onClick={() => {
                          handleRegister()
                        }}
                      >
                        Register Now
                      </Button>
                    )}
                  </Box>
                </TabPanel>

                <TabPanel value={value} index={1} dir={theme.direction}>
                  <Box p={2} className={styles.MobHistoricalconverter}>
                    <Stack
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

                    <Box
                      pt={2}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextField
                        id="amount"
                        placeholder="Remitter Amount"
                        value={historicalDate.amount}
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

                    {visibleMaxlimit && (
                      <>
                        <Box
                          data-aos="zoom-in"
                          data-aos-delay="100"
                          sx={{
                            padding: "0 0 3px 20px",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography>
                            Maximum limit to receive funds is{" "}
                            <span style={{ color: "#04cee5" }}>
                              {fromValue} {getMaxLimitForCurrency(fromValue)}
                            </span>{" "}
                            per transaction
                          </Typography>
                          <HtmlTooltip
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 500 }}
                            placement="bottom-start"
                            title={
                              <React.Fragment>
                                <Typography color="inherit" padding={"0.2rem"}>
                                  {renderCountryOptions("from")}
                                </Typography>
                              </React.Fragment>
                            }
                          >
                          </HtmlTooltip>
                        </Box>
                      </>
                    )}


                    <Box
                      pt={2}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography>Conversion Rates</Typography>
                      {calcharges?.exchange_rate ? (
                        <Typography
                          data-aos="zoom-in"
                          data-aos-easing="ease-out-cubic"
                          data-aos-duration="800"
                        >
                          Rate @ {calcharges?.exchange_rate}
                        </Typography>
                      ) : null}
                    </Box>

                    <Box
                      pt={2}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextField
                        id="user_amount"
                        disabled={fromValueHCL !== "USD"}
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

                    <Box pt={2}>
                      {fromValueHCL === "USD" && (
                        <Typography
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
                                          fontSize: "14px",
                                        }}
                                        key={key}
                                      >
                                        <Typography>{key}</Typography>
                                        <Typography>
                                          {value} {fromValue}
                                        </Typography>
                                      </Box>
                                    ))
                                    : null}
                                  <Box
                                    sx={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <Typography pr={2}>
                                      {displayText} (Rate @{" "}
                                      {calcharges.historicalDate?.exchange_rate}
                                      )
                                    </Typography>
                                    <Typography>
                                      {calcharges.historicalDate?.total_amount}{" "}
                                      {fromValue}
                                    </Typography>
                                  </Box>
                                  <Box>
                                    <Typography
                                      sx={{ opacity: "0.7" }}
                                      border={1}
                                      borderColor={"#04cee5"}
                                    ></Typography>
                                  </Box>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <Typography>
                                      LeRemitt Total received amount
                                    </Typography>
                                    <Typography>
                                      {calcharges.historicalDate
                                        ?.converted_total_amount || ""}{" "}
                                      INR
                                    </Typography>
                                  </Box>
                                </React.Fragment>
                              }
                            >
                              {" "}
                              <Button sx={{ minWidth: "0", padding: "0" }}>
                                <InfoIcon
                                  style={{ fontSize: "14px", color: "white" }}
                                />
                              </Button>
                            </ReadHtmlTooltip>
                          </Box>
                        </Typography>
                      )}
                    </Box>

                    <Box
                      pt={2}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <TextField
                        placeholder="LeRate"
                        // value={calcharges.historicalDate?.converted_total_amount || ""}
                        value={fromValueHCL !== "USD" ? "NA" : calcharges.historicalDate?.converted_total_amount || ""}

                        disabled
                        sx={{
                          width: "100%",
                          "& .MuiInputBase-input.Mui-disabled": {
                            WebkitTextFillColor: "white",
                          },
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

                    <Box
                      pt={2}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="h5">LeRemitt Savings</Typography>
                      <Typography variant="h5">
                        {/* {calcharges.historicalDate?.profit} INR */}
                        {fromValueHCL !== "USD" ? "NA" : calcharges.historicalDate?.profit ? `${calcharges.historicalDate.profit} INR` : "INR"}
                      </Typography>
                    </Box>

                    <Box pt={1}>
                      <Typography variant="body1" color={'#04cee5'}>*Disclaimer : Historic rates are indicative and may vary based on the specific time of transactions.</Typography>
                    </Box>
                  </Box>

                  <Box p={2}>
                    <Button
                      variant="contained"
                      endIcon={<img src={'https://www.leremitt.com/Images/Home_section-Svg/heroarrowbtn.svg'} alt="HereArrowBtn" />}
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
                        fontSize: "15px",
                        justifyContent: "space-between",
                        textTransform: "none",
                      }}
                      onClick={() => {
                        handleRegister()
                      }}
                    >
                      Register Now
                    </Button>
                  </Box>
                </TabPanel>

              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Converter;

