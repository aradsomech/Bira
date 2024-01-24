import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import ROUTES from "./ROUTES";

import AboutPage from "@/Pages/LandPage/LandPage";
import LoginAuthenticationPage from "@/Pages/LoginPage/LoginAuthenticationPage";
import Tasks from "@/Pages/TaskPage/Tasks";
import RegisterAuthenticationPage from "@/Pages/RegisterPage/RegisterAuthenticationPage";
import LandPage from "@/Pages/LandPage/LandPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.LANDPAGE} element={<LandPage />} />
      <Route path={ROUTES.HOME} element={<Tasks />} />
      <Route path={ROUTES.LOGIN} element={<LoginAuthenticationPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterAuthenticationPage />} />
    </Routes>
  );
};

export default Router;
