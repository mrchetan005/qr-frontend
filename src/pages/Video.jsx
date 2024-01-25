import { useEffect, useState } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import { useNavigate } from 'react-router-dom';
import { useVideoContext } from '../context/videoContext';

const Video = () => {
    const { videoFile, videoRef } = useVideoContext();
    const [isPlaying, setIsPlaying] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (!videoFile) {
            navigate('/');
        }
    }, [videoFile, navigate]);

    return (
        <>
            <VideoPlayer
                videoRef={videoRef}
                videoFile={videoFile}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
            />
        </>
    );
};

export default Video;