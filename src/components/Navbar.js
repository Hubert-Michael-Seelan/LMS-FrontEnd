import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul class="nav bg-dark">
        <li className="nav-items brand">
          <span class="material-symbols-outlined">full_coverage</span>
          Library Management System
        </li>
        <li class="nav-item">
          <NavLink
            class="nav-link active"
            style={{ color: "white", textDecoration: "inherit" }}
            aria-current="page"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink
            class="nav-link"
            style={{ color: "white", textDecoration: "inherit" }}
            to="/Books"
          >
            Books
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink
            class="nav-link"
            style={{ color: "white", textDecoration: "inherit" }}
            to="/Author"
          >
            Author
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink
            class="nav-link"
            style={{ color: "white", textDecoration: "inherit" }}
            to="/BooksPage"
          >
            BookStore
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink
            class="nav-link"
            style={{ color: "white", textDecoration: "inherit" }}
            to="/AuthorPage"
          >
            Authors Collection
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
