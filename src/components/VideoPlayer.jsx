import { useVideoContext } from "../context/videoContext";
import Actions from "./actions";
import FaceDetectionCanvas from "./faceDetectionCanvas";


const VideoPlayer = () => {
    const { videoFile, videoRef } = useVideoContext();

    return (
        <div className='relative w-full h-full group'>
            <video
                ref={videoRef}
                className='hidden'
                src={videoFile && URL.createObjectURL(videoFile)}
                crossOrigin='anonymous'>
            </video>

            <FaceDetectionCanvas />
            <Actions />
        </div>
    )
}

export default VideoPlayer;