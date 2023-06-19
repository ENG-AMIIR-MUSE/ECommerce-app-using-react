import React from 'react'
function ProductCard(props){
  const { product } = props
//   console.log(products.id)

    return(
   
        <div className=' m-auto  w-[80%] rounded-lg border  border-red-900 sm:w-1/3 md:w-1/4 h-[380px]'>
            <div className=' w-full  h-[230px]'>
                <img src={product.image} alt='adfadlfj'/>
            </div>
            <div className='flex my-40 justify-end p-2 mb-10 pb-10 h-[200px] '>
                <h3 className='mb-30  my-7 pr-10  text-2xl text-green-900 '>{product.title}</h3>
                <p className='my-7 bg-green-900 rounded-lg h-10 text-center  bg-green-900 text-white'>Price</p>
            </div>

        </div>
    )
}
export default ProductCard;