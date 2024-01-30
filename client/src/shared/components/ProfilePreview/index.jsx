import React from "react";
import { Container, Image, Name, User, Username } from "./styles";

const ProfilePreview = ({profileImage,displayName,username,feed}) => {
    return (
        <Container feed={feed} >
            <Image src={profileImage} alt=""/>
            <User>
                <Name feed={feed}>{displayName}</Name>
                <Username feed={feed}>@{username}</Username>
            </User>
        </Container>
    );
}

export default ProfilePreview;