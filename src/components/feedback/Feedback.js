import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { FaUserAlt, FaArrowCircleRight, FaMailBulk,FaPencilAlt } from "react-icons/fa";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';


export const Feedback = () => {
    
    let user = useSelector(store => store.userSection.cu)
    let { register, handleSubmit, reset, formState: { errors } } = useForm()
    let move = useNavigate()

    function Feedback(data) {

        data.name = user.firstName;
        data.email = user.email;
        data.message = data.message;

        axios.post('/feedback', data).then((res) => {
            if (res) {
                toast.success("Feedback Submitted")
                reset()
            }
        })
    }
    return <>
        <div className='container benefit'>
            <div className='row'>
                <div className='col'>

                    <div className='home_form_main'>
                        <form onSubmit={handleSubmit(Feedback)}>
                            <div className='home_form_data'>
                                <div className='icon'><FaUserAlt /></div>
                                <input type="text" value={user.firstName + user.lastName} />
                            </div>

                            <div className='home_form_data'>
                                <div className='icon'><FaMailBulk /></div>
                                <input type="text" value={user.email} />
                            </div>

                            <div className='home_form_data'>
                                <div className='icon'><FaPencilAlt /></div>
                                <input type="text"  {...register('message', { required: true, minLength: 5 })} placeholder='Enter Your feedback message here' />
                            </div>
                            {errors.message && errors.message.type == "required" ? <div className='error'> Message Field is required </div> : null}
                            {errors.message && errors.message.type == "minLength" ? <div className='error'> Product Title Should Contain more than 5 characters </div> : null}

                            <div className='signup_form_btn_main homeSignup'>
                                <button>Submit<span><FaArrowCircleRight /></span></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}
