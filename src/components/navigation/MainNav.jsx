import React from "react";
import { navMainLinks } from "../helpers/navConstant";
import { Nav, Dropdown } from "react-bootstrap";
import Logo from "../features/Logo";
import "../../assets/css/MainNav.css";

const MainNav = () => {
  return (
    <header className="site-header">
      <div className="container">
        <Logo />
      </div>
    </header>
  );
};

export default MainNav;
