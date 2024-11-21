import React from 'react';
import Image from 'next/image';
import '../app/styles/courses.css';

const Courses = () => {
  return (
    <>
    <div className='simple'>
        <h1 className='head1'>Core Courses Sequence
        </h1>
        <div className='img'>
        
        <div><Image src="/course1.jpg" alt="governor" width={400} height={300} objectFit="cover" />Programming Fundamentals</div>
      
        
        <div><Image src="/course2.jpg" alt="governor" width={400} height={300} objectFit="cover" />Web2 Using Next js</div>
        
        <div><Image src="/course3.jpg" alt="governor" width={400} height={300} objectFit="cover" />Earn As You Learn</div>
        </div>
        </div>
        
       <div className='simple'>
       <h1>Advanced Courses</h1>
       <div className='imge'>
        <div><Image src="/advance1.jpg" alt="governor" width={400} height={300} objectFit="cover" />Artificial Intelligence</div>
        <div><Image src="/advance2.jpg" alt="governor" width={400} height={300} objectFit="cover" />Web3 and Metaverse</div>
        <div><Image src="/advance3.jpg" alt="governor" width={400} height={300} objectFit="cover" />Cloud-Native and Computing</div>
        <div><Image src="/advance4.jpg" alt="governor" width={400} height={300} objectFit="cover" />Ambient Computing and IoT</div>
        <div><Image src="/advance5.jpg" alt="governor" width={400} height={300} objectFit="cover" />Genomics and Bioinformatics</div>
        <div><Image src="/advance6.jpg" alt="governor" width={400} height={300} objectFit="cover" />Network Programmability and Automation</div>
       </div>
  
       
        </div>
        </>
  )
}

export default Courses