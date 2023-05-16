import React, { useEffect, useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import axios from "axios"
import "./faq.css"

export const Faq = () => {

  let [faq, setFaq] = useState([]);

  useEffect(() => {
    axios.get('/faqs').then((res) => {
      setFaq(res.data)
    })
  }, [])

  return <>
    <div className="container">
      <h1 className='d-flex  justify-content-center h1-style mb-5'>Frequently Asked Question</h1>

      <div className="row mb-5">
        <div className="col-lg-12 col-md-12 ">
          <Accordion defaultActiveKey="0">
            {Array.isArray(faq) ? (
              faq.map((data, index) => (
                <Accordion.Item eventKey={index} key={index}>
                  <Accordion.Header>{data.title}</Accordion.Header>
                  <Accordion.Body>
                    {data.description}
                  </Accordion.Body>
                </Accordion.Item>
              ))
            ) : (
              <p>Loading...</p>
            )}

          </Accordion>
        </div>
      </div>

    </div>
  </>
}