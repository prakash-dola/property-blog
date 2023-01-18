import React from 'react'
import card from './ProductDate'
import'./maincontent.css'

const MainContent=() =>{
    console.log(card);
    const listItems=card.map((item)=>
    <div className="card" key={item.id}>
        <div className='card-img'>
            <img src={item.thumb}/>
        </div>
        <div className='card-header'>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p className='price'>{item.price}<span>{item.currency}</span></p>
            <div className='btn'><button className='btn'>add to cart</button></div>
        </div>

    </div>);

return(
    
    
    <div className='main-content'>

        {listItems}
    </div>
    
)
}

export default MainContent