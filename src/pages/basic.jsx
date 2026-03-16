import React from 'react';
import './styles/sass/basic.sass'
import './styles/sass/basicCard.sass'
import ScrollSlider from './styles/components/slider.jsx'


const basic = () => { 
    return ( 
        <div className='basic-Container'>
            <div className='basic-background'>
                <div className='Card-Container'>
                    <div className='Card-background'>
                        <ScrollSlider/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default basic; 


