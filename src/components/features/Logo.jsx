import React from "react";
import "../../assets/css/Logo.css";
import { useNavigate } from "react-router";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div className="width-log table-cell">
      <img
        className="lazyloaded"
        src="https://www.alphapublishing.com/wp-content/themes/eduma/images/logo-sticky.png"
        data-src="https://www.alphapublishing.com/wp-content/themes/eduma/images/logo-sticky.png"
        alt="alpha-log"
        width={153}
        height={40}
        onClick={() => navigate("/", { replace: true })}
      />
    </div>
  );
};

export default Logo;
