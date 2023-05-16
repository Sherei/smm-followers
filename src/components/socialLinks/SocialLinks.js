import React from 'react'
import { Link } from 'react-router-dom';
import "./sociallink.css"
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaTiktok, FaTelegramPlane } from "react-icons/fa";

export const SocialLinks = () => {
  return<>
    <div className='socialLinksMain'>
        <div className='socialLinks'>
           <Link to='/service'> <button><span><FaFacebookF/></span>Facebbok</button></Link>
           <Link to='/service'> <button><span><FaTwitter/></span>Twitter</button></Link>
           <Link to='/service'> <button><span><FaTwitter/></span> Instagram</button></Link>
           <Link to='/service'> <button><span><FaYoutube/></span> YouTube</button></Link>
           <Link to='/service'> <button><span><FaLinkedinIn/></span> LinkedIn</button></Link>
            <Link to='/service'> <button><span><FaTiktok/></span> TikTok</button></Link>
            <Link to='/service'>  <button><span><FaTelegramPlane/></span> Telegram</button></Link>
        </div>
    </div>
  </>
}
