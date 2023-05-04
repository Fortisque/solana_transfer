import React, { ReactElement, useEffect, useMemo, useState } from "react";

import { Amplify } from "aws-amplify";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import NavBar from "../components/navigation/NavBar";
import { WalletProvider } from "./WalletProvider";
import { useRecoilState } from "recoil";
import { isDarkThemeAtom } from "../common_helpers/atoms";

export default function MainPage() {
  const [isDarkThemeAtomValue, setIsDarkTheme] =
    useRecoilState(isDarkThemeAtom);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const isDarkTheme = isDarkThemeAtomValue ?? prefersDarkMode;
  useEffect(() => {
    if (isDarkThemeAtomValue == null) {
      setIsDarkTheme(prefersDarkMode);
    }
  }, [isDarkTheme]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: { main: "#fff" },
          mode: isDarkTheme ? "dark" : "light",
          // WalletDialog in solana-labs/wallet-adapter has a bug whereby it always
          // sets the background to grey['900'] (which is mostly black) and sets
          // the text on top to be the primary text color, which won't work well
          // when the user is in light mode since the text for light mode is black.
          // This monkey patch allows us to move forward for now, but obviously is fairly jank
          // as it overrides this arbitrary black value with a white color instead.
          // If we had more time we can propose a change to https://github.com/solana-labs/wallet-adapter/blob/master/packages/ui/material-ui/src/WalletDialog.tsx#L68
          // to use an always white color such as grey[200], or consider overriding the modal to always
          // be dark themed.
          grey: { ...grey, "900": isDarkTheme ? grey["900"] : grey["200"] },
        },
      }),
    [isDarkTheme]
  );
  return (
    <ThemeProvider theme={theme}>
      <WalletProvider>
        <CssBaseline />
        <NavBar />
        <Box height="100vh" display="flex" flexDirection="column"></Box>
      </WalletProvider>
    </ThemeProvider>
  );
}
