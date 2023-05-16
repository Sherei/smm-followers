import React, { useState } from 'react'
import "./dashboard.css"
import { useDispatch, useSelector } from 'react-redux'
import { NewOrder } from '../neworder/NewOrder'
import { MassOrder } from '../massOrder/MassOrder'
import { Services2 } from "../services2/Services2";
import { ReviewsList } from '../ReviewsList/ReviewsList'
import {AddBenefit} from "../AddBenefit/AddBenefit"
import { Feedback } from '../feedback/Feedback'
import {AddFaqs} from "../AddFaqs/AddFaqs"

import { FaDollarSign, FaPowerOff, FaCog } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
export const Dashboard = () => {

  let user = useSelector(store => store.userSection.cu)
  let [activeTab, setActiveTab] = useState("New Order")
  let dispatch=useDispatch()
  let move=useNavigate()

  const handleButtonClick = (tabName) => {
    setActiveTab(tabName)
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col col-lg-3 col-md-3 profile_menu' >
          <img src="logo.png" alt="" />
          <div className='profile_img_box'>
            <div className='img_box'>
              <img src="https://cdn.mypanel.link/9b5331/harsokmc4k0nt5yl.png" alt="" />
            </div>
            <h3 className='username'>{user.firstName}</h3>
            {user.email == 'asd@gmail.com' &&
              <div className='profile_detail_box'><p>Admin</p></div>
            }
            {user.email != 'asd@gmail.com' &&
              <div className='profile_detail_box'><p>$1.02 Account Balance</p></div>
            }
          </div>
          <div className='dashboard_btn'>
            {user.email == 'asd@gmail.com' &&
              <>
                <button
                  className={activeTab === "AddBenefit" ? 'active' : ""}
                  onClick={() => handleButtonClick("AddBenefit")}
                >AddBenefit
                </button>

                <button
                  className={activeTab === "ReviewsList" ? 'active' : ""}
                  onClick={() => handleButtonClick("ReviewsList")}
                >ReviewsList
                </button>

                <button
                  className={activeTab === "AddFaqs" ? 'active' : ""}
                  onClick={() => handleButtonClick("AddFaqs")}
                >AddFaqs
                </button>
              </>
            }
            {user.email != 'asd@gmail.com' &&
              <>
                <button
                  className={activeTab === "New Order" ? 'active' : ""}
                  onClick={() => handleButtonClick("New Order")}
                >
                  New Order
                </button>
                <button
                  className={activeTab === "Mass Order" ? 'active' : ""}
                  onClick={() => handleButtonClick("Mass Order")}
                >
                  Mass Order
                </button>
                <button
                  className={activeTab === "Benefits" ? 'active' : ""}
                  onClick={() => handleButtonClick("Benefits")}
                >Benefits
                </button>
                <button>Orders</button>
                <button>Add funds</button>
                <button>FAQ</button>
                <button>API</button>
                <button>Tickets</button>
                <button>Terms</button>
                <button>Affilitates</button>
                <button>Child Panel</button>
                <button 
                  className={activeTab === "Feedback" ? 'active' : ""}
                  onClick={() => handleButtonClick("Feedback")}
                >FeedBack</button>
                <button>Updates</button>
              </>
            }
          </div>
        </div>
        <div className='col col-lg-9 col-md-9 col-sm-12 dashbaord_detail'>
          <div className='row dashboard_fix'>
            <div className='col col-xl-9 col-lg-9 col-md-9 currently'>
              Currently on <span>{activeTab}</span>
            </div>
            <div className='col col-xl-3 col-lg-3 col-md-3 dashboard_icons'>
              <div className='dashboard-icons'>
                <FaDollarSign />

              </div>
              <div className='dashboard-icons'>
                <FaCog />

              </div>
              <div className='dashboard-icons' onClick={()=>{
                  dispatch({
                    type:"LOGOUT_USER"
                  })
                  move('/')
              }}>
                <FaPowerOff />

              </div>
            </div>
          </div>
          {activeTab === "Feedback" && <Feedback />}
          {activeTab === "AddBenefit" && <AddBenefit />}
          {activeTab === "ReviewsList" && <ReviewsList />}
          {activeTab === "AddFaqs" && <AddFaqs/>}
          {activeTab === "New Order" && <NewOrder />}
          {activeTab === "Mass Order" && <MassOrder />}
          {activeTab === "Services" && <Services2 />}
    
        </div>
      </div>
    </div>
  )
}
