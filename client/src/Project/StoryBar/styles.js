import styled from "styled-components";
import { color, font, mixin, sizes } from "../../shared/utils/styles";


export const Container = styled.div`
       

`;
export const Title = styled.h2`
        color: ${color.textBlue};
        font-family: ${font.regular};
`;

export const StoryContainer = styled.div`
        ${mixin.horizontalList};
        gap: ${sizes.flexGap};
        overflow-x: hidden;
`;

export const AddStoryButton = styled.div`
        width: ${sizes.storyWidth};
        height: ${sizes.storyHeight};
        border-radius: 8px;
        background-color: ${color.primary};
        color:${color.backgroundLight};
        text-align: center;
        ${mixin.single};
        flex-shrink: 0;
        ${mixin.clickable};
`

export const Story= styled.img`
        width: ${sizes.storyWidth};
        height: ${sizes.storyHeight};
        border-radius: 8px;
        ${mixin.single};
        ${mixin.clickable};
`