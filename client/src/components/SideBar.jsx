import React from 'react';
import {Link} from "react-router-dom";

const SideBar = () => {
    return (
        <>

            <nav style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', color: 'black'}}>
                <Link style={{color:'black'}} to="/ExerciseForm">Exercise Form</Link>
                <Link to="/ExerciseList">Exercise List</Link>
            </nav>
        </>

    );
};

export default SideBar;