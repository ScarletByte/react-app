import React, { useEffect, useState } from 'react'



function SimpleApi() {
const [getData,setData] =useState([])
    const [error,setError] =useState(null)

    //I've added state
const [selectedId, setSelectedId] = useState(null);
const toggleDescription = (id) => {
  setSelectedId((prevId) => (prevId === id ? null : id));
};
    

useEffect(() => {
// this is the old method to call API//
    const url="https://fakestoreapi.com/products"

fetch(url).then((response) =>{
    if(!response.ok) {
        throw new Error("Fail to fetch data")
    }
    return response.json()
}).then((data)=>{
    console.log(data);
 setData(data)   
}).catch((error)=>{
    setError(error)
})
}, [])




if (error) return <p>Error {error.message}</p>

  return (
    <div className='flex flex-wrap'>
<h1>SimpleApi</h1>

{
    getData.map((items)=>(
        <div>
            <h1>{items.title}</h1>
            <img className="w-[200px]" src={items.image} alt="product image" />
            <b>{items.price}</b>
            <p>{items.rating["rate"]}</p>
            <button>Buy</button>


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
  );
}

export default SimpleApi