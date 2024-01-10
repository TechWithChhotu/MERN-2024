import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      Header
      <br />
      <Outlet />
      <br />
      Footer
    </div>
  );
}

export default Layout;
