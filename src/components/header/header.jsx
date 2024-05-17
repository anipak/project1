import React from 'react';
import headerImgOne from '../../assest/images/headerImgOne.svg'
import "../../style/style.scss"
function Header(props) {
    return (
        <div id='header'>
            <div className='container'>
                <div className='header'>
                    <img src={headerImgOne} alt="img"/>
                    <h1>MyContacts</h1>
                </div>
            </div>

        </div>
    );
}

export default Header;