import React from "react";
import "./Catagory.css";
import Input from "../../Components/Input";

function Catagory({handleChange}) {
  return (
    <>
    <div className="ml">
      <h2 className="sidebar-title">Catagory</h2>


    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value="" name="test" />
      <span className="checkmark"></span>All
    </label>


    <Input 
    handleChange={handleChange}
    value="sneakers"
    title="Sneakers"
    name="test"
    />
    <Input 
    handleChange={handleChange}
    value="flats"
    title="Flats"
    name="test"
    />
    <Input 
    handleChange={handleChange}
    value="sandals"
    title="Sandals"
    name="test"
    />
    <Input 
    handleChange={handleChange}
    value="heels"
    title="Heels"
    name="test"
    />

    </div>
    </>
  );
}

export default Catagory;
