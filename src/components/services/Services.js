import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./services.css"
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import axios from 'axios';

export const Services = () => {
    let [service, setService] = useState([])

    let move = useNavigate()

    useEffect(() => {
        axios.get('/benefits').then((res) => {
            setService(res.data)
        })
    }, [])

    useEffect(() => {
        Aos.init({
            offset: 60,
            duration: 400,
            easing: 'ease-out',
            delay: 0,
        });
    }, [])
    return <>

        <div className='container d-flex flex-column text-center justify-contant-center services_main'>
            <h2 className='benefits'>Benefit of using our Cheap SMM Services</h2>
            <p className='services_main_article'>
                we Offer several advantages that make us the <strong>best SMM panel.</strong>
                Our <Link to="/service">SMM Services</Link>  are diversified which makes us the cheapest panel on the market.
                Many agencies and freelancers around the world trust us.
                We are also available to answer all your questions 24/7.
            </p>
            <br />
        </div>

        <div className="container-fluid">
            <div className='row serviceCardMain gap-5 d-flex justify-content-center'>
                {service.reverse().map((data) => {
                    return <>
                        <div className='col-lg-3 col-md-4 col-sm-12   servicesCard ' data-aos="zoom-in" onClick={() => {
                            move('/service')
                        }}>
                            <div>
                                <img src={data.pic} alt="" />
                            </div>
                            <div>
                                <h3 className='benefit_title'>{data.title}</h3>
                            </div>
                            <div>
                                <p className='benefit_p'>{data.description}</p>
                            </div>
                        </div>
                    </>
                })}

            </div >
        </div>
    </>
}
