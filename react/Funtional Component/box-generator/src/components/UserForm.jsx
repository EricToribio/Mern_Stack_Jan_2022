import React, { useState } from "react";

const UserForm = (props) => {
    const [color, setColor] = useState('')
    const [sideLength, setSideLength] = useState('')

    const [newBox, setNewBox] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(color != '' && sideLength != ''){
        setNewBox([...newBox, {color : color, size : sideLength + 'px' }])
        console.log(newBox)
        setColor('')
        setSideLength('')
        }
    }


    return (
        <div>
            <form className="card col-3 p-5 mx-auto bg-secondary" onSubmit={handleSubmit}>
                <div>
                    <label className="form-label" htmlFor="color">Choose a color</label>
                    <input value={color} className="form-control" type="text" name="color"  onChange={(e) => {setColor(e.target.value)}} />
                </div>
                <div className="my-4">
                    <label className="form-label" htmlFor="sideLength">Enter a length</label>
                    <input value={sideLength} className="form-control" type="text" name="sideLength" onChange={(e) => { setSideLength(e.target.value) }}/>
                </div>
                <input className="btn btn-danger mx-auto" type="submit" />
            </form>
            <div className="d-flex justify-content-between">
                {
                newBox.map((box, i) => {
                    let style = {backgroundColor : box.color, width : box.size, height : box.size}
                    return(
                        <div key={i} style={style}></div>
                    )
                })}

            </div>
        </div>

    )

}
export default UserForm