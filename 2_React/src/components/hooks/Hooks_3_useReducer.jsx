import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };
    case "Reset":
      return { count: 0 };

    default:
      return state;
  }
};
function Hooks_3_useReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <p className="text-4xl text-red-600 text-center">{state.count}</p>
      <div className="flex justify-center gap-5 mt-10">
        <button
          className="px-5 py-2 bg-indigo-600 rounded-md"
          onClick={() => dispatch({ type: "Increment" })}
        >
          Increment
        </button>

        <button
          className="px-5 py-2 bg-indigo-600 rounded-md"
          onClick={() => dispatch({ type: "Decrement" })}
        >
          Decrement
        </button>

        <button
          className="px-5 py-2 bg-indigo-600 rounded-md"
          onClick={() => dispatch({ type: "Reset" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Hooks_3_useReducer;
