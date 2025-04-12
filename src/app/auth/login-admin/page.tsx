"use client";
import React from "react";
import Box from "@mui/material/Box";
import LoginAdmin from "@/app/components/AdminComponents/LoginAdmin";
import { ThemeProvider } from "@emotion/react";
import theme from "@/app/lib/themeMui";

const page = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box className="own_edge">
          <Box className="main_section min-h-screen flex items-center justify-center">
            <LoginAdmin />
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default page;
