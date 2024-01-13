import { Card } from '@nextui-org/react';
import React, { useState } from 'react';

const VideoStream = () => {

    
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
  
    const handleSend = () => {
        const [messages, setMessages] = useState<string[]>([]);      
            // setNewMessage('');
    };
  return (
    <div>
   <div className='video'>
   <Card >
      <video width="100%" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </Card>
   </div>

<div className='chat'>
<div style={{ maxHeight: '400px', overflowY: 'scroll' }}>
  {messages.map((message, index) => (
    <p key={index}>{message}</p>
  ))}
</div>
<div style={{ display: 'flex', marginTop: '10px' }}>
  <input
    type="text"
    placeholder="Chat here"
    value={newMessage}
    onChange={(e) => setNewMessage(e.target.value)}
  />
  <button onClick={handleSend}>Send</button>
</div>
</div>

</div>
  )
}

export default VideoStream


