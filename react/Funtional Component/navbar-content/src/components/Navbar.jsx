import React, {useContext} from "react";
import UserContext from "../context/UserContext";

const Navbar = props => {
    const context = useContext(UserContext)
    return(
        <div className="bg-secondary text-white nav-bar">
            {
            context.val ?
            <h2> Hello {context.val}!</h2> :
            ""
            }
            
        </div>
    )
}
export default Navbar