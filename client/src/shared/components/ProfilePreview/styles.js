import styled from "styled-components";
import { color, font, mixin, sizes } from "../../utils/styles";

export const Container = styled.div`
        display: ${props => props.feed ? "flex" : "block"};
        flex-direction: ${props => props.feed ? "row" : "column"};
        align-items: center;
        gap: ${props => props.feed ? sizes.marginSmall : sizes.marginLarge};
        ${mixin.clickable};
        justify-content: flex-start;
`;
export const User = styled.div``;
export const Image = styled.img`
        width: ${sizes.feedProfileImageWidth};
        height: ${sizes.feedProfileImageHeight};
        border-radius: ${sizes.feedProfileBorderRadius};
        border: ${sizes.smallBorder};
`;
export const Name = styled.div`
        ${font.medium};
        color: ${props => props.feed ? color.textBlack : color.backgroundLight};
`;
export const Username = styled.div`
        color: ${props => props.feed ? color.textBlack : color.backgroundLight};
`;
