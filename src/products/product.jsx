import { useParams, Link, useLocation } from "react-router-dom";
import allProducts from "./products-data.json";

export function loader(){
  return 'i m data!'
}

function Product() {
  const params = useParams();
  const ele = allProducts.filter((e) => e.name === params.name)[0];
  const location = useLocation();
  const search = location.state?.search || "";

  console.log(params);
  console.log(ele);
  console.log(allProducts);
  console.log(location);

  if (ele !== null) {
    return (
      <section>
        <h1>product page:</h1>
        <div className="product">
          <h4>{ele.name}</h4>
          <span>{ele.price}</span>
        </div>
        <Link to={`..?${search}`} relative="path">back to products</Link>
        {/* back to all products page */}
      </section>
    );
  } else {
    return <h1>not found!</h1>;
  }
}

export default Product;
