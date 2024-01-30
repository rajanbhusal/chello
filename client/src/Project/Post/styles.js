import styled from "styled-components";
import { font, sizes } from "../../shared/utils/styles";

export const PostContainer = styled.div`
        width: 100%;
        
`
export const Preview = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: ${sizes.paddingLarge};
`;

export const Date = styled.div`
        color: #D3D3D3;
        ${font.regular};
        display: flex;
        align-items: center;
        gap: 5px;
        img{
            height: 20px;
            width: 20px;
        }
`;

export const Content = styled.div`


`
export const Picture = styled.img`
        width: 492px;
        height: 277px;
        object-fit: cover;
`
export const Text = styled.div`
        ${font.medium};
        color: #414141;
        margin-top: ${sizes.marginLarge};
        margin-bottom: ${sizes.marginLarge};
`
export const PictureGroup = styled.div`
        display: flex;
        gap: 2px;
`
export const LikeCount = styled.div`
        ${font.regular};
        color: #A8A8A8;
        margin-top: ${sizes.marginSmall};
        margin-bottom: ${sizes.marginLarge};
        padding-left: ${sizes.paddingLarge};

`