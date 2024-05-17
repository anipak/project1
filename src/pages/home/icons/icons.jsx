import React from 'react';
import heartImg from '../../../assest/images/heartImg.svg'
import arrowOne from '../../../assest/images/arrowOne.svg'
import arrowTwo from '../../../assest/images/arrowTwo.svg'

function Icons(props) {
    return (
        <div id='icons'>
            <div className='container'>
                <div className='icons'>
                    <input type="text" placeholder='   type to search'/>
                    <div className='icons_images'>
                        <img src={heartImg} alt="img"/>
                        <img src={arrowOne} alt="img"/>
                        <img src={arrowTwo} alt="img"/>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Icons;