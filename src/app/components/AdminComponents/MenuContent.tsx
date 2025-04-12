"use client";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CollectionsIcon from "@mui/icons-material/Collections";
import ContactsIcon from "@mui/icons-material/Contacts";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mainListItems = [
  { text: "Domov", icon: <HomeRoundedIcon />, link: "/admin" },
  {
    text: "O nás",
    icon: <PeopleRoundedIcon />,
    link: "/admin/o-nas",
  },
  {
    text: "Viac o timbermaxe",
    icon: <QuestionMarkIcon />,
    link: "/admin/viac-o-timbermaxe",
  },
  {
    text: "Cenník",
    icon: <CurrencyExchangeIcon />,
    link: "/admin/cennik",
  },
  {
    text: "Služby",
    icon: <AutoStoriesIcon />,
    link: "/admin/blogy",
  },
  {
    text: "Galéria",
    icon: <CollectionsIcon />,
    link: "/admin/galeria",
  },
  {
    text: "Kontakt",
    icon: <ContactsIcon />,
    link: "/admin/vinse",
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
                <ListItemIcon sx={{ color: "#ffffff" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
