import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-material-ui";

import { useRecoilState } from "recoil";
import { isDarkThemeAtom } from "../../common_helpers/atoms";
import "../../css/NavBar.css";
import LightDarkSwitch from "./LightDarkSwitch";

export default function NavBar() {
  const [isDarkTheme] = useRecoilState(isDarkThemeAtom);
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
            <WalletMultiButton color="secondary" />
            <WalletDisconnectButton color="secondary" />
            <LightDarkSwitch />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
