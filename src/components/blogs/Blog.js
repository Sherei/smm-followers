import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./blog.css"
const Blog = () => {
  return <>

<div className="container miantopic mb-5">
    <div className="row mt-5 ">
        <div className="col-lg-6 col-md-6 col-sm-12 left-img d-flex flex-column justify-content-center">
            <h1 className='mian-title'>SmmFollows <br /> <span className='blog-clr'>Blogs</span></h1>
            <p>Follow our blog and stay informed about the latest trends in social media marketing.</p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 right-img">
            <img src="https://cdn.mypanel.link/9b5331/p8gaxjz2m830wfs1.png" alt="" />
        </div>
    </div>

    <Card className='px-3 py-3 mt-5' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.mypanel.link/9b5331/192jauxxt1c5g0yk.png" />
      <Card.Body>
        <Card.Title className='mt-2'>
            <Card.Link href="#">What is the Social Media Marketing Smm Panel? How Smmfollows work?</Card.Link>
            </Card.Title>
        <Card.Text className='mt-3'>
          SThe smmfollows is an online service/tool/site that features affordable SMM Panel and that enables business leaders to manage their social network accounts from a single platform where they can add their accounts, connect with friends/followers, and manage their social media posts.
        </Card.Text>
        <Button variant="primary" className='btn-card'>Read More</Button>
      </Card.Body>
    </Card>
</div>

  </>
}

export default Blog
