import React from 'react'
import { Card } from '@nextui-org/react';

const VideoStream = () => {
  return (
    <Card >
      <video width="100%" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </Card>
  )
}

export default VideoStream


export  function chat() {
  return (
    <div>
        
        
    </div>
  )
}
