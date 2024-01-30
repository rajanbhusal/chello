import React from "react";
import { Container } from "../styles";
import ProfilePreview from "../../../shared/components/ProfilePreview";
import ProfileImage from "../../../App/assets/images/feedImage.png"
import { Heading, Link, Profile, Title } from "./styles";

const SuggestionsTab = () => {
    return (
        <Container>
            <Title>
                <Heading>Suggestions</Heading>
                <Link href="#">See All</Link>
            </Title>
            <Profile>
                <ProfilePreview
                    profileImage={ProfileImage}
                    displayName="John Doe"
                    username="johndoe"
                    feed ={false}
                />
            </Profile>
            <Profile>
                <ProfilePreview
                    profileImage={ProfileImage}
                    displayName="John Doe"
                    username="johndoe"
                    feed ={false}
                />
            </Profile>
            <Profile>
                <ProfilePreview
                    profileImage={ProfileImage}
                    displayName="John Doe"
                    username="johndoe"
                    feed ={false}
                />
            </Profile>
        </Container>
    );
}

export default SuggestionsTab;