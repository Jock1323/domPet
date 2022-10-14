import React, { useEffect, useRef, useState } from "react";
import "./sidebar.scss";
import sideBarLogo from "../../assets/images/logo-full.png";
import Logo from "../../assets/images/logo.png";
import sideBarUser from "../../assets/images/avatar/7.jpg";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
function Sidebar({ setTitle }) {
  const [dropdown, setDropdown] = useState(false);
  const dashboardTitleRef = useRef();
  const formsTitleRef = useRef();
  const tablesTitleRef = useRef();
  return (
    <>
      <nav className="sidebar">
        <div className="sidebar__header">
          <div className="sidebar__header-inner">
            <img src={sideBarLogo} alt="a logo" />
            <div className="toggle-wrapper">
              <span className="toggle-line"></span>
              <span className="toggle-line"></span>
              <span className="toggle-line"></span>
            </div>
          </div>
          <div className="sidebar__user">
            <div className="sidebar__user-border">
              <img
                src={sideBarUser}
                alt="user avatar"
                width={60}
                height={60}
                className="sidebar__user-avatar"
              />
            </div>
            <div className="sidebar__user-info">
              <h4 className="sidebar__user-title">
                Hi, <span className="sidebar__user-name">Lisa</span>
              </h4>
              <span className="sidebar__user-email">lisa@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="sidebar__body">
          <ul className="sidebar__body-list">
            <NavLink to="/home" className="sidebar__body-item">
              <div
                className={`sidebar__body-item__inner ${
                  dropdown ? "sidebar__body-item__inner-active" : ""
                }`}
                onClick={() => {
                  setDropdown(!dropdown);
                  setTitle(dashboardTitleRef.current.textContent);
                }}
              >
                <i className="fa-solid fa-grip"></i>
                <span
                  className={`sidebar__body-item__title ${
                    dropdown ? "sidebar__body-item__title-active" : ""
                  }`}
                  ref={dashboardTitleRef}
                >
                  Dashboard
                </span>
                <i
                  className={`fa-solid fa-chevron-right sidebar__body-item__arrow${
                    dropdown ? "-active" : ""
                  }`}
                ></i>
              </div>
              <ul
                className={`sidebar__body-dropdown${
                  dropdown ? "__active" : ""
                }`}
              >
                <li className="sidebar__body-dropdown__item">
                  <span className="sidebar__body-dropdown_romb"></span>
                  Dashboard light
                </li>
                <li className="sidebar__body-dropdown__item">
                  <span className="sidebar__body-dropdown_romb"></span>
                  Dashboard dark
                </li>
                <li className="sidebar__body-dropdown__item">
                  <span className="sidebar__body-dropdown_romb"></span>
                  Dashboard dark
                </li>
                <li className="sidebar__body-dropdown__item">
                  <span className="sidebar__body-dropdown_romb"></span>
                  Dashboard dark
                </li>
              </ul>
            </NavLink>
            <NavLink
              to="/forms"
              className="sidebar__body-item"
              onClick={() => setTitle(formsTitleRef.current.textContent)}
            >
              <div className="sidebar__body-item__inner">
                <i className="fa-solid fa-grip"></i>
                <span className="sidebar__body-item__title" ref={formsTitleRef}>
                  Forms
                </span>
              </div>
            </NavLink>
            <NavLink
              to="/tables"
              className="sidebar__body-item"
              onClick={() => setTitle(tablesTitleRef.current.textContent)}
            >
              <div className="sidebar__body-item__inner">
                <i className="fa-solid fa-grip"></i>
                <span
                  className="sidebar__body-item__title"
                  ref={tablesTitleRef}
                >
                  Tables
                </span>
              </div>
            </NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
