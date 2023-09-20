// import components:
import { Outlet } from "react-router-dom";

// import layout components:
import Nav from "./nav";

function PageLayout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}
export default PageLayout;