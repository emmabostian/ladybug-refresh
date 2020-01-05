import React from "react"
import { Link } from "gatsby"
import logo from "../images/brand/logo.svg"
import "./header.css"

const Header = () => (
  <header className="header page-header">
    <div className="header-content-wrapper">
      <Link to="/">
        <img className="logo" src={logo} alt="Ladybug Podcast" />
      </Link>
      <nav className="nav">
        <Link to="episodes" activeStyle={{ borderBottom: "2px solid #f27979" }}>
          Episodes
        </Link>
        <Link to="books" activeStyle={{ borderBottom: "2px solid #f27979" }}>
          Book Club
        </Link>
        <Link to="about" activeStyle={{ borderBottom: "2px solid #f27979" }}>
          About Us
        </Link>
        <Link to="contact" activeStyle={{ borderBottom: "2px solid #f27979" }}>
          Contact
        </Link>
      </nav>
    </div>
  </header>
)

export default Header
