import React from 'react'


const Card = ({title, paragraph, image}) => {
  return (
    <div>
      <div className="md:w-[260px] w-full p-10 bg-white rounded-3xl">
        <div className="mx-auto w-[80px] h-[80px] mb-4">
          <img src={image} alt="imageHere" className='w-full h-full'/>
        </div>
        <div className="flex flex-col justify-start">
          <h1 className="font-bold mb-4">{title}</h1>
          <p className="">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card
