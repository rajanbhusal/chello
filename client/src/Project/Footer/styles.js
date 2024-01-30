import styled from "styled-components";
import { color, font, mixin, sizes } from "../../shared/utils/styles";

export const FooterContainer = styled.div`        
        border-top: ${sizes.borderRight};
        margin-top: ${sizes.marginLarge};
        display: flex;
        justify-content: space-evenly;
        align-items: flex-start;
`
export const Group = styled.div`
        color: ${color.textMediumGrey};
        p{
            ${font.regular};
        }
        h4{
            color: ${color.textBlue};
            ${font.medium};
        }
        h4,p{
            ${mixin.clickable};
        }
`
export const Socials = styled.div`
        display: flex;
        gap: ${sizes.marginLarge};

`
export const Icon = styled.div`
        border-radius: 50%;
        background-color: ${color.textBlue};
        height: 30px;
        width: 30px;
`
export const CopyRightText = styled.div`
        text-align: center;
        color: ${color.textMediumGrey};
        margin-top: 100px;
        margin-bottom: ${sizes.marginLarge};
`