import React from 'react';
import { useState } from 'react';


export default function Message() {
    const[messages, setMessages] = useState(["a", "b"]);

    return (

       <div>
           {messages.length && <h1>You have {messages.length} message to show</h1>}
        </div>
    )
}