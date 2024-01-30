import React, { useEffect, useState } from "react";
import { Content, Date, LikeCount, Picture, PictureGroup, PostContainer, Preview, Text } from "./styles";
import profileImage from "../../App/assets/images/feedImage.png";
import ProfilePreview from "../../shared/components/ProfilePreview";
import MoreIcon from "../../App/assets/images/Icons/More.png";
import PostImage from "../../App/assets/images/PostImage.jpg";
import ButtonGroup from "../../shared/components/ReactionButtons";
import axios from "axios";
import formatDate from "../../shared/utils/dateConverter";
import ReactAudioPlayer from "react-audio-player";

const Post = ({text,image,date,video,audio,profile}) => {
    const imageUrl = "http://127.0.0.1:8000" + image;
    const videoURL = "http://127.0.0.1:8000" + video;
    const audioURL = "http://127.0.0.1:8000" + audio;
    const profileURL = "http://127.0.0.1:8000" + profile?.profile_image;
    const formattedDate = formatDate(date);

    return (
        <PostContainer>
            <Preview>
                <ProfilePreview
                    profileImage={profileURL}
                    displayName={profile?.display_name}
                    username={profile?.username}
                    feed={true}
                />
                <Date>
                    <p>{formattedDate}</p>
                    <img src={MoreIcon} alt="more"/>
                </Date>
            </Preview>
            <Content>
                <Text>{text}</Text>
                    <PictureGroup>
                        {image && <Picture src={imageUrl} alt=""/>}
                        {video && <video src={videoURL} controls width="100%"/>}
                        {audio && <ReactAudioPlayer src={audioURL} controls autoPlay/>}
                    </PictureGroup>
            </Content>
            <ButtonGroup/>
            <LikeCount>122 People Like this</LikeCount>
        </PostContainer>
    )
}

export default Post;