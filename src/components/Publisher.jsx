import { ngRockUrl } from '@/apiUrl/apiUrl'
import axios from 'axios'
import React, { useRef } from 'react'

const Publisher = ({ publisher }) => {
    const topicRef = useRef()
    const messageRef = useRef()

    const handlePublish = () => {
        var message = messageRef?.current?.value;
        var topic = topicRef?.current?.value

        axios?.post((ngRockUrl + "?topic=" + topic),
            {
                "message": message,
                "topic": topic
            }
        )?.then((res) => {
            console.log("res", res)
        })?.catch((err) => {
            console.log("Error while publishing", err)
        })
    }

    return (
        <div className='publisherWrapper'>
            <h1>Publish a message</h1>
            <div className='publisherForm'>
                <input ref={topicRef} type="name" placeholder='Enter a topic' />
                <textarea ref={messageRef} placeholder='Enter message' rows="10" />
                <button onClick={handlePublish}>Publish</button>
            </div>
        </div>
    )
}

export default Publisher