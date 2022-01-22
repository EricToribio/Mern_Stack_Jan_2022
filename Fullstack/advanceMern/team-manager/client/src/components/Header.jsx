import React from 'react';
import { Link } from 'react-router-dom'; 
const Header = ({ children }) => {
    return (
        <div>
            <div className='d-flex gap-3 justify-content-center'>
                <Link to="/players/list"  ><h3>Manage Players</h3></Link>
                |
                <Link to="/status/game"  ><h3>Manage Player Status</h3></Link>
            </div>
            
            <div>
                {children}
            </div>
        </div>
    )
};

export default Header;
