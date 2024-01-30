import React, { Fragment, useRef, useState } from "react";
import { AddStoryButton,  Container,  Story,  StoryBarContainer,  StoryContainer, Title } from "./styles";
import { story1,story2,story3,story4,story5,story6,story7,story8 } from "../../shared/utils/imagesList";
import useCustomSwipeable from "../../shared/hooks/swipeable";

const StoryBar = () => {
    const containerRef = useRef(null)
    const [swipeHandlers, scroll] = useCustomSwipeable(containerRef)
    
    return (
    <Container {...swipeHandlers}>
        <Title>Home</Title>
        <StoryContainer  ref={containerRef} >
            <AddStoryButton >
                + <br/> Add <br/> Story
            </AddStoryButton>
            <Story src={story1} alt="story1" />
            <Story src={story2} alt="story2" />
            <Story src={story3} alt="story3" />
            <Story src={story4} alt="story4" />
            <Story src={story5} alt="story5" />
            <Story src={story6} alt="story6" />
            <Story src={story7} alt="story7" />
            <Story src={story8} alt="story8" />
        </StoryContainer>
    </Container>
)}

export default StoryBar;