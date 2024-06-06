
import { AppContext, IAppContext } from "../../context/AppContext";
import React, { useContext, useState } from "react";
import './style.css'


function Textarea() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const context = useContext(AppContext);

    function handleClick() {
        if (context?.jsonData) {
            const obj = {
                userID: context.jsonData.length + 1,
                title: title,
                body: content,
                id: context.jsonData.length + 1,
                views: 0,
                reactions: { likes: 0, dislikes: 0 },
            };

            context.jsonData.push(obj);
        }
    }

    function controlCheck() {
        context?.setChecked(false);
    }

    return (
        <div className="textarea">
            <div>
                <button className="postadd" onClick={() => {
                    handleClick();
                    controlCheck();
                    context?.setChecked(true)
                }}>
                    Pubblica
                </button>
            </div>
            <textarea placeholder="Titolo..." className="title" onChange={(e) => setTitle(e.target.value)}>

            </textarea>
            <textarea placeholder="Descrizione..." className="content" onChange={(e) => setContent(e.target.value)}></textarea>


        </div>
    )

}

export default Textarea;