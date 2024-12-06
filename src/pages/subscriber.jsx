import Publisher from "@/components/Publisher";
import Subscriber from "@/components/Subscriber";
import react, { useRef, useState } from "react";


const SubscriberHome = () => {
    const [subscriptions, setSubscriptions] = useState([])
    const subscriberNameInputRef = useRef();

    const handleSubscribeClick = () => {
        var subscriptionName = subscriberNameInputRef?.current?.value
        setSubscriptions((prev) => [...prev, subscriptionName])
    }

    return <>
        <div className="publisherFormDiv">
            <h1>
                Add a subscriber
            </h1>
            <div className="publisherForm">
                <input ref={subscriberNameInputRef} type="name" />
                <button onClick={handleSubscribeClick}>Add</button>
            </div>


        </div>

        <div className="publisherForms">

                {
                    subscriptions?.map((sub) => {
                        return <Subscriber subscriber={sub} />
                    })
                }
        </div>


    </>
}

export default SubscriberHome