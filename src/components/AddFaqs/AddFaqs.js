import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { FaPen, FaAudioDescription, FaArrowCircleRight, FaCameraRetro } from "react-icons/fa";
import "./addfaqs.css"
import axios from 'axios';
import { toast } from 'react-toastify';

export const AddFaqs = () => {

    let { register, handleSubmit, reset, formState: { errors } } = useForm()
    let move = useNavigate()

    function AddFaqs(data) {

        axios.post('/faqs', data).then((res) => {
            if (res) {
                toast.success("Faqs Added")
            }
        })
    }
        return <>
            <div className='container benefit'>
                <div className='row'>
                    <div className='col'>

                        <div className='home_form_main'>
                            <form onSubmit={handleSubmit(AddFaqs)}>
                                <div className='home_form_data'>
                                    <div className='icon'><FaPen /></div>
                                    <input {...register('title', { required: true })} type="text" placeholder='Enter Question *' />
                                </div>
                                {errors.title ? <div className='error'>Question Field is required </div> : null}
                                <div className='home_form_data'>
                                    <div className='icon'><FaAudioDescription /></div>
                                    <textarea className='faq_area' {...register('description', { required: true })} type="text" ></textarea>
                                </div>
                                {errors.description ? <div className='error'> Answer Filed is Required </div> : null}

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
