import { ReactElement } from "react";
import "./App.css";

import { Amplify } from "aws-amplify";
import config from "./aws-exports";
import { RecoilRoot } from "recoil";
import MainPage from "./pages/MainPage";

Amplify.configure(config);

function App(): ReactElement {
  return (
    <RecoilRoot>
      <MainPage />
    </RecoilRoot>
  );
}

export default App;
