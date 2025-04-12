"use client";
import React from "react";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import { styled, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import useAuthUser from "../hooks/user-auth-user";
import MenuContent from "../components/AdminComponents/MenuContent";
import OptionsMenu from "../components/AdminComponents/OptionsMenu";
import { cloudfront_url } from "../lib/functionsClient";
import theme from "../lib/themeMui";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const user = useAuthUser();

  return (
    <ThemeProvider theme={theme}>
      <div className="grid grid-cols-[18%,82%]">
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            [`& .${drawerClasses.paper}`]: {
              backgroundColor: "#384239",
            },

            "& .MuiDrawer-paper": {
              width: "18%",
              backgroundColor: "#384239",
            },
          }}
        >
          <Image
            src={`${cloudfront_url}/neutral/logo.svg`}
            alt="logo"
            width={100}
            height={100}
            priority
            className=" w-full h-full max-h-[60px] mt-[16px] mb-[16px]"
          />

          <Divider />
          <MenuContent />

          <Stack
            direction="row"
            sx={{
              p: 2,
              gap: 1,
              alignItems: "center",
              borderTop: "1px solid",
              borderColor: "divider",
            }}
          >
            <Avatar
              sizes="small"
              alt={"A"}
              src="/static/images/avatar/7.jpg"
              sx={{ width: 36, height: 36 }}
            />
            <Box sx={{ mr: "auto" }}>
              <Typography
                variant="body2"
                sx={{ fontWeight: 500, lineHeight: "16px" }}
              >
                Admin
              </Typography>
              <Typography variant="caption" sx={{ color: "#ffffff" }}>
                {user && user.email}
              </Typography>
            </Box>
            <OptionsMenu />
          </Stack>
        </Drawer>
        <div className="w-full p-16">{children}</div>
      </div>
    </ThemeProvider>
  );
}
