import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const BlogHeader = ({ heading }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <>
      <Box pt={{ xs: 11 }} sx={{ background: "#142d82" }}>
        <Container>
          <Box p={{ xs: 1, md: 2 }}>
            <div variant="body1" fontSize={'1.7rem'} pb={1} fontWeight={500} color={"#00e5ff"}>
              Blogs
            </div>
            <Box pb={1} sx={{ display: "flex" }}>
              <div
                component={Link}
                href={"/"}
                sx={{
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "300",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#00e5ff",
                  },
                }}
              >
                Home
              </div>
              <div color="white">
                <KeyboardArrowRightIcon />
              </div>
              <div
                onClick={handleGoBack}
                sx={{
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "300",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#00e5ff",
                  },
                }}
              >
                Back
              </div>
              <div color="white">
                <KeyboardArrowRightIcon />
              </div>

              {/* Use the 'heading' prop here */}
              <div sx={{ color: "white", fontWeight: "300" }}>
                {heading}
              </div>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
