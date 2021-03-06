//VideoDetail doesn't need to keep track of states so just create a functional component 
import React from 'react';

const VideoDetail = ({video}) => {
  //if no videos provided yet
  if (!video){
    return <div> Loading... </div>
  }
  const videoId = video.id.videoId;
  //const url = 'https://www.youtube.com/embed/' + videoId; same as
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className = "video-detail col-md-8">
      <div className = "embed-responsive embed-responsive-16by9">
        <iframe className = "embed-responsible-item" src={url}></iframe>
      </div>
      <div className = "details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
