import React from 'react';

const Singlevideo = (props) => {
  return (
    <li onClick={props.onVideoselect(props.video)}>
      <div>
        <img src={props.video.snippet.thumbnails.default.url}/>
          <p>{props.video.snippet.title}</p>
          </div>
    </li>
  );
}

export default Singlevideo;
