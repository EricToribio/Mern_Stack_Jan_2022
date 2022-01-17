import React from "react";

const TodoList = props => {
    const newList = [...props.todo]

    const isComplete = (i) => {
        newList[i].completed ? newList[i].completed=false :
        newList[i].completed=true
        props.setNewList(newList)
    }
    const handleDelete = (i) => {
        const filteredList = newList.filter((newList,index) => {
        return index !== i })
        props.setNewList(filteredList)
    }

    return (
        <div>
            {
                newList.map((item, i) => {
                    let style = ''
                    item.completed && (style += "strike")
                    console.log(item)
                    return(
                        <div className={`bordered bg-secondary text-white ${style}`}>
                            <p className={`${style}`} key={i}>{item.task}</p>
                            <label className={`${style}`} htmlFor="completed">Completed</label>
                            <input  type="checkbox"checked={item.completed} onChange={(e) => isComplete(i)} />
                            <button  onClick={(e) => {handleDelete(i)}}>Delete</button>
                        </div>)
                })
            }
        </div>
    )
}
export default TodoList