import React, { ReactElement, useEffect, useMemo, useState } from "react";
import "./App.css";

import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import { createTransactions, deleteTransactions } from "./graphql/mutations";
import { listTransactions } from "./graphql/queries";
import { API } from "aws-amplify";
import { ListTransactionsQuery, Transactions } from "./API";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
import { notEmpty } from "./common_helpers/notEmpty";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { Wallet } from "./components/providers/Wallet";
import { lightGreen, lightBlue } from "@mui/material/colors";
Amplify.configure(config);

function App(): ReactElement {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // const theme = createTheme({
  //   palette: {
  //     primary: lightGreen,
  //     secondary: lightBlue,
  //     type: prefersDarkMode ? "dark" : "light",
  //   },
  // });

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          primary: lightGreen,
          secondary: lightBlue,
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Wallet />
      <CssBaseline />
      <Box height="100vh" display="flex" flexDirection="column"></Box>
    </ThemeProvider>
  );
}

export default App;
