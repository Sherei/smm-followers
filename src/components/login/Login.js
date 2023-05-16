import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { FaUserAlt, FaKey, FaArrowCircleRight } from "react-icons/fa";
import "./login.css"
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

export const Login = () => {

  let dispatch = useDispatch()
  let move = useNavigate()
  let { register, handleSubmit, reset, formState: { errors } } = useForm()

  async function Login(data) {

    console.log(data)

    let userMilgya = await axios.post("loginUser", data)

    let loginUser = userMilgya.data;

    console.log(loginUser)

    if (loginUser) {

      localStorage.setItem('meraToken', loginUser.myToken)

      if (loginUser.email != "asd@gmail.com") {

        toast.success("Welcome back" + " " + loginUser.userMilgya.firstName + " " + loginUser.userMilgya.lastName)
        dispatch({
          type: "LOGIN_USER",
          payload: loginUser.userMilgya
        })
        move('/dashboard')
      } else if (loginUser.email == "asd@gmail.com") {

        toast.success("Welcome Admin" + " " + loginUser.userMilgya.firstName + " " + loginUser.userMilgya.lastName)
        dispatch({
          type: "LOGIN_USER",
          payload: loginUser.userMilgya
        })
        
        move('/dashboard')
      } else if (!loginUser) {
        toast.warning("Enter valid credentials")
      }
    }

  }

  return <>

    <div className='container d-flex home_main' >
      <div className='row'>
        <div className='col home_img'>
          <img src="login.png" alt="" />
        </div>
        <div className='col home_detail'>
          <p className='home_heading'>World's Best Cheap & Easy</p>
          <h1 className='smm_panel'>
            <strong>SMM Panel</strong>
          </h1>
          <p className='main_article'>Our <strong>SMM Panel</strong> offers you the possibility to promote your business on social networks
            with a high quality and a cheap price. SmmFollows is the fastest and cheapest <strong>SMM Panel for Instagram,</strong>  YouTube, TikTok, Snapchat, Telegram and Facebook. You can also earn money
            by joining our affiliate program or <strong>start your own Smm panel</strong> through our <strong>SMM reseller panel.</strong> </p>

          <div className='home_form_main'>
            <form onSubmit={handleSubmit(Login)}>
              <div className='home_form_data'>
                <div className='icon'><FaUserAlt /></div>
                <input {...register('email', {
                  required: true, validate: function (typedValue) {
                    if (typedValue.match(
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    )) {
                      return true;
                    } else {
                      return false;
                    }
                  }
                })} type="text" placeholder='Enter Your Email' />
              </div>
              {errors.email ? <div className='error'>Email Field is required </div> : null}
              <div className='home_form_data'>
                <div className='icon'><FaKey /></div>
                <input  {...register('password', { required: true })} type="password" placeholder="Password *" />
              </div>
              {errors.password ? <div className='error'> Password is Required </div> : null}
              <div className='checkbox'>
                <div><input {...register('checkbox')} type="checkbox" /></div>
                <div><p>Remember me</p></div>
              </div>

              <div className='signup_form_btn_main homeSignup'>
                <button>Sign in <span><FaArrowCircleRight /></span></button> <Link to='/signup'>Sign Up <span><FaArrowCircleRight /></span></Link>
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>

  </>
}
