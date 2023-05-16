import React, { useEffect } from 'react'
import { SocialLinks } from '../socialLinks/SocialLinks';
import { Services } from '../services/Services';
import { Quick } from '../quick/Quick';
import { Login } from '../login/Login';
import { useSelector } from 'react-redux';
import Aos from 'aos';
import 'aos/dist/aos.css'
import "./home.css"
import { Faq } from '../faq/Faq';
import { Testimonial } from '../testimonial/Testimonial';
import Blog from '../blogs/Blog';
import { Practice } from '../practice/Practice';
export const Home = () => {

  let user = useSelector(store => store.userSection.cu)
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 600,
      easing: 'ease-in',
      delay: 50,
    });
  }, [])
  return <>
    <div className='home_all'>
      <div>
        <Login />
      </div>
      <div className='col socialLinksHome' data-aos="fade-up">
        <SocialLinks />
      </div>

      <div>
        <Services />
      </div>
{/* 
  <div>
    <Testimonial/>
  </div> */}

      <div data-aos="zoom-in">
        <Quick />
      </div>

      <div data-aos="flip-left">
        <Blog />
      </div>

      <div data-aos="flip-right">
        <Faq />
      </div>
      {/* <div>
        <Practice/>
      </div> */}
    </div>
  </>
}
