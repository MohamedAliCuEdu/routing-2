// import react components:
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";

// import pages:
import Home from "./home";
import Products from "./products/products";
import Product from "./products/product";

import PageLayout from "./layouts/page-layouts";
import About, {loader as aboutData} from "./about";

const router  = createBrowserRouter(createRoutesFromElements(
      <Route element={<PageLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="products/:name" element={<Product />}></Route>
        <Route path="about" element={<About />}  loader={aboutData}></Route>
      </Route>
))
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(
  <RouterProvider router={router}/>
);