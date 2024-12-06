import Publisher from "@/components/Publisher";
import react, { useRef, useState } from "react";


const Home = () => {
    const [publishers, setPublishers] = useState([])
    const publisherNameInputRef = useRef();

    const handleAddPublisher = () => {
        var publisherName = publisherNameInputRef?.current?.value
        setPublishers((prev) => [...prev, publisherName])
    }

    return <>
        <div className="publisherFormDiv">
            <h1>
                Add a Publisher
            </h1>
            <div className="publisherForm">
                <input ref={publisherNameInputRef} type="name" />
                <button onClick={handleAddPublisher}>Add Publisher</button>
            </div>


        </div>

        <div className="publisherForms">

            {
                publishers?.map((publisher) => {
                    return <Publisher publisher={publisher} />
                })
            }
        </div>
    </>
}

export default Home