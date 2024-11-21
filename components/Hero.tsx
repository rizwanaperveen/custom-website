import React from 'react'
import Image from 'next/image'
import '../app/styles/hero.css'

const Hero = () => {
  return (
    <>
    <div className='hero'>

      {/*left div*/}
      <div className='left'>
        <h1 className='governor'>Governor Sindh
        </h1>
        <h2 className='kamran'>Kamran Khan Tessori</h2>
        <h3 className='cloud'>Certified Cloud
Applied Generative AI
Engineer (GenEng)</h3>
<div className='p'>
<p className='p'>Earn up to $5,000 / month</p>
<p className='p'>Now admissions are open in Hyderabad</p>

<button className='btn'>APPLY NOW</button>

<div className='numbr'>562,143</div>
<div className='accepted'>Accepted Applications</div>
  
    </div>
      </div>
    {/*right div*/}
    <div className='right'>
        <Image 
        src="/governor.PNG" 
        alt="hr" 
        width={700} 
        height={650}
        objectFit="cover"
        />
    </div>
     </div>
    
   </>
  )
}

export default Hero