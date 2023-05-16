import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./signup.css"
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { toast } from 'react-toastify';



export const Signup = () => {

    let { register, handleSubmit, reset, formState: { errors } } = useForm()
    let move = useNavigate()

    function Signup(data) {

        console.log(data)

        axios.post("/signupUser", data).then((res) => {
            if (res) {
                toast.success("Acoount Created")
                reset()
                move('/')
            }
        })
    }

    return <>
        <div className='container signup'>
            <div className='row'>
                <div className='signupheading'>
                    <h1>Sign up <span>To SmmFollows</span></h1>
                </div>
            </div>

            <div className='row'>
                <div className='col-lg-6 col-md-6 col-sm-12 '>
                    <img src="signup.png" className='signup_img' alt="" />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12 signup_form_main'>
                    <form onSubmit={handleSubmit(Signup)}>

                        <input {...register('firstName', { required: true })} type="text" placeholder='First Name *' />
                        {errors.firstName ? <div className='error'> First Name Field is Required </div> : null}
                        <input {...register('lastName', { required: true })} type="text" placeholder='Last Name *' />

                        {errors.lastName ? <div className='error'> Last Name Field is Required </div> : null}
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
                        {errors.email ? <div className='error'>Email Field is required </div> : null}

                        <input {...register('skype')} type="text" placeholder='Skype' />
                        <input {...register('skype')} type="number" placeholder="WhatsApp" />
                        <input {...register('skype')} type="number" placeholder="Telegram" />
                        <input  {...register('password', { required: true })} type="password" placeholder="Password *" />
                        {errors.password ? <div className='error'> Password is Required </div> : null}
                        {/* <input type="password" placeholder="Confirm Password" /> */}
                        <div className='checkbox'>
                            <div><input {...register('checkbox', { required: true })} type="checkbox" /></div>
                            <div><p>I have agree Terms of Services & privacy Policy</p></div>
                        </div>
                        {errors.checkbox ? <div className='error'>Agree the terms and conditions</div> : null}

                        <div className='signup_form_btn_main'>
                            <button>Signup</button>
                        </div>
                        <div className='checkbox'>
                            <h5>Already have an Acoount?</h5><Link>Sign in</Link>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    </>
}
