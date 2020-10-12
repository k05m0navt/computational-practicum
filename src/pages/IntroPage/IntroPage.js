import React from 'react';
import { ButtonForRoute } from '../../atoms';
import '../../styles/IntroPage/styles.css';

function IntroPage(props) {
    return(
        <div className='intro_page'>
            <h1>Computational Practicum</h1>
            <ButtonForRoute to='/home' text='Start solving' buttonClass='btn btn-outline-dark'/>
        </div>
    );
}

export default IntroPage;