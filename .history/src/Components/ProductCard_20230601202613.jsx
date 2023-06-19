import React from 'react'
function ProductCard(){
    return(
        <div className='bg-green-900 m-auto overflow-hidden  w-[80%] rounded-lg border  border-red-900 sm:w-1/4 md:w-1/5 h-[300px]'>
         <div className='bg-red-900 w-full  h-[230px]'>
         <img src='../../public/JUST 2018_10.png'  alt='adfadlfj'/>
         </div>
         <div className='flex  justify-end p-5'>
            <h3 className='text-black text-2xl '>Title of the image</h3>
            <p className='bg-green-900 text-red-900 '>Price</p>

         </div>

        </div>
    )
}
export default ProductCard;