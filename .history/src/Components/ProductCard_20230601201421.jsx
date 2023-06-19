import React from 'react'
function ProductCard(){
    return(
        <div className='bg-green-900 flex justify-center m-auto   w-[80%] rounded-lg border  border-red-900 sm:w-1/4 md:w-1/5 h-[230px]'>
          <img src='../../public/vite.svg' alt='adfadlfj'/>
          <img src="data:image/jpeg;base64,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" alt='misisi'/>

        </div>
    )
}
export default ProductCard;