import React from "react";
import { useParams } from 'react-router-dom';

const WordPlusColor = () => {
    const { input, color1  ,color2  } = useParams()

    const styles = {
        color  : ` ${color1} ` ,
        backgroundColor : ` ${color2} `
    }
    console.log(color1)
    console.log(color2)
    return(
        <h2 style={ styles }>{ isNaN(input) ? `The word is: ${input}` : `The number is: ${input} `}</h2>
    )
}
export default WordPlusColor;