import { useContext } from "react";
import MyContext from "../ContextAPI/MyContext";

function ThirdLevel() {
  const contextValue = useContext(MyContext);

  return (
    <div>
      <p>
        2nd Level Context Value is{" "}
        <span className="font-bold text-red-600">{contextValue}</span>
      </p>
    </div>
  );
}

export default ThirdLevel;
