import React from 'react'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaTiktok,FaSearch, FaTelegramPlane } from "react-icons/fa";

import "./services2.css"
export const Services2 = () => {
    return <>

        <div className='text-center'>
        <h1 className='services2_heading'>
            <span>SMM </span>Services
        </h1>
        </div>
        <div className='socialLinks1'>
            <button><span><FaFacebookF/></span>Facebbok</button>
            <button><span><FaTwitter/></span>Twitter</button>
            <button><span><FaTwitter/></span> Instagram</button>
            <button><span><FaYoutube/></span> YouTube</button>
            <button><span><FaLinkedinIn/></span> LinkedIn</button>
            <button><span><FaTiktok/></span> TikTok</button>
            <button><span><FaTelegramPlane/></span> Telegram</button>
        </div>

        <div className="container">
        <div className="row">
            <div className="col-lg-12 ">
            <input className='service-input w-75' type="text" placeholder='Enter Your Email.' />
            <Button className='btn btn-primary services2-search-btn'><FaSearch/></Button>
            </div>
        </div>
        </div>

        <div className="container ">
        <DropdownButton className='ms-4 my-3 dropbtn' id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        </div>

    </>
}
