import React from 'react'
import Navbar from '../compnents/Navbar'
import homedata from '../compnents/Homeus'
import  "../compnents/Home.css"
import { Link } from 'react-router-dom';
import Footer from '../compnents/Footer';
const Home = () => {
  return (
    <>
  <Navbar/>
  <div className='home-bar'>
   <h1>welcome to see the visual of sorting algorithm</h1>
    {
       homedata.map((item,index)=>
       {
        return(
          <div className='home-element'>
          <div className={item.cName}>
          <Link to={item.url}>{item. buttonText}</Link>
          </div>
          </div>
        )
       })
    }
    <Footer/>
    </div>
    </>
  )
}

export default Home
