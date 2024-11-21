import React from 'react'
import Image from 'next/image';
import '../app/styles/content.css'
import Slider from './Slider';

const Content = () => {
  return (
    <div>
        <h1 className='contents'>Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</h1>
        <p className='par'>
        The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.</p>
        <div className='image3'>
            <Image
                src="/1image.jpg"
                alt="governor"
                width={400}
                height={300}
                className="image1"  
             />
              <Image
                src="/2image.jpg"
                alt="governor" 
                width={400}
                height={300}
                className="image2"
             />
            <Image
                src="/3image.jpg"
                alt="governor"
                width={400}
                height={300} 
                className="image3"
             />


        </div>
       <Slider />
    </div>
  )
}

export default Content