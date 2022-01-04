import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [inputText, setInputText] = useState({
        title: "",
        content: "",
    });

    const [keeper, setKeeper] = useState([]);

    // tracks changes in the input text field
    function updateText(event) {
        const { value, name } = event.target;

        setInputText(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    // adds to arr obj
    function savedNote(event) {
        event.preventDefault();

        setKeeper(prevValue => {
            return [
                ...prevValue,
                inputText
            ]
        });

        setInputText({
            title: "",
            content: "",
        });

    }

    // delete keeper
    function deleteKepper(keeperId) {
        setKeeper(prevValue => {
            return prevValue.filter((item, index) => keeperId !== index);
        });
    }


    return (
        <div>
            <Header />
            <CreateArea
                title={inputText.title}
                content={inputText.content}
                handleChange={updateText}
                handleClick={savedNote}
            />
            {
                keeper.map((keeperNote, index) => {
                    return (
                        <Note
                            key={index}
                            id={index}
                            title={keeperNote.title}
                            content={keeperNote.content}
                            handleDelete={deleteKepper} />
                    )
                })
            }
            <Footer />
        </div>
    );
}

export default App;
