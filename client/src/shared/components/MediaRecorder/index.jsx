import React, { useState, useRef, Fragment } from 'react';
import RecordAudio from '../../../App/assets/images/RecordAudio.gif'
import ReactAudioPlayer from 'react-audio-player';
import { AudioButton, AudioDiv } from '../../../Project/AudioUpload/styles';


const AudioRecordForm = ({ onAudioRecord }) => {
  const [isRecording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const mediaRecorder = useRef(null);
  
  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        setAudioURL(null);
        mediaRecorder.current = new MediaRecorder(stream);
        const chunks = [];

        mediaRecorder.current.ondataavailable = (e) => {
          if (e.data.size > 0) {
            chunks.push(e.data);
          }
    };


        mediaRecorder.current.onstop = () => {
          const blob = new Blob(chunks, { type: 'audio/wav' });
        
          onAudioRecord(blob)
        };

        mediaRecorder.current.start();
        setRecording(true);
      })
      .catch((error) => console.error('Error accessing microphone:', error));
  };

  const stopRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state !== 'inactive') {
      mediaRecorder.current.stop();
      setRecording(false);
    }
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  }

  return (
    <div>
      <AudioButton onClick={handleButtonClick}>
        {isRecording ? (
          <div style={{display: "flex",gap: "50px"}}>
            <p>Stop Recording</p>
            <img src={RecordAudio} alt="Record Audio"  width="200px" height="80px"/>
          </div>

        ) : (
          <>
            <p>Start Recording</p>
          </>
        )}
        {audioURL && (
          <AudioDiv>
            <ReactAudioPlayer
              src = {audioURL}
              controls
              autoplay
            />
          </AudioDiv>
          )}
      </AudioButton>
    </div>
  );
};

export default AudioRecordForm;
