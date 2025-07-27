import React, { useEffect, useState } from "react";
import { CentreContents, FeedContainer } from "./styles";
import StoryBar from "../StoryBar";
import NavbarLeft from "../NavbarLeft";
import NavbarRight from "../NavbarRight";
import Vote from "../Vote";
import Create from "../Create";
import AudioRecordForm from "../../shared/components/MediaRecorder";
import AudioUpload from "../AudioUpload";
import Post from "../Post";
import axios from "axios";


const Feed = () => {
    const [postData, setPostData] = useState(null);
    useEffect(() => {
        axios.get("https://bookish-sniffle-55rj96vp6w4fvqj6-8000.app.github.dev/get_posts/")
            .then((response) => {
                setPostData(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    },[])
    console.log(postData);
    postData?.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
    });
    return (
        <FeedContainer>
             <NavbarLeft />
             <CentreContents>
                <StoryBar />
                <Create />
                {/* <Vote /> */}
                {postData && postData.map((post) => {
                    return (
                        <Post
                            key={post.id}
                            id={post.id}
                            text={post?.text}
                            image={post?.images[0]?.image}
                            video={post?.videos[0]?.video}
                            audio={post.audios[0]?.audio}
                            likes={post?.likes}
                            comments={post?.comments}
                            date={post?.created_at}
                            profile={post?.profile}
                        />
                    )
                })}
             </CentreContents>
            <NavbarRight />
        </FeedContainer>
    );
}

export default Feed;