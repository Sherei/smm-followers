import React from 'react'
import { FaArrowCircleRight, FaMoon } from "react-icons/fa";

import "./quick.css"
export const Quick = () => {
    return <>

        <div className='container quick'>
            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center'>
                    <img className='quick_img' src="quick.png" alt="" />

                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 quick_Detail'>
                    <h2 className='quick_title'>Quick Response From </h2>
                    <span className='title_span'>Clients</span>
                    <p className='quick_main_article'> All services will guarantee full delivery. If any problems do occur, we
                        have a LIVE customer support chat available from Mon-Fri
                        (0900 - 1400) CST. With over 150,000 clients from USA , Europe , India ,
                        pakistan and all over the word, we are the best and top All-In-One
                        Social Media Marketing tool, Our SMM PANEL rendered millions of
                        orders on a daily basis .
                    </p>
                    <div className='nav_signup quick_btn'>
                        <button>Sign up Now <span><FaArrowCircleRight /></span></button>
                    </div>
                </div>
            </div>
        </div>
    </>
}
