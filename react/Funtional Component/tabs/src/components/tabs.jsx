import React, { useState } from "react";
import "./styles.css"


const Tabs = props => {
    
    const content = {
        tab1 : "You've clicked tab 1",
        tab2 : "You've clicked tab 2",
        tab3 : "You've clicked tab 3"
    }
    const {tab1, tab2, tab3} = content
    const [input , setInput] = useState(tab1)
    const [selected ,setSelected] = useState("tab1")
    const changeColor = (id) => {
        document.getElementById(selected).classList.remove("selected")
        setSelected(id)
        document.getElementById(id).classList.add("selected")
    }

    const onClickHandler = (e, value,id ) => {
        changeColor(id)
        setInput(value)
    }

    return(
        <div className="mx-auto col-4">
            <div className="d-flex gap-3 justify-content-center">
                <button id='tab1' onClick= { (e) => onClickHandler(e, tab1,'tab1')}>Tab 1</button>   
                <button id='tab2' onClick={ (e) => onClickHandler(e, tab2,'tab2')}>Tab 2</button>
                <button id='tab3' onClick={ (e) => onClickHandler(e, tab3,'tab3')}>Tab 3</button>
            </div>
            <div className="border ">
                <p>{input}</p>
            </div>
        </div>
    )
}
export default Tabs