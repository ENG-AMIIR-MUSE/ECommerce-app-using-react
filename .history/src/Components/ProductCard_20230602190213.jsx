import React from 'react'
function ProductCard(props){
  const { products } = props
//   console.log(products.id)

    return(
        <div className=' m-auto  w-[80%] rounded-lg border  border-red-900 sm:w-1/3 md:w-1/4 h-[600px]'>
         <div className=' w-full  h-[230px]'>
         <img src={products.image} alt='adfadlfj'/>
         </div>
         <div className='flex my-40 justify-end p-2 mb-10 pb-10 h-[300px] bg-red-900'>
            <h3 className='mb-30  my-7 pr-10 text-black text-2xl  bg-red-900'>{products.title}</h3>
            <p className='my-7 bg-green-900 rounded-lg h-10 text-center text-red-900  bg-black'>Price</p>
            

         </div>

        </div>
    )
}
export default ProductCard;