import axios from 'axios'
import React, { memo, useContext, useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ColourContext } from '../ColourPalette/ColourContext'

function DataAxios() {

console.log("Axios product");


    let navigate=useNavigate()
    const {colour}=useContext(ColourContext)

   const [getData,setData] =useState([])
           const [error,setError] =useState(null)
       
   const [selectedId, setSelectedId] = useState(null);
   const toggleDescription = (id) => {
     setSelectedId((prevId) => (prevId === id ? null : id));
   };
   
   const toProductDetails=(productId)=>{
    navigate(`/product-details/${productId}`)
   }

     useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
        .then(res =>
            {
            setData(res.data);
            console.log(res.data);
          })
        .catch(err => setError(err.message));
}, []);
 
        
 return (
    <div className='text-amber-300' style={{background:colour}}>

    {
    getData.map((items,i)=>(
        <div key={i}>
            <h1>{items.title}</h1>
            <img className="w-[200px]" src={items.image} alt="product image" />
            <b>{items.price}</b>
            <p>{items.rating["rate"]}</p>
            <button onClick={()=>toProductDetails(items.id)}>Buy</button>


{/*button - Show description*/}
           <button
            onClick={() => toggleDescription(items.id)}
            className={`${
              selectedId === items.id
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-500 hover:bg-green-600"
            } text-white py-1 px-4 rounded-md transition-all`}
          >
            {selectedId === items.id ? "Hide Description" : "Show Description"}
          </button>

          {/* Description section */}
          <div
            className={`mt-3 text-sm text-gray-600 transition-all duration-300 ${
              selectedId === items.id
                ? "opacity-100 max-h-40"
                : "opacity-0 max-h-0 overflow-hidden"
            }`}
          >
            <p>{items.description}</p>
          </div>

        </div>
      ))}
 </div>
  )
}

export default memo (DataAxios)