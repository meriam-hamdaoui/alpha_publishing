import React from "react";
import { navMainLinks } from "../helpers/navConstant";
import { Nav, Dropdown } from "react-bootstrap";

const Menu = () => {
  return (
    <div>
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

export default Menu;
