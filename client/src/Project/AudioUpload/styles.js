import styled from "styled-components";
import { color, font, mixin, sizes } from "../../shared/utils/styles";

export const AudioButton = styled.button`
        width: 178px;
        height: 60px;
        border-radius: ${sizes.shortButtonBorderRadius};
        border: ${sizes.smallBorder};
        color: ${color.textSubtitle};
        ${font.medium};
        ${mixin.clickable};

`
export const Buttons = styled.div`
        display: flex;
        justify-content: space-between;
        width: 100%;
        p{
            margin-left: 10px;
            color: #9A9A9A;
            ${mixin.clickable};
            ${font.regular};
        }
`

export const AudioDiv = styled(AudioButton)``