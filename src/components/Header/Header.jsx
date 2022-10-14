import React from "react";
import Button from "../Button/Button";
import "./header.scss";
function Header({ title }) {
  return (
    <header className="header">
      <h2 className="header__title">{title ? title : "Mirsidiq"}</h2>
      <div className="header__options">
        <form className="header__form">
          <label htmlFor="header-form" className="header__label">
            <input
              type="text"
              name="header-form"
              id="header-form"
              className="header__input"
              placeholder="search here ..."
            />
            <i className="fa-solid fa-search"></i>
          </label>
        </form>
        <div className="header__icons">
          <i className="fa-solid fa-gift header__icon">
            <span className="header__circle">13</span>
          </i>
          <i className="fa-solid fa-bell header__icon">
            <span className="header__circle">17</span>
          </i>
          <i className="fa-solid fa-message header__icon">
            <span className="header__circle">23</span>
          </i>
        </div>
        <Button className="header__btn">generate report</Button>
      </div>
    </header>
  );
}

export default Header;
