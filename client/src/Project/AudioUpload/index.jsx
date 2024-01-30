import React, { Fragment, useEffect, useState } from "react";
import {Container,InputContainer,MediaInputs,Button, TextInput} from "../Create/styles.js";
import { AudioButton, AudioDiv, Buttons } from "./styles.js";
import { useLocation, useNavigate } from "react-router-dom";
import AudioRecordForm from "../../shared/components/MediaRecorder/index.jsx";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import ReactAudioPlayer from "react-audio-player";

const AudioUpload = ({isOpen, onClose,text}) => {
    const navigate = useNavigate();
    const [currentText, setText] = useState(text);
    const [recording, setRecording] = useState(false);
    const [audio, setAudio] = useState(null);

    
    const setRecordedAudio = (audio) => {
        setAudio(audio);
    }

    const handleAudioDrop = (acceptedFiles) => {
        setAudio(acceptedFiles[0]);
        setRecording(!recording);
        
    }

    const { getRootProps: getAudioRootProps, getInputProps: getAudioInputProps } = useDropzone({
        onDrop: handleAudioDrop,
        accept: 'audio/*',
    });



    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("text", currentText);
        formData.append("audio", audio);
        if (audio) {
            const fileType = audio.type.split("/")[0];
            if (fileType !== "audio") {
                alert("Please upload an audio file");
                setAudio(null);
                return;
            }
        }
        if (text || audio) {
            try{
                const response = await axios.post("http://127.0.0.1:8000/create_post/", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                console.log(response.data);
            }
            catch(err){
                console.log(err);
            }
        }
        else{
            alert("Please fill at least one field");
        }
        alert("Post created successfully");
        navigate("/")
        setText("");
        setAudio(null);
        onClose();
    }


    return (
        <Fragment>
            {isOpen ? (
            <Container >
            <InputContainer>
            <TextInput type="text"  defaultValue={text} onChange={(e) => setText(e.target.value)}/>
            <MediaInputs>
                {!recording && (
                    <AudioButton onClick={(e)=>{
                        e.preventDefault();
                        setRecording(!recording);
                    
                 }}>Record Audio</AudioButton>
                )}
                 {!recording && (
                    <AudioDiv onClick={(e)=>{
                        e.preventDefault();
                    }}>
                        <div {...getAudioRootProps()} >
                        <input {...getAudioInputProps()} />
                        <p>Attach Audio</p>
                    </div>
                    </AudioDiv>
                 )}
                 {recording && (
                    <AudioRecordForm onAudioRecord={setRecordedAudio}/>
                 )}
                 {audio && (
                        <ReactAudioPlayer 
                        src={URL.createObjectURL(audio)} 
                        autoPlay
                        controls
                        />
                 )}
            </MediaInputs>
            </InputContainer>
            <Buttons>
                <p onClick={()=>onClose()}>Cancel</p>
                <Button type="submit" onClick={handleSubmit}>Post</Button>
            </Buttons>
        </Container>
        ):null}
        </Fragment>
    )
}

export default AudioUpload;