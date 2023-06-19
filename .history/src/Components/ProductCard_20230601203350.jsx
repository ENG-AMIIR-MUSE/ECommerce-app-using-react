import React from 'react'
function ProductCard(){
    return(
        <div className=' m-auto overflow-hidden  w-[80%] rounded-lg border  border-red-900 sm:w-1/4 md:w-1/5 h-[310px]'>
         <div className=' w-full  h-[230px]'>
         <img src='../../public/JUST 2018_10.png'  alt='adfadlfj'/>
         </div>
         <div className='flex  justify-end p-2 mb-10 pb-10'>
            <h3 className='mb-30text-black text-2xl '>Title of the image</h3>
            <p className='my-10 bg-green-900 rounded-lg h-10 text-center text-red-900 '>Price</p>
            

         </div>

        </div>
    )
}
export default ProductCard;