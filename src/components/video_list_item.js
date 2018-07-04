import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.high.url;

  return (
    <div onClick={ () => onVideoSelect(video) } className="column video-list-item" >
      <div className="box highlight-on-hover">
        <div className="image is16by9">
          <img className="" src={imageUrl} />
        </div>

        <div className="">
          <div className="">{video.snippet.title}</div>
        </div>
      </div>
    </div>
  );
}

export default VideoListItem