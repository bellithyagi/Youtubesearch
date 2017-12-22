import React from 'react';
import Singlevideo from '../singlevideo/singlevideo.component';

const Videolist = (props) =>{
const videoitem = props.videos.map((video, index) => {
  return <Singlevideo onVideoselect={props.onVideoselect} key={video.etag} video={video}/>
})

  return (
    <div>
      <ul>
        {videoitem}
      </ul>
    </div>
  );
}

export default Videolist;
