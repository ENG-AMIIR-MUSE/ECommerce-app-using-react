import React from 'react'
import { useParams } from 'react-router-dom';
function ProductCard(props){
const parmas  = useParams();
const { products } =  props;

const selectedProduct  = products.find((product)=> product.id === Number(parmas.id)) 

console.log(selectedProduct.id)
    return(
     <>
   
    <div className='bg-blue-900  lg:max-w-sm  md:bg-yellow-900  md:max-w-sm sm:w-1/2 sm:bg-green-900 '>
        <div className='flex'>

            <div>iamge</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quidem optio accusantium est odit officia officiis tempore harum blanditiis beatae facilis sunt sapiente, alias amet nulla iusto. Reprehenderit, ducimus officiis!</div>
        </div>

    </div>
     
     </>
        
    )
}
export default ProductCard;