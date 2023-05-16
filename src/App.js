import { Navbarr } from "./components/navbar/Navbar";
import { Signup } from "./components/signup/Signup";
import { Home } from "./components/home/Home";
import Blog from "./components/blogs/Blog";
import {Faq} from "./components/faq/Faq";
import Footer2 from "./components/footer2/Footer2";
import { Services2 } from "./components/services2/Services2";
import { Dashboard } from "./components/dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import 'react-toastify/dist/ReactToastify.css';
import "../src/App.css"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";



function App() {

  let dispatch = useDispatch()

  useEffect(() => {
    axios.post('/userSession', { token: localStorage.getItem('meraToken') }).then((res) => {
      if (res.data) {
        dispatch({
          type: "LOGIN_USER",
          payload: res.data
        })
      }
    })

  }, [])
  let user = useSelector(store => store.userSection.cu)

  return <div className="main_body">

    <BrowserRouter>

      {user.email == undefined &&
        < Navbarr />
      }
      <main>
        <Routes>
          {user.email == undefined &&
            <>
              <Route exact path='/' element={<Home />}></Route>
              <Route exact path='/signup' element={<Signup />}></Route>
              <Route exact path='/services' element={<Services2 />}></Route>
              <Route exact path='/blogs' element={<Blog />}></Route>
              <Route exact path='/faq' element={<Faq />}></Route>
            </>
          }
          <Route exact path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </main>
      {user.email == undefined &&

        <Footer2 />
      }
    </BrowserRouter>
    <ToastContainer />
  </div>
}
export default App