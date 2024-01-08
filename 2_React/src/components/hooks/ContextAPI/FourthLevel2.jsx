import { useContext } from "react";
import MyContext from "./MyContext";

function FourthLevel2() {
  const contextValue = useContext(MyContext);
  return (
    <div>
      <p>
        4th Level 2ndfile Context Value is{" "}
        <span className="font-bold text-red-600">{contextValue}</span>
      </p>
    </div>
  );
}

export default FourthLevel2;
