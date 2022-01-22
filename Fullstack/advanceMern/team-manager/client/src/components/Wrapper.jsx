import React from 'react';
import { Link } from 'react-router-dom';
const Wrapper = ({ children }) => {
    return (
        <div className='border col-7 mx-auto p-4 mb-4'>
            <div className='d-flex gap-3 '>
                <Link to="/players/list"><h3>List</h3></Link>
                |
                <Link to="/players/addplayer"><h3>Add Player</h3></Link>
            </div>
            <div>
                {children}
            </div>
        </div>


    )
};

export default Wrapper;
