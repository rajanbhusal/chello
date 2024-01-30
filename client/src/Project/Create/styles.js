import styled from "styled-components";
import { color, font, mixin, sizes } from "../../shared/utils/styles";

export const Container = styled.form`
        background-color: #F1F1F1;
        width: 738px;
        height: 193px;
        ${sizes.formBorder};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @media (max-width: 768px) {
                width: 100%;
                
        }
`;
export const Preview = styled.div`
        background-color: ${color.backgroundLight};
        width: 100%;
        height: 100%;
        border: ${sizes.formBorder};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: ${sizes.paddingSmall};
`
export const InputContainer = styled.div`
        background-color: ${color.backgroundLight};
        max-width: 709px;
        border: ${sizes.formBorder};
        ${mixin.verticalList};
        height: 117px;
        width: 709px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        padding-left: ${sizes.paddingSmall};
        @media (max-width: 768px) {
                width: 100%;
        }
`
export const TextInput = styled.input`
        background-color: ${color.backgroundLight};
        border: none;
        outline: none;
        &::placeholder {
            color: #9A9A9A;
            ${font.medium};
            opacity: 0.8;
        }
        ${font.regular};
        justify-self: center;
        padding-top: ${sizes.paddingLarge};
       
`

export const MediaInputs = styled.div`
        display: flex;
        gap: ${sizes.marginLarge};
        padding-bottom: ${sizes.paddingSmall};
`
export const Button = styled.button`
        background-color: ${color.textBlue};
        color: ${color.backgroundLight};
        width: ${sizes.shortButtonWidth};
        height: ${sizes.shortButtonHeight};
        border: none;
        border-radius: ${sizes.shortButtonBorderRadius};
        ${font.medium};
        margin:  ${sizes.marginSmall};
        align-self: flex-end;
        ${mixin.clickable};
`;