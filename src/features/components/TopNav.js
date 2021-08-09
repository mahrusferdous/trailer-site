import React from "react";
import "./TopNav.css";

function TopNav() {
    return (
        <nav>
            <div>tXsite</div>
            <form action="/" method="get">
                <button type="submit" className="searchBtn">
                    <i class="fas fa-search"></i>
                </button>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Enter your keywords"
                    name="s"
                />
                <button type="submit" className="login-register">
                    <i class="fas fa-user-circle"></i>Login/Register
                </button>
            </form>
        </nav>
    );
}

export default TopNav;
