'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaAngleDown } from "react-icons/fa";
import '../app/styles/nav.css';
import { CompulsoryData } from '@/data/main/compulsory';
import { tracks } from '@/data/main/tracks';
const navLinks = [
  {title: "home", link: "/", id: "1"},
  {title: "apply", link: "/apply", id: "2"},
  {title: "jobs", links: "/jobs", id: "3"},
  {title: "result", links: "/result", id: "4"}
  
]

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
    <main className='container'>
      
     <div className='nav'>
     <span className='logo'>   
        <Image src="/logo.png" alt="golo" width={110} height={120} />
      </span>
     <h1 className='heading'>Tuition Free Education Program on Latest Technologies</h1>
  

      <div className='links'><Link href="/"  className='links'>Home</Link></div>
      <div className='links'><Link href="/apply"  className='links'>Apply</Link></div>
      <div className='links'><Link href="/jobs"  className='links'> Jobs</Link></div>
      <div className='links'><Link href="/result"  className='links'>Result</Link></div>
      <div className='links' onClick={() => setShowMenu(!showMenu)}><Link href="/"  className='links'>Courses</Link><span><FaAngleDown className='arrow'/></span>
      {showMenu && (
          <div className='my'>
            <div className='box_shadow'>
              <h1 className='h1'>Core Courses</h1>
              {CompulsoryData.map((val) => (
                <Link href={`/compulsory/${val.id}`} key={val.id}>
                
              
                <div className='core'>{val.text}</div>
                </Link>
                ))}
              
              <h1 className='h2'>Advanced Courses</h1>
              {tracks.map((val) => (
                <Link href={`/tracks/${val.id}/4`} key={val.id}>
                <div className='core'>{val.name}</div></Link>
              
            
              ))}
            </div>
          </div>
        )
      }
        </div>
      </div>
    </main>
    </>
  )
}

export default Navbar