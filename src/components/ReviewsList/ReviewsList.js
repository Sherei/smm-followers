import axios from 'axios'
import "./reviewList.css"
import React, { useEffect, useState } from 'react'

export const ReviewsList = () => {

  let [review, setReview] = useState([])

  useEffect(() => {
    axios.get("/feedback").then((res) => {
      setReview(res.data)
    })
  }, [])

  return <>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <table>
            <thead>
              <td>Sr#</td>
              <td>Name</td>
              <td>Email</td>
              <td>Message</td>
            </thead>
            <tbody>
              {review.map((data, index) => {
                return <tr>
                  <td>{index + 1}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.message}</td>

                </tr>
              })
              }
            </tbody>
          </table>


        </div>

      </div>

    </div>
  </>
}
