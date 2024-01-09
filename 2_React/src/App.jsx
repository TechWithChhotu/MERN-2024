import {
  Hooks_useState,
  Hooks_useEffect,
  Hooks_useContext,
  Hooks_useContext2,
  Hooks_3_useReducer,
  Hooks_4_useReducer,
} from "./components/hooks";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
      {/* <Hooks_useState /> */}
      {/* <Hooks_useEffect /> */}
      {/* <Hooks_useContext /> */}
      {/* <Hooks_useContext2 /> */}
      {/* <Hooks_3_useReducer /> */}
      <Hooks_4_useReducer />
    </div>
  );
}

export default App;
