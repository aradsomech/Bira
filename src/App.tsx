import { useEffect, useState } from "react";

import "./globals.css";

import LayoutComponent from "./layout/LayoutComponent";
import Router from "./routes/Router";
import AuthenticationPage from "./Pages/LoginPage/LoginAuthenticationPage";
import useAutoLogin from "./hooks/useAutoLogin";

function App() {
  const [doneAuth, setDoneAuth] = useState(false);
  const autoLogin = useAutoLogin();
  useEffect(() => {
    (async () => {
      try {
        await autoLogin(); //false is default
      } catch (err) {
        console.log(err);
      } finally {
        //this block of code will executed when the promise done
        //no matter if its done or got error
        setDoneAuth(true);
      }
    })();
  }, []);
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
