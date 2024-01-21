import { useState } from "react";

import "./globals.css";

import LayoutComponent from "./layout/LayoutComponent";
import Router from "./routes/Router";
import AuthenticationPage from "./Pages/LoginPage/LoginAuthenticationPage";

function App() {
  return (
    <>
      {/* <AuthenticationPage/> */}
      <LayoutComponent>
        <Router />
      </LayoutComponent>
    </>
  );
}

export default App;
