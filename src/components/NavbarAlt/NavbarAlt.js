import React from "react";
import "./NavbarAlt.css";
import logo from "../../assets/img/logo.svg";
import { Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarAlt = () => {
  return (
    <div
      className='d-flex align-items-center justify-content-center'
      style={{ background: "#000" }}
    >
      <div className='nav__wrapper d-flex align-items-center justify-content-between my-5'>
        <Link to='/'>
          <Image src={logo} fluid />
        </Link>
        <div className='text-uppercase d-flex flex-column align-items-center justify-content-center gap-3 align-self-end d-none d-md-block'>
          <h1 className='alt__hero__heading mt-5'>Mayfair</h1>
          <p className='alt__hero__paragraph'>Banana Island</p>
        </div>

        <a
          style={{ textDecoration: "none", color: "#fff" }}
          href='#contact-us'
          className='schedule__btn px-4 py-3 rounded-0'
          // onClick={() => setShow(true)}
        >
          Schedule Inspection
        </a>
      </div>
    </div>
  );
};

export default NavbarAlt;
