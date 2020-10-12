import React from 'react';
import { NavBar } from '../../molecules';

function ErrorPage() {
    return(
        <div className='error_page'>
            <NavBar logo='Comp Prac' homeLink='/home' homeText='Home' errorLink='/error' errorText='Error'/>
        </div>
    );
}

export default ErrorPage;