import { useState } from "react";
import Modal from "./Modal";
const message = ["Please enter name and age.", "Please Enter name.", "Please Enter Age", "Please enter the correct age. Valid range is 0 < age < 100."]

function Form(props) {
    const [inputValues, setInputValues] = useState({ name: "", age: "", modalValue: -1 })

    // When Input changes 
    const onChangeHandler = (event) => {
        if (event.target.type === 'text') {
            setInputValues((prev) => {
                return {
                    ...prev,
                    name: event.target.value
                }
            });
        }
        else if (event.target.type === 'number') {
            setInputValues((prev) => {
                return {
                    ...prev,
                    age: event.target.value
                }
            });
        }
    }

    // When Input is submitted 
    function onSubmitHandler(e) {
        const name = inputValues.name;
        const age = parseInt(inputValues.age)
        e.preventDefault();
        if (!name && !age) {
            setInputValues((prev) => {
                return {
                    ...prev,
                    modalValue: 0
                }
            });
        }
        else if (!name) {
            setInputValues((prev) => {
                return {
                    ...prev,
                    modalValue: 1
                }
            });
        }
        else if (!age) {
            setInputValues((prev) => {
                return {
                    ...prev,
                    modalValue: 2
                }
            });
        }
        else if (age < 0 || age >= 100) {
            setInputValues((prev) => {
                return {
                    ...prev,
                    modalValue: 3
                }
            });
        }
        else {
            props.addDataToList(inputValues);
            setInputValues({ name: "", age: "" });
        }
    }

    // For Closing the modal
    const closeModal = () => {
        setInputValues((prev) => {
            return {
                ...prev,
                modalValue: -1
            }
        });
    }

    return (
        <form className="form" onSubmit={onSubmitHandler}>
            <label>
                Name
                <input onChange={onChangeHandler} value={inputValues.name} type="text" />
            </label>
            <label>
                Age (Years)
                <input onChange={onChangeHandler} value={inputValues.age} type="number" />
            </label>
            <button type="submit">Add user</button>
            {inputValues.modalValue >= 0
                &&
                <Modal value={message[inputValues.modalValue]} closeModal={closeModal} />}
        </form>
    );
}

export default Form;