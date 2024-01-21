import React, { ReactNode } from "react";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import MainComponent from "./MainComponent/MainComponent";
import FooterComponent from "./FooterComonent/FooterComponent";
import { ThemeProvider } from "@/components/ThemeProvider";

const LayoutComponent = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <HeaderComponent />
        <MainComponent>{children}</MainComponent>
        <FooterComponent />
      </ThemeProvider>
    </div>
  );
};

export default LayoutComponent;
