'use client'
import React, { useState } from 'react';
import { slide as Menu } from "react-burger-menu";

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleStateChange = (state: { isOpen: boolean }) => {
        setMenuOpen(state.isOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    };

    const getLinkConfig = (index: number) => {
        // Map theo thứ tự: 0-Solutions, 1-Benefits, 2-Customers, 3-Blog, 4-Contact
        const linkConfigs = [
            { href: "#solution", target: "#solution" },
            { href: "#benefit", target: "#benefit" },
            { href: "#customer", target: "#customer" },
            { href: "/blog", target: "" },
            { href: "/form", target: "" },
        ];
        return linkConfigs[index] || { href: "#", target: "" };
    };

    return (
        <div className="header">
            <div className="header__container">
                <div className="logo">
                    <img src="/assets/Link.webp" alt="" />
                </div>
                <div className="right">
                    <div className="button">
                        <div className="icon">
                            <img src="/assets/shop.webp" alt="" />
                        </div>
                        <div className="text">Shop</div>
                    </div>
                    <Menu
                        right
                        isOpen={menuOpen}
                        onStateChange={handleStateChange}
                        customBurgerIcon={
                            <div className="burger-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        }
                    >


                    </Menu>
                </div>

            </div>
        </div>
    )
}
export default Header;