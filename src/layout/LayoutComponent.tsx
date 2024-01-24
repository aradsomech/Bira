// LayoutComponent.jsx
import React, { ReactNode } from "react";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import MainComponent from "./MainComponent/MainComponent";
import FooterComponent from "./FooterComonent/FooterComponent";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useLocation } from "react-router-dom";

const LayoutComponent = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  console.log("Current Route:", location.pathname);

  const isLandingPage = location.pathname === "/land";
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  console.log("Is Landing Page:", isLandingPage);
  console.log("Is Login Page:", isLoginPage);
  console.log("Is Register Page:", isRegisterPage);

  const showHeader = !isLandingPage || isLoginPage || isRegisterPage;

  console.log("Show Header:", showHeader);

  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {showHeader && <HeaderComponent />}
        <MainComponent>{children}</MainComponent>
        <FooterComponent />
      </ThemeProvider>
    </div>
  );
};

export default LayoutComponent;
