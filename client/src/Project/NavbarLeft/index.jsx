import React from "react";
import { Image, NavBarContainer } from "./styles";
import menuItems from "../../shared/utils/menuItems";
import Item from "./Item";
import Profile from "../../App/assets/images/AccountProfile.png";

const NavbarLeft = () => {
    return (
        <NavBarContainer>
            <Image src={Profile} alt="logo" />
            {menuItems.map((item) => (
                <Item key={item.id} {...item} />
            ))}
        </NavBarContainer>
    );
};

export default NavbarLeft;