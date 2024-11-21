import React from 'react'
import { FaFacebook } from "react-icons/fa";
import '../apply/apply.css';



const page = () => {
  return (
    <div>
       <div className='try'>
        <div className='para'>
          Before continuing to the application please subscribe on these social media platforms.
          </div> 
          <div>
          <FaFacebook className='fac'/>
          </div>
          
            <button className='bt'>CONTINUE</button>
    
          <div className='al'>
            <p>Already Applied?</p>
            <a href="#"><p className='ab'>Get Admit Card</p></a>
          </div>
        </div>
        <div className='z'>
          <ol className='z'>
            <li>FACEBOOK</li>
            <li>YOUTUBE</li>
             <li>TWITTER</li>
            <li>INSTAGRAM</li>
            <li>APPLY</li>
            </ol>
        </div>
    </div>
  )
}

export default page