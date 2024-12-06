import { ngRockUrl } from '@/apiUrl/apiUrl';
import axios from 'axios'
import React, { useRef, useState } from 'react'

const Subscriber = ({ subscriber }) => {
    const topicInputRef = useRef()
    const [messages, setMessages] = useState([]);

    const handleSubscribe = () => {
        const fetchNews = () => {
            var topic = topicInputRef?.current?.value
            // const apiUrl = "https://2918-130-65-254-6.ngrok-free.app/dcnews?topic=" + topic;
            const apiUrl = ngRockUrl + "?topic=" + topic
    
            axios.get(apiUrl)
                .then((response) => {
                    console.log("Response from API:", response.data);
                    setMessages(response?.data?.messages)
                })
                .catch((error) => {
                    console.error("Error while making the GET request:", error);
                });
        }

        fetchNews()

        setInterval(() => {
            fetchNews()
        }, 5000)
        
    }
            

    return (
        <div className='publisherWrapper'>
            <h1>Subscriber: {subscriber}</h1>
            <div className='publisherForm'>
                <h1>

                    Subscribe to a topic
                </h1>
                <input ref={topicInputRef} type="name" placeholder='Enter a topic' />
                {/* <textarea placeholder='Enter message' rows="10" /> */}
                <button onClick={handleSubscribe}>Subscribe</button>
            </div>

            {
                (messages || [])?.map((message) => {
                    return <div>{message}</div>
                })
            }

        </div>
    )
}

export default Subscriber