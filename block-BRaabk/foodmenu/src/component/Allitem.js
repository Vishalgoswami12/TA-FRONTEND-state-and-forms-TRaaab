import React, { useState } from "react"
import data from "../data/data";


function Allitem(props){
    const [ allFood, setAllFood ]= useState([]);

    const filterFood = (cat) => {
        const filterData = data.filter(item => item.category === cat);
        setAllFood(filterData);
    }
    return(
        <>
        <div className="center">
        <button onClick={()=>
            setAllFood(data)
        }>All</button>
        <button onClick={()=>filterFood("breakfast")}>Breakfast</button>
        <button onClick={()=>filterFood("lunch")}>Lunch</button>
        <button onClick={()=>filterFood("shakes")}>Shakes</button>
        </div>
        <div className="grid">
        {
            allFood.map((ele)=>{
                const {img,title,desc,price}=ele;
                return(
                    <div className="flex width">
                        <img src={img} alt={title}/>
                        <div>
                            <h4>{title}</h4>
                            <p>{desc}</p>
                        </div>
                        <p>{price}</p>
                    </div>
                )
            })
        }
        </div>
        </>
    )
}

export default Allitem