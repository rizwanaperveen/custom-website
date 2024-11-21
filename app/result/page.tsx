'use client'
import React from 'react'
import '../result/result.css'

    
    const result = () => {
      return (
        <>
        <div className='result'>
          <h1 className='he1'>Grand Entrance Exam Result</h1>
          
          <label className='in'>Registration Number*</label>
          <input className='inp' type="text" id="registration" name="registration" placeholder='Enter Registration Number'/>
          <label className='in'>CNIC or B-FORM NUMBER*</label>
          <input className='inp' type="text" id="registration" name="registration" placeholder='Enter CNIC or B-Form Number' />
        
        <button className='bt'>Get Result</button>
        </div>
        </>
      )
    }
    
    export default result