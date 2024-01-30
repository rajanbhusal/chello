import styled from "styled-components";
import { font, mixin, sizes } from "../../shared/utils/styles";

export const VotingContainer = styled.div`
       padding: 0 ${sizes.paddingSmall};
`

export const Options = styled.div`
        display: flex;
        flex-direction: column;
        gap: ${sizes.marginLarge};
`
export const Button = styled.button`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 345px;
        height: 45px;
        border: ${sizes.smallBorder};
        ${mixin.clickable};
        background: linear-gradient(90deg, #B6B6F5 0%, #EFEFFF ${props => props.fillPercentage}%,transparent ${props => props.fillPercentage}%, transparent 100%);
`
export const Text = styled.div`
        ${font.dark};
`
export const Number = styled.div`
        ${font.medium};
        color: #5858FA;
`

export const Card = styled.div`
        width: 491px;
`

export const Post = styled.div`
        background-color: #F1F1F1;
        margin-top: ${sizes.marginLarge};
        padding-left: ${sizes.paddingLarge};
        padding-top: ${sizes.paddingLarge};
        display: flex;
        flex-direction: column;
        gap: ${sizes.marginLarge};
        height: 296px;
        border-radius: ${sizes.shortButtonBorderRadius};
`
export const VotingText = styled.div`
        ${font.medium};
        color: #414141;
`
export const VoteImage = styled.img`
        width: 19px;
        height: 19px;
        flex-shrink: 0;
        padding: 0 ${sizes.paddingSmall};
        ${mixin.clickable};
`
export const Stats = styled.div`
        color: #414141;
        ${font.regular};
        display: flex;
        align-items: center;
        gap: ${sizes.marginLarge};
        div{
            background-color: #c4c4c4;
            border-radius: 50%;
            height: 6px;
            width: 6px;
        }
        border-top: ${sizes.smallBorder};
`

export const ReactionButtons = styled.div`
        display: flex;
        align-items: center;
        gap: 60px;
        padding-bottom: ${sizes.paddingSmall};
        border: ${sizes.smallBorder};
        padding-left: ${sizes.paddingLarge};
        padding-top: ${sizes.paddingSmall};
`
export const Reaction = styled.img``
export const Comments = styled.img``
export const ShowStats = styled.img``