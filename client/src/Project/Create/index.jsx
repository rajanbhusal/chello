import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, InputContainer, MediaInputs, Preview, TextInput } from "./styles";
import {useDropzone} from 'react-dropzone';
import Image from "../../App/assets/images/Icons/Image.svg";
import Video from "../../App/assets/images/Icons/videocamera.svg";
import Audio from "../../App/assets/images/Icons/microphone.svg";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import AudioUpload from "../AudioUpload";


const Create= () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const [photo, setPhoto] = useState(null);
    const [text, setText] = useState("");
    const [video, setVideo] = useState(null);
    const [isOpen, setOpen] = useState(false);
    const [audio, setAudio] = useState(null);
    const [post, setPost] = useState(null);
    const [isUploading, setUploading] = useState(false);

    const onClose = () => {
        setOpen(false);
        navigate("/");
    }
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const modalParam = searchParams.get("modal");
        if (modalParam === "audio") {
            setOpen(true);
        }
    },[location.search,isOpen])

    const handlePhotoDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setPhoto(acceptedFiles[0]);
      };
    const handleTextChange = (event) => {
        setText(event.target.value);
    }
    const handleVideoDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setVideo(acceptedFiles[0]);
    }
    const handleAudioDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setAudio(acceptedFiles[0]);
    }
    const { getRootProps: getPhotoRootProps, getInputProps: getPhotoInputProps } = useDropzone({
        onDrop: handlePhotoDrop,
        accept: 'image/*',
      });
    const { getRootProps: getVideoRootProps, getInputProps: getVideoInputProps } = useDropzone({
        onDrop: handleVideoDrop,
        accept: 'video/*',
    });
    const { getRootProps: getAudioRootProps, getInputProps: getAudioInputProps } = useDropzone({
        onDrop: handleAudioDrop,
        accept: 'audio/*',
    });

    

    const handleSubmit = async (e) => {
        const formData = new FormData();
        formData.append("text", text);
        formData.append("image", photo);
        formData.append("video", video);
        formData.append("audio", audio);
        //check files types
        if (photo) {
            const fileType = photo.type.split("/")[0];
            if (fileType !== "image") {
                alert("Please upload an image file");
                setPhoto(null);
                return;
            }
        }
        if (video) {
            const fileType = video.type.split("/")[0];
            if (fileType !== "video") {
                alert("Please upload a video file");
                setVideo(null);
                return;
            }
        }
        if (audio) {
            const fileType = audio.type.split("/")[0];
            if (fileType !== "audio") {
                alert("Please upload an audio file");
                setAudio(null);
                return;
            }
        }
        if (text || photo || video || audio) {
            try{
                const response = await axios.post("https://probable-orbit-v7qxwqppgqhxqr9-8000.app.github.dev/create_post/", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                console.log(response.data);
                alert("Post created successfully");
            }
            catch(err){
                console.log(err);
            }
        }
        else{
            alert("Please fill at least one field");
        }
        
    }
    return (
            <Container onSubmit={handleSubmit}>
                {!isOpen ? (
                    <Fragment>
                        <InputContainer>
            <TextInput type="text" placeholder="Compose new post" onChange={handleTextChange}/>
            { (photo || video) && (
                <Preview>
                {photo && <img src={URL.createObjectURL(photo)} alt="photo" width="100px" height="100px"/>}
                {video && <video src={URL.createObjectURL(video)} controls width="200px" height="100px"/>}
            </Preview>
            )}
            <MediaInputs>
                 <div {...getPhotoRootProps()}>
                    <input {...getPhotoInputProps()} />
                    <img src={Image} alt="image"/>
                </div>
                <div {...getVideoRootProps()}>
                    <input {...getVideoInputProps()} />
                    <img src={Video} alt="video"/>
                </div>
                <img src={Audio} alt="audio" onClick={()=>{
                    setOpen(true);
                    navigate("/?modal=audio");
                }}/>
            </MediaInputs>
            </InputContainer>
            <Button type="submit">Post</Button>
            </Fragment>
                    
                ) : (
                    <Fragment>
                        <AudioUpload 
                        isOpen={isOpen}
                        onClose={onClose}
                        text = {text}
                        />
                    </Fragment>
                )}
        </Container>
    )
}

export default Create;