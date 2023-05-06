import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-material-ui";

import { useRecoilState } from "recoil";
import { isDarkThemeAtom } from "../../common_helpers/atoms";
import "../../css/NavBar.css";
import LightDarkSwitch from "./LightDarkSwitch";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

export default function NavBar() {
  const [isDarkTheme] = useRecoilState(isDarkThemeAtom);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static">
        <Toolbar disableGutters className="nav-bar-toolbar">
          <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
            <img
              src={
                isDarkTheme === true
                  ? "assets/img/solana_text_dark_theme.png"
                  : "assets/img/solana_text.png"
              }
              className="nav-logo"
              alt="logo"
            />
          </Box>
          <Box className="nav-right">
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1,
              }}
            >
              <WalletMultiButton color="secondary" />
              <WalletDisconnectButton color="secondary" />
            </Box>
            <LightDarkSwitch />
            <Box
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="wallet-menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem>
                  <WalletMultiButton color="secondary" />
                </MenuItem>
                <MenuItem>
                  <WalletDisconnectButton color="secondary" />
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
