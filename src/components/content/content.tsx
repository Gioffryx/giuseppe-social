import React, {useContext} from "react";
import './Style.css';
import { AppContext, IAppContext } from "../../context/AppContext";


function Content() {
    const {jsonData} = useContext(AppContext) as IAppContext

    return (
        <div className="container">
            {jsonData && jsonData?.map((item) => (
                <div className="post">
                    <p className="id">{item.id}</p>
                    <p className="titolo">{item.title}</p>
                    <p className="corpo">{item.body}</p>
                </div>
            ))
            }
        </div>
    )
}

export default Content;