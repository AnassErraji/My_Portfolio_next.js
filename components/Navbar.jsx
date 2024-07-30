import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
//import logo from "/public/logo.png";
import Button from "react-bootstrap/Button";
//import { Link } from "react-router-dom";

import { CgGitFork, CgMail, CgVoicemail } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineComment,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import Link from "next/link";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }
  }
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", scrollHandler);
  }
  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Link href="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Acceuil
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link href="/about" onClick={() => updateExpanded(false)}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> A propos
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link href="/project" onClick={() => updateExpanded(false)}>
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projets
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link href="/AddTestimonial" onClick={() => updateExpanded(false)}>
                <AiOutlineComment style={{ marginBottom: "2px" }} />{" "}
                Ajouter temoignage
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link href="/testimonials" onClick={() => updateExpanded(false)}>Temoignages 
                <CgFileDocument style={{ marginBottom: "2px" }} /> 
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link href="/contact" onClick={() => updateExpanded(false)}>
                <CgMail style={{ marginBottom: "2px" }} /> Contact moi
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
