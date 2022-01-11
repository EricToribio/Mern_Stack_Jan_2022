import React, { Component } from "react";
import SubContents from './SubContents';
import Advertisement from './Advertisement';

class Main extends Component {
    render(){
        return(
        <div className="main">
                {this.props.children}
                
        </div>

        )
    }
}
export default Main