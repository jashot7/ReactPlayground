import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  console.log(video);
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="column is-three-quarters">
      <div className="columns">
        <div className="column video-container">
          <iframe src={url}></iframe>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <div className="columns">
            <div className="column">
              <p className="subtitle">{video.snippet.title}</p>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="content">
                <p>{video.snippet.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;