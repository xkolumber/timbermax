"use client";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalGroceryStoreRoundedIcon from "@mui/icons-material/LocalGroceryStoreRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import EventIcon from "@mui/icons-material/Event";
import Link from "next/link";
import { usePathname } from "next/navigation";
import StarIcon from "@mui/icons-material/Star";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import TourIcon from "@mui/icons-material/Tour";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import AddReactionIcon from "@mui/icons-material/AddReaction";

const mainListItems = [
  { text: "Domov", icon: <HomeRoundedIcon />, link: "/admin" },
  {
    text: "E-shop",
    icon: <LocalGroceryStoreRoundedIcon />,
    link: "/admin/eshop",
  },
  {
    text: "Konzultácie",
    icon: <PeopleRoundedIcon />,
    link: "/admin/konzultacie",
  },
  {
    text: "Obhliadky",
    icon: <TourIcon />,
    link: "/admin/obhliadky",
  },
  {
    text: "Blog",
    icon: <AutoStoriesIcon />,
    link: "/admin/blogy",
  },
  {
    text: "Vlog",
    icon: <OndemandVideoIcon />,
    link: "/admin/vlogy",
  },
  {
    text: "Vinše",
    icon: <AddReactionIcon />,
    link: "/admin/vinse",
  },
  {
    text: "Dobročinné udalosti",
    icon: <EventIcon />,
    link: "/admin/dobrocinne-udalosti",
  },
  {
    text: "Členská zóna",
    icon: <StarIcon />,
    link: "/admin/clenska-zona",
  },
  { text: "Fórum", icon: <AssignmentRoundedIcon />, link: "/forum" },
];

const secondaryListItems = [
  {
    text: "Marketing",
    icon: <MarkEmailReadIcon />,
    link: "/admin/marketing",
  },
  {
    text: "Databáza rastlín",
    icon: <LocalFloristIcon />,
    link: "/admin/databaza-rastlin",
  },
  {
    text: "Dodávatelia",
    icon: <AddBusinessRoundedIcon />,
    link: "/admin/dodavatelia",
  },
];

export default function MenuContent() {
  const pathname = usePathname();
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <Link href={item.link}>
              <ListItemButton
                selected={
                  item.link != "/admin"
                    ? pathname.startsWith(item.link)
                    : pathname === "/admin"
                }
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "rgba(0, 161, 101, 0.15)",
                  },
                  "&.Mui-selected:hover": {
                    backgroundColor: "rgba(0, 161, 101, 0.25)",
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>

      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <Link href={item.link}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
