import React from 'react';
import vanessaImg from '../../../assest/images/vanessaImg.png'
import { CiHeart } from "react-icons/ci";
import { TfiLocationPin } from "react-icons/tfi";
import { CiMobile3 } from "react-icons/ci";
import { SlGlobe } from "react-icons/sl";
import { MdOutlineLocalPostOffice } from "react-icons/md";



function Information(props) {
    return (
        <div id='information'>
            <div className='container'>
                <div className='title'>
                    <div className='information'>
                        <img src={vanessaImg} alt="img"/>
                        <h2>Vanessa Fahrmann <CiHeart className='information--heart'/></h2>
                        <div className='information--heart__icons'>
                            <h4><TfiLocationPin className='information--heart__icons--img'/> Bishkek city, Kyrgyzstan
                            </h4>
                            <h4><CiMobile3 className='information--heart__icons--img'/> +996 550 002 232 </h4>
                            <h4><SlGlobe className='information--heart__icons--img'/> mysite.com</h4>
                            <h4><MdOutlineLocalPostOffice className='information--heart__icons--img'/> web@mysite.com
                            </h4>
                        </div>
                        <div className='btn'>show</div>
                    </div>
                    <div className='information'>
                        <img src={vanessaImg} alt="img"/>
                        <h2>Vanessa Fahrmann <CiHeart className='information--heart'/></h2>
                        <div className='information--heart__icons'>
                            <h4><TfiLocationPin className='information--heart__icons--img'/> Bishkek city, Kyrgyzstan
                            </h4>
                            <h4><CiMobile3 className='information--heart__icons--img'/> +996 550 002 232 </h4>
                            <h4><SlGlobe className='information--heart__icons--img'/> mysite.com</h4>
                            <h4><MdOutlineLocalPostOffice className='information--heart__icons--img'/> web@mysite.com
                            </h4>
                        </div>
                        <div className='btn'>show</div>
                    </div>
                    <div className='information'>
                        <img src={vanessaImg} alt="img"/>
                        <h2>Vanessa Fahrmann <CiHeart className='information--heart'/></h2>
                        <div className='information--heart__icons'>
                            <h4><TfiLocationPin className='information--heart__icons--img'/> Bishkek city, Kyrgyzstan
                            </h4>
                            <h4><CiMobile3 className='information--heart__icons--img'/> +996 550 002 232 </h4>
                            <h4><SlGlobe className='information--heart__icons--img'/> mysite.com</h4>
                            <h4><MdOutlineLocalPostOffice className='information--heart__icons--img'/> web@mysite.com
                            </h4>
                        </div>
                        <div className='btn'>show</div>
                    </div>
                    <div className='information'>
                        <img src={vanessaImg} alt="img"/>
                        <h2>Vanessa Fahrmann <CiHeart className='information--heart'/></h2>
                        <div className='information--heart__icons'>
                            <h4><TfiLocationPin className='information--heart__icons--img'/> Bishkek city, Kyrgyzstan
                            </h4>
                            <h4><CiMobile3 className='information--heart__icons--img'/> +996 550 002 232 </h4>
                            <h4><SlGlobe className='information--heart__icons--img'/> mysite.com</h4>
                            <h4><MdOutlineLocalPostOffice className='information--heart__icons--img'/> web@mysite.com
                            </h4>
                        </div>
                        <div className='btn'>show</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Information;