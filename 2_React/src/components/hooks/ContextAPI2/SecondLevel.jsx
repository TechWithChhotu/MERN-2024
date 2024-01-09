import { useContext } from "react";
import MyContext from "../ContextAPI/MyContext";
import ThirdLevel from "./ThirdLevel";

function SecondLevel() {
  const contextValue = useContext(MyContext);

  return (
    <div>
      <p>
        2nd Level Context Value is{" "}
        <span className="font-bold text-red-600">{contextValue}</span>
      </p>
      <ThirdLevel />
    </div>
  );
}

export default SecondLevel;
