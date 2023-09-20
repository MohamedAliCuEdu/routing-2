import { NavLink, useSearchParams } from "react-router-dom";
import allProducts from "./products-data.json";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  console.log(searchParams.toString());

  const typeFilter = searchParams.get("type");
  // const offerFilter = searchParams.get("offer");

  const displayProducts = typeFilter
    ? allProducts.filter((e) => e.type === typeFilter)
    : allProducts;
  // const displayProducts = offerFilter
  //   ? allProducts.filter((e) => e.offer === offerFilter)
  //   : allProducts;

  
// function genNewSearchParamString(key, value) {
//   const sp = new URLSearchParams(searchParams)
//   if (value === null) {
//     sp.delete(key)
//   } else {
//     sp.set(key, value)
//   }
//   return `?${sp.toString()}`
// }


  return (
    <section className="all-products">
      <div className="filter">
        <div className="type">
          type:
          <button onClick={() => setSearchParams({ type: "food" })}>
            food
          </button>
          <button onClick={() => setSearchParams({ type: "drinks" })}>
            drinks
          </button>
          <button onClick={() => setSearchParams({ type: "study" })}>
            study
          </button>
        </div>
        <div className="offer">
          offfer:
          <button onClick={() => setSearchParams({ offer: "true" })}>true</button>
          <button onClick={() => setSearchParams({ offer: "false" })}>
            false
          </button>
        </div>
        <div className="reset">reset: <button onClick={() => setSearchParams({})}>reset</button></div>
      </div>
      <div className="content">
        {displayProducts.map((product) => {
          return (
            <div key={product.name} className="product">
              <h4>{product.name}</h4>
              <span>{product.price}</span>
              <br />
              <NavLink to={product.name} state={{searchParam: searchParams.toString()}}>show</NavLink>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Products;
