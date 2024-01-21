import React, { ReactNode } from "react";

const MainComponent = ({ children }: { children: ReactNode }) => {
  return <div className="h-screen">{children}</div>;
};

export default MainComponent;
