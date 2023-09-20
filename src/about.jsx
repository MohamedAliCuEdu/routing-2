import { useLoaderData } from "react-router-dom";
import data from './products/products-data.json';

export function loader(){
  return data;
}


function About(){
  const loadData = useLoaderData();
  console.log(loadData);
  return(
    <>
      <h1>about page:</h1>
    </>
  )
}

export default About;