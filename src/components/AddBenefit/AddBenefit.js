import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { FaPen, FaAudioDescription, FaArrowCircleRight, FaCameraRetro } from "react-icons/fa";
import axios from 'axios';
import { toast } from 'react-toastify';
import "./addBenefit.css"


export const AddBenefit = () => {

    let move = useNavigate()
    let { register, handleSubmit, reset, formState: { errors } } = useForm()


    function Benefit(data) {

        console.log(data)

        let meraForm=new FormData()
        meraForm.append('title', data.title)
        meraForm.append('description', data.description)
        meraForm.append('pic', data.pic?.[0])

        axios.post("/benefits", meraForm).then((res)=>{
            if(res){
                toast.success("Submitted")
                // reset()
            }
        })
    }
    return <>

        <div className='container benefit'>
            <div className='row'>
                <div className='col'>

                    <div className='home_form_main'>
                        <form onSubmit={handleSubmit(Benefit)}>
                            <div className='home_form_data'>
                                <div className='icon'><FaPen /></div>
                                <input {...register('title', { required: true })} type="text" placeholder='Enter Benefit Title *' />
                            </div>
                            {errors.title ? <div className='error'>Title Field is required </div> : null}
                            <div className='home_form_data'>
                                <div className='icon'><FaAudioDescription /></div>
                                <input  {...register('description', { required: true })} type="text" placeholder="Description *" />
                            </div>
                            {errors.description ? <div className='error'> Description is Required </div> : null}

                            <div className='home_form_data'>
                                <div className='icon'><FaCameraRetro /></div>
                                <input className='pic' {...register('pic', { required: true })} type="file" />
                            </div>
                            {errors.pic ? <div className='error'> Picture is Required </div> : null}

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

