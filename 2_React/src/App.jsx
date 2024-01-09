import {
  Hooks_useState,
  Hooks_useEffect,
  Hooks_useContext,
  Hooks_useContext2,
} from "./components/hooks";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
      {/* <Hooks_useState /> */}
      {/* <Hooks_useEffect /> */}
      {/* <Hooks_useContext /> */}
      <Hooks_useContext2 />
    </div>
  );
}

export default App;
