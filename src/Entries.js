import Entry from "./Entry";

function Entries(props){
    const elements = props.data.map((entry, index) => {
        return <Entry key={index} value={`${entry.name} (${entry.age} years old)`}/>
    })
    if (elements.length === 0){
        return null;
    }
    return (
        <div className="entries">
            {elements}
        </div>
    );
}

export default Entries;