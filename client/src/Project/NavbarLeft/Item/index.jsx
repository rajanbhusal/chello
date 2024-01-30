import React from "react";
import { Container } from "./styles";

const Item = ({title,icon}) => {
        return (
            <Container>
                <img src={icon} alt={title} />
                <p>{title}</p>
            </Container>
        );
}

export default Item;