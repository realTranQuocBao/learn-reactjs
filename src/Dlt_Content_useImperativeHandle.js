import { useRef } from 'react'
import Video from './Video'


function Content() {

    const videoRef = useRef()


    //console.log(videoRef.current);

    const handlePlay = () => {
        videoRef.current.play()
    }
    const handlePause = () => {
        videoRef.current.pause()
    }

    return (
        <div>
            <h1>Bảo ciute</h1>
            <Video ref={videoRef}/>
            <br />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>

    )
}

export default Content;