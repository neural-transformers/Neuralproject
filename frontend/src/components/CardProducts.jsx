import React from 'react'


function CardProducts(props) {
  let {title,desc,img} = props;
  return (
    <div className='container shadow-lg rounded-lg grid grid-cols-3 shadow-black'>
        <div className='text-orange p-2 grid grid-row-2 justify-self-center'>
            <h2 className='font-bold text-xl justify-self-center leading-snug'>{title}</h2>
            <img src={img} alt="" className="m-7" />
        </div>
       
        <div className='col-span-2 m-20'>
            <p className=' text-xl text-justify leading-10 '>{desc}</p>
        </div>
    </div>
  )
}

export default CardProducts