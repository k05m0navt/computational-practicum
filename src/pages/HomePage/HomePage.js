import React from 'react';
import { NavBar } from '../../molecules';
import '../../styles/HomePage/styles.css';

function HomePage(props) {
    return(
        <div className='home_page'>
            <NavBar logo='Comp Prac' homeLink='/home' homeText='Home' errorLink='/error' errorText='Error'/>
        </div>
    );
}

export default HomePage;