import { COMMENTS_API, VIDEO_INFO_API } from './constants';
import { updateComments, updateVideoInfo } from './videoSlice';
import { useDispatch } from 'react-redux';

const useWatchVideo = () => {
    const dispatch=useDispatch();

    const getVideoData=async(video_key)=>{
        const comments=await fetch(COMMENTS_API+video_key);
        const commentsjson=await comments.json();
        dispatch(updateComments(commentsjson));


        const videoInfo=await fetch(VIDEO_INFO_API+video_key);
        const videoInfoJson=await videoInfo.json();
        dispatch(updateVideoInfo(videoInfoJson));

    }
    return {getVideoData};
}

export default useWatchVideo