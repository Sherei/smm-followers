import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";
import axios from "axios";
import "./testimonial.css"

export const Testimonial = () => {

    let [feedback, setFeedback] = useState([])

    useEffect(() => {

        axios.get("/feedback").then(function (res) {
            setFeedback(res.data)
        })
    }, [])


    return <>
        <div className="container">
            <div className="row">
                <div className="col"><h2 className='benefits testimonial_heading'>Customer Reviews</h2></div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        // navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            feedback.reverse().map((data) => {
                                return <>
                                    <SwiperSlide>
                                        <div className="col col-xl-8 col-lg-8  col-md-8 col-sm-10 testimonial">
                                            <div className="testimonial_display">
                                                <div className="testimonial_img">
                                                    <img className="Swiper-img" src="https://cdn.mypanel.link/9b5331/harsokmc4k0nt5yl.png" alt="" />
                                                </div>
                                                <div>
                                                    <h1>{data.name}</h1>
                                                </div>
                                                <div>
                                                    <h3 className="test_message">{data.message}</h3>
                                                </div>
                                                <div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </>
                            })
                        }

                    </Swiper>
                </div>
            </div>
        </div>
    </>
}
