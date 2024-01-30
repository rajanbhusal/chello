import styled from "styled-components";
import { color, font, sizes } from "../../utils/styles";

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    border: ${sizes.smallBorder};
    border-radius: ${sizes.searchBarBorderRadius};
    width: 100%;
    height: ${sizes.searchBarHeight};
    
`
export const Icon = styled.img`
    margin: 0 ${sizes.paddingSmall};
`
export const Input = styled.input`
    border: none;
    outline: none;
    opacity: 0.8;
    &::placeholder {
        ${font.regular};
    }
`
export const Button = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
`