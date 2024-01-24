import { useEffect, useState } from "react";
import "./globals.css";
import LayoutComponent from "./layout/LayoutComponent";
import Router from "./routes/Router";
import AuthenticationPage from "./Pages/LoginPage/LoginAuthenticationPage";
import useAutoLogin from "./hooks/useAutoLogin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [doneAuth, setDoneAuth] = useState(false);
  const autoLogin = useAutoLogin();

  useEffect(() => {
    (async () => {
      try {
        await autoLogin(); // false is the default
      } catch (err) {
        console.log(err);
      } finally {
        // This block of code will be executed when the promise is done,
        // no matter if it's done or got an error
        setDoneAuth(true);
      }
    })();
  }, []);

  return (
    <>
      {!doneAuth && <AuthenticationPage />}
      {doneAuth && (
        <LayoutComponent>
          <Router />
        </LayoutComponent>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
