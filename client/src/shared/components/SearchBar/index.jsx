import React from "react";
import SearchIcon from "../../../App/assets/images/SearchIcon.png";
import { Button, Form, Icon, Input } from "./styles";

const SearchBar = () => {
    return (
        <Form>
            <Icon src={SearchIcon} alt="search"/>
            <Input type="text" placeholder="Search" />
            <Button hidden>Submit</Button>
        </Form>
    );
}

export default SearchBar;