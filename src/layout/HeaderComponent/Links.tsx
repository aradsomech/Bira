import React from "react";
import { useSelector } from "react-redux";
import { loggedInLinks, loggedOutLinks } from "../MyLinks";
import NavLinkComponent from "./NavLinkComponent";

interface AuthState {
  loggedIn: boolean;
  userData: {
    isAdmin: boolean;
    isBusiness: boolean;
  };
}

const Links: React.FC = () => {
  const loggedIn = useSelector(
    (bigPie: { auth: AuthState }) => bigPie.auth.loggedIn
  );
  const userData = useSelector(
    (bigPie: { auth: AuthState }) => bigPie.auth.userData
  );

  return (
    <div>
      <div>
        {loggedIn && !userData.isAdmin
          ? loggedInLinks.map((myItem, index) => (
              <NavLinkComponent to={myItem.to} key={index}>
                {myItem.children}
              </NavLinkComponent>
            ))
          : null}

        {!loggedIn &&
          loggedOutLinks.map((myItem, index) => (
            <NavLinkComponent to={myItem.to} key={index}>
              {myItem.children}
            </NavLinkComponent>
          ))}
      </div>
    </div>
  );
};

export default Links;
