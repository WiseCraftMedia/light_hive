import React from "react";

function Header() {
  return (
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a href="#" class="nav-link active" aria-current="page">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            Current Projects
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            Contact
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            About the Artist
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
