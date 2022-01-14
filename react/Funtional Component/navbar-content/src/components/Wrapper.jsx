import React from "react";

const Wrapper = props => {
    console.log("wrap")
    return(
        <div className=" wrapper p-5">
            {props.children}
        </div>
    )
}

export default Wrapper