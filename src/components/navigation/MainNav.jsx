import React from "react";
import { navMainLinks } from "../helpers/navConstant";
import { Nav, Dropdown } from "react-bootstrap";

const MainNav = () => {
  return (
    <div>
      <img
        className="alpha-logo"
        src="https://www.alphapublishing.com/wp-content/themes/eduma/images/logo-sticky.png"
        data-src="https://www.alphapublishing.com/wp-content/themes/eduma/images/logo-sticky.png"
        alt="alpha-log"
        onClick={() => console.log("img clicked")}
      />
      <Nav>
        {navMainLinks.map((el) => (
          <Nav.Link key={el.id} href={el.href}>
            <Dropdown></Dropdown>
            {el.li}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
};

export default MainNav;
