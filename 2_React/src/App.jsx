import Router from "router";
import {
  Hooks_useState,
  Hooks_useEffect,
  Hooks_useContext,
  Hooks_useContext2,
  Hooks_3_useReducer,
  Hooks_4_useReducer,
} from "./components/hooks";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Page404 from "./components/404Page";
import Layout from "./Layout";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="" element={<Layout />}>
        <Route path="hooks">
          <Route path="" element={<Hooks_useState />}></Route>

          <Route path="usestate" element={<Hooks_useState />}></Route>
          <Route path="useeffect" element={<Hooks_useEffect />}></Route>
          {/* <Route path="*" element={<Page404 />}></Route> */}
        </Route>
      </Route>
      <Route path="*" element={<Page404 />}></Route>
    </Route>
  )
);

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <RouterProvider router={routes}></RouterProvider>;
    </div>
  );
}

export default App;
