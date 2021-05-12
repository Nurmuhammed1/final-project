import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Profile from "./Profile.js";

const Header = () => {
    return (
        <div className="popi">
            <div className="header">
                <div className="container">
                    <div className="navbar">
                        <div className="ham-menu">
                            <div class="hamburger-menu">
                                <input type="checkbox" id="menu__toggle" />
                                <label for="menu__toggle" class="menu__btn">
                                    <span></span>
                                </label>
                                <div className="navbar__menu menu__box">
                                    <Link to="/">
                                        <img
                                            className="img_book"
                                            src="https://img.icons8.com/clouds/100/000000/science-book.png"
                                        />
                                    </Link>

                                    <Link to="/">
                                        <a className="navbar_item" href="">
                                            Home
                                        </a>
                                    </Link>

                                    <Link to="/products">
                                        <a className="navbar_item" href="">
                                            Books
                                        </a>
                                    </Link>

                                    <Link>
                                        <a className="navbar_item" href="">
                                            Motivation
                                        </a>
                                    </Link>

                                    <Link>
                                        <a className="navbar_item" href="">
                                            News & Events
                                        </a>
                                    </Link>

                                    <Link>
                                        <a className="navbar_item" href="">
                                            Contacts
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <Link to="/cart">
                                <img
                                    className="header_img"
                                    src="https://img.icons8.com/fluent-systems-filled/48/4a90e2/fast-cart.png"
                                />
                            </Link>
                            <Profile />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
