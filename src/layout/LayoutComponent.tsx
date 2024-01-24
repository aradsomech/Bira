// LayoutComponent.jsx
import React, { ReactNode } from "react";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import MainComponent from "./MainComponent/MainComponent";
import FooterComponent from "./FooterComonent/FooterComponent";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useLocation } from "react-router-dom";
import ROUTES from "@/routes/ROUTES";

const LayoutComponent = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const isLandingPage = location.pathname === ROUTES.LANDPAGE;
  const isLoginPage = location.pathname === ROUTES.LOGIN;

  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {!isLandingPage && !isLoginPage && <HeaderComponent />}
        <MainComponent>{children}</MainComponent>
        <FooterComponent />
      </ThemeProvider>
    </div>
  );
};

export default LayoutComponent;
