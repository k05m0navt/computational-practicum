import React from 'react';
import '../styles/SideBar/styles.css';

function SideBar(props) {
    return(
        <div className='side_bar'>
            <h2>{props.title}</h2>
        </div>
    );
}

export default SideBar;