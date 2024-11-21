import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Link from 'next/link';
import '../app/styles/footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='cor'>
            <h1 className='heading-core'>Core Courses</h1>
            <li>Programming Fundamentals</li>
            <li>Web2 Using Next js</li>
            <li>Earn As You Learn</li>
        </div>
        <div className='advanced'>
            <h1 className='heading-advanced'>Advanced Courses</h1>
            <li>Artificial Intelligence</li>
            <li>Web3 and Metaverse</li>
            <li>Cloud-Native and Metaverse</li>
            <li>Ambient Computing and IoT</li>
            <li>Genomic and Bioinformatics</li>
            <li>Network Programmability and Automation</li>
            
        </div>
        <div className='social'>
          <h1 className='heading-social'>Social Links</h1>
       <div className='icons'>
        <FaFacebook className='face'/>
        <FaYoutube className='you'/>
        <FaSquareTwitter className='twit'/>
        <FaInstagramSquare className='instagram '/>
        </div>

       <div className='email'>
       <div><MdOutlineEmail className='mail'/></div>
       <div> <Link href="/">education@governorsindh.com</Link></div>
         </div>
        </div>

    </div>
  )
}

export default Footer