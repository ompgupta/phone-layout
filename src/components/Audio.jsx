import React, { useRef, useState ,useEffect} from 'react'
import { FaPlay, FaPause } from "react-icons/fa";
import Audio2 from "./Audio2"


const Audio = () => {
  const [isplay,setIsplay]=useState(false);
  const [dur,setDur] =useState(0)
  const [currentTime, setCurrentTime] = useState(0);
  const audplay =useRef();
  const progressBar = useRef();
  const animationRef = useRef(); 
  const waveformRef =useRef();
  
  
  function playBtn(){
    setIsplay(!isplay);
    if(!isplay){
    audplay.current.play()
    animationRef.current = requestAnimationFrame(whilePlaying)
    
    }
    else{
    audplay.current.pause();
    cancelAnimationFrame(animationRef.current);
    }
  } 
  const whilePlaying = () => {
    progressBar.current.value = audplay.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }
  useEffect(()=>{
  const second= Math.floor(audplay.current.duration);
  progressBar.current.max = second;
setDur(second);
  },[audplay?.current?.loadedmetadata, audplay?.current?.readyState]);
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
  const changeRange = () => {
    audplay.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }
  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value /progressBar.duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  }
  
    return (
        <>
        <div className='w-2/3 top-10 relative'>
        
        </div>
        <div className='w-1/5 h-auto bg-gray-100 px-3 py-2 rounded-xl m-4 relative'>
          <div className='w-full flex items-center '>
          <audio ref={audplay}>
          <source src="./audioo.mp3" type="audio/mp3"></source>
          </audio>
          <div className='p-3 bg-sky-500 rounded-full flex items-center justify-center'>
          <button onClick={playBtn} className='text-base text-white'>
            {isplay?<FaPause/>:<FaPlay className='pl-1'/>}</button>
            </div>
            <div className='ml-3 w-10/12 mb-1'>
          <input type="range" className='slider' defaultValue="0" ref={progressBar} onChange={changeRange} /> 
          </div>
          <div className='absolute right-2 top-9 text-gray-500 text-xs font-bold'>
          <p>{(calculateTime(dur))}</p>
          </div>
        </div>
        </div>
        {/* *******another audio******************** */}
         <Audio2/>
        
        </>
    )
}

export default Audio;
