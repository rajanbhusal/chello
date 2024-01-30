import React, { useState } from "react";
import ProfilePreview from "../../shared/components/ProfilePreview";
import profileImage from "../../App/assets/images/feedImage.png";
import { Button, Card, Comments, Number, Options, Post, Reaction, ReactionButtons, ShowStats, Stats, Text, VoteImage, VotingContainer, VotingText } from "./styles";
import VoteIcon from "../../App/assets/images/Icons/Vote.svg";
import Heart from "../../App/assets/images/Icons/Heart.svg";
import Comment from "../../App/assets/images/Icons/Comment.svg";
import Stat from "../../App/assets/images/Icons/Stats.svg";

const Vote = () => {
    const [vote, setVote] = useState('100');
    return (
        <VotingContainer>
            <ProfilePreview
                profileImage={profileImage}
                displayName="Jessica Alba"
                username="Jessicaalba"
                feed={true}
            />
            <Card>
                <Post>
                    <VotingText>
                        <VoteImage src={VoteIcon} alt="vote"/> 
                        Guys what should i post more about? Let me know!</VotingText>
                    <Options>
                        <Button fillPercentage={50}>
                            <Text >Music</Text>
                            <Number>50</Number>
                        </Button>
                        <Button fillPercentage={30}>
                            <Text >Dance</Text>
                            <Number>30</Number>
                        </Button>
                        <Button fillPercentage={20}>
                            <Text >Movies</Text>
                            <Number>20</Number>
                        </Button>
                    </Options>
                    <Stats>
                        <p>77 votes</p>
                        <div></div>
                        <p>7 days left</p>
                    </Stats>
                </Post>
                <ReactionButtons>
                        <Reaction src={Heart} alt="heart"/>
                        <Comments src={Comment} alt="comment"/>
                        <ShowStats src={Stat} alt="stats"/>
                </ReactionButtons>
            </Card>
        </VotingContainer>
    );
}

export default Vote;