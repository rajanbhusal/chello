import React from "react";
import { Comments, Reaction, ReactionButtons } from "./styles";
import Heart from "../../../App/assets/images/Icons/Heart.svg";
import Comment from "../../../App/assets/images/Icons/Comment.svg";

const ButtonGroup = () => {
        return (
            <ReactionButtons>
                        <Reaction src={Heart} alt="heart"/>
                        <Comments src={Comment} alt="comment"/>
            </ReactionButtons>
        )
}

export default ButtonGroup;