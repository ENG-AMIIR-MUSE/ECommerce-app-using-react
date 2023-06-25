import React from 'react'
import { useParams } from 'react-router-dom';
function ProductCard(props){
const parmas  = useParams();
const { products } =  props;

const selectedProduct  = products.find((product)=> product.id === Number(parmas.id)) 

console.log(selectedProduct.id)
    return(
     <>
   
    <div className='bg-blue-90'>

    </div>
     
     </>
        
    )
}
export default ProductCard;