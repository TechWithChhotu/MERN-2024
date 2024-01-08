import { useState } from "react";

function Hooks_useState() {
  const [count, setCount] = useState(0);
  return (
    <div className="text-white">
      <h1 className="mb-10 text-center text-3xl">useState</h1>
      <div>
        <p className="text-center text-3xl mb-5">{count}</p>
        <div className="flex justify-around gap-5">
          <button
            className="bg-orange-600 px-5 py-1 rounded-md "
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increase
          </button>

          <button
            className="bg-orange-600 px-5 py-1 rounded-md "
            onClick={() => {
              setCount(count - 1);
            }}
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hooks_useState;
