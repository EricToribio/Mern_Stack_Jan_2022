import React, { useCallback, useState } from "react";
import "./styles.css"


const Tabs = props => {
    console.log(props)
    const [selected ,setSelected] = useState(props.tabs[0])
    



    const callBack = (i,tab) => {
        i % 2 === 1? 
        setSelected({...tab, content:`${props.tabs[i].content} This is even`}):
        setSelected({...tab, content:`${props.tabs[i].content} This is odd`})

    }
    const onClickHandler = (tab,i) => {
        // setSelected(tab)
        console.log(i)
        callBack(i,tab)
    }

    return(
        <div className="mx-auto col-4">
            <div className="d-flex gap-3 justify-content-center">
                {
                    props.tabs.map((tab, i) => {
                    let style ="";
                    console.log(i)
                    i === selected.idx && (style += 'active btn btn-secondary')
                    
                    return(
                        <button key={i} onClick={(e) => onClickHandler(tab,i) }className={`btn btn-reg  ${style}`}>{tab.name}</button>
                    )                 
                })}
            </div>
            <div className="border ">
                <p>{selected.content}</p>
            </div>
        </div>
    )
}
export default Tabs