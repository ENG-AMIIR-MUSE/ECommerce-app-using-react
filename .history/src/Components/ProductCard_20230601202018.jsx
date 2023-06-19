import React from 'react'
function ProductCard(){
    return(
        <div className='bg-green-900 m-auto   w-[80%] rounded-lg border  border-red-900 sm:w-1/4 md:w-1/5 h-[230px]'>
         <div className='bg-red-900 w-full  h-[230px]'>
         <img src='../../public/JUST 2018_10.png' className='' alt='adfadlfj'/>
         </div>
         <div className='flex  justify-end'>
            <p>Price</p>
            <h3>Title of the image</h3>
         </div>

        </div>
    )
}
export default ProductCard;