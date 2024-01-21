import ROUTES from "@/routes/ROUTES";
import React from "react";

type Link = {
  to: string;
  children: string;
};

const myLinks: Link[] = [
  { to: ROUTES.HOME, children: "Home page" },
  { to: ROUTES.REGISTER, children: "Register page" },
  { to: ROUTES.LOGIN, children: "Login page" },
  { to: ROUTES.LANDPAGE, children: "Land page" },
];
// no user
const loggedOutLinks: Link[] = [
  { to: ROUTES.HOME, children: "Home page" },
  { to: ROUTES.REGISTER, children: "Sign up" },
  { to: ROUTES.LOGIN, children: "Login" },
  { to: ROUTES.LANDPAGE, children: "Land page" },
];
// regular user
const loggedInLinks: Link[] = [
  { to: ROUTES.HOME, children: "Home page" },
  { to: ROUTES.LANDPAGE, children: "Land page" },
];

// admin user

export { myLinks, loggedInLinks, loggedOutLinks };

export default myLinks;
