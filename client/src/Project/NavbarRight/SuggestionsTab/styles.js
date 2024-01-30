import styled from "styled-components";
import { color, font, mixin, sizes } from "../../../shared/utils/styles";
import Cover from "../../../App/assets/images/feedProfileCover.jpg"

export const Container = styled.div`
    
`
export const Profile = styled.div`
        ${mixin.backgroundImage(Cover)};
        width: 297px;
        height: 117px;
        flex-shrink: 0;
        border-radius: 4px;
        border: ${sizes.smallBorder};
        padding: ${sizes.paddingSmall};
        margin-top: ${sizes.marginSmall};
        ${mixin.clickable};
`;
export const Title = styled.div`
        display: flex;
        justify-content: space-between;
`
export const Heading = styled.div`
        ${font.medium};
        color: ${color.textSubtitle};
        flex: 1;
`
export const Link = styled.div`
        ${font.regular};
        color: #9A9A9A;
        ${mixin.clickable};
`