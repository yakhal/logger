import { useState } from "react";
import Entries from "./Entries";
import Form from "./Form";

function EntryApp() {
    const [data, setData] = useState([]);

    const addDataToList = (entry) => {
        setData((prev) => {
            return [...prev, entry];
        });
    }

    return (
        <div className="container">
            <header>
                <h1>Logger</h1>
            </header>
            <Form addDataToList={addDataToList}/>
            <Entries data={data}/>
        </div>
    );
}

export default EntryApp;