import {
  Hooks_useState,
  Hooks_useEffect,
  Hooks_useContext,
} from "./components/hooks";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
      {/* <Hooks_useState /> */}
      {/* <Hooks_useEffect /> */}
      <Hooks_useContext />
    </div>
  );
}

export default App;
