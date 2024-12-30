import React from "react";
import "./header.css"; // CSS 파일 가져오기

const Header: React.FC = () => {
  return (
    <header>
      <div className="container">
        <h1>Logo monsteratech or NShomeshopping?</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
