import React from "react";
import { Container } from "./styles";
import SearchBar from "../../shared/components/SearchBar";
import SuggestionsTab from "./SuggestionsTab";

const NavbarRight = () => {
    return (
        <Container>
            <SearchBar />
            <SuggestionsTab />
        </Container>
    );
}

export default NavbarRight;