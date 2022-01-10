import React, { useEffect, useRef,useState } from 'react';
import { FaPlay, FaPause } from "react-icons/fa";
import WaveSurfer from "wavesurfer.js";

const formWaveSurferOptions = ref => ({
  container: ref,
  waveColor: "#808080",
  progressColor: "black",
  cursorColor: "black",
  barWidth: 1,
  barGap:3,
  height: 30,
  responsive: true,
  normalize: true,
  partialRender: true,
  hideScrollbar:true
});

export default function Audio2() {
 const [dur,setDur] =useState(0)
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const AudioDur = useRef()
  const [play, setPlay] = useState(false);
  const [url,setUrl]=useState("./audioo.mp3")

  // create new WaveSurfer instance
  // On component mount and when url changes

  useEffect(() => {
    setPlay(false);
    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url);

    wavesurfer.current.on("pause", function() {
        return () => wavesurfer.current.destroy();
    });  
  }, [url]);

  const handlePlayPause = () => {
    setPlay(!play);
    if(!play){
     wavesurfer.current.play(); 
     const second= Math.floor(AudioDur.current.duration);
    setDur(second); 
    }
    else{
        wavesurfer.current.pause(); 
    }
  };
  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    if(!isNaN(secs)){
    return `${returnedMinutes}:${returnedSeconds}`;
    }
    else{
      return `00:00`;
    }
  }

  return (
    <>
        <div className='w-2/6 relative p-2 flex bg-gray-100 rounded-xl h-14 overflow-hidden top-10 left-10 items-center'>
        <audio ref={AudioDur}>
            <source  src={url} type="audio/mp3"/>
        </audio>
        <div className='p-3 absolute rounded-full flex items-center justify-center bg-sky-500'>
          <button onClick={handlePlayPause} className='text-base text-white'>
            {play?<FaPause/>:<FaPlay className='pl-1'/>}</button>
            </div>
        
      <div id="waveform" ref={waveformRef} className='w-10/12 relative left-12 p-0 cursor-pointer pr-8'>
      </div>
      <div className='absolute right-2 top-9 text-gray-500 text-xs font-bold'>
          <p>{(calculateTime(dur))}</p>
          </div>
    </div>
    </>
  );
}
