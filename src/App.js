import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Product/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";
import products from "./DB/data";
import Cards from "./Components/Cards";

function App() {
  const [selectedCatagory, setSelectedCatagory] = useState(null);

  // input filter
  const [query, setquery] = useState("");

  const handleInputChnage = (event) => {
    setquery(event.target.value);
  };

  const filtereditem = products.filter((product) =>
    product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // Radio filteras

  const handleChange = (event) => {
    setSelectedCatagory(event.target.value);
  };

  // buttons

  const handleClick = (event) => {
    setSelectedCatagory(event.target.value);
  };

  function filterData(products, selected, query) {
    let filteredproducts = products;

    // filtering input items

    if (query) {
      filteredproducts = filtereditem;
    }

    // selected filter

    if (selected) {
      filteredproducts = filteredproducts.filter(
        ({ catagory, color, company, newPrice, title }) =>
          catagory === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredproducts.map(({ img, title, star, reviews,newPrice, prevPrice }) => (
      <Cards
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    ));
  }

  const result = filterData(products, selectedCatagory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      {/* <Nav query={query} handleInputChnage={handleInputChnage} /> */}
      <Nav query={query} handleInputChnage={handleChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
