import React from 'react'
import Button from 'react-bootstrap/Button';
import "./footer2.css"
const Footer2 = () => {
  return <>

    <div className='d-flex flex-column mx-5'>
        <h4 className='title d-flex justify-content-center'>
        Get the latest smm panel updates
        </h4>
        <p class="mt-2 txt d-flex justify-content-center">Get updates on the latest social media marketing, popular services and all the tips &amp; tricks to keep your business powerful.</p>
      </div>
      <div className="container d-flex f;ex-wrap input-style mt-3 mb-5 ">
        <div className='style2'>
        <input className='input-1' type="text" placeholder='Enter Your Email.' />
        <Button className='btn btn-primary news-letter-btn'>Subscribe</Button>
        </div>
      </div>
  
    <div className="container mb-5">
      <div className="row d-flex flex-wrap justify-content-center">
      <img src="https://cdn.mypanel.link/9b5331/y338uldfb83yfcmu.png" className='img1' alt="" />
      </div>
    </div>
    
      <div className="container-fluid main-footer1 ">
      <div className="row mx-5">
        <div className="col-lg-6 col-md-6 col-sm-6  ">
        <p className='footer_copyright'> @ Copright 2023. All Rights Reserved by SmmFollows</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="row ">
                <div className="col-lg-9 col-md-12 col-sm-12 ">
                <p className='footer_copyright'><span>Conatact us:</span>  Sharjeelakhtar245@gmail.com</p>
                </div>
                <div className="col-lg-3 col-md-12 col-sm-12 ">
                    <button className='btn-open'>Open a Ticket</button>
                </div>
            </div>
        </div>
      </div>
      </div>

  </>
}

export default Footer2
