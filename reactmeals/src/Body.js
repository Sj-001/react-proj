import React, {useState, useEffect} from 'react';
import './Body.css'
import axios from 'axios';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Body() {

  const[items, setitems]=useState([])
  useEffect(()=>{
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then((response)=>{
      console.log(response.data)
      setitems(response.data.meals)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
  .then((response)=>{

  })

  const itemslist=items.map((item)=>{
    return <div className="col-md-4">
      <p>{item.strMeal}</p>
      <img src={item.strMealThumb} className='img-fluid'/>
      <p>{item.idMeal}</p>
    </div>
  })
  return (
    <div className="row">
      {itemslist}
    </div>
  );
}

export default Body;