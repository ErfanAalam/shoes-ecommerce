import React from 'react'
// import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

function Cards({ img, title, star, reviews,newPrice, prevPrice}) {
  return (
    <section className="card">
    <img
      src={img}
      alt={title}
      className="card-img"
    />
    <div className="card-details">
      <h3 className="card-title">{title}</h3>
      <section className="card-review">
       {star}{star}{star}{star}
        <span className="total-review">{reviews}</span>
      </section>
      <section className="card-price">
        <div className="price">
          <del>{prevPrice}</del> {newPrice}
        </div>
        <div className="bag">
          <BsFillBagHeartFill />
        </div>
      </section>
    </div>
  </section>
      
   
  )
}

export default Cards
