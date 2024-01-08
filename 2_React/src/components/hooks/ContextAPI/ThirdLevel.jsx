import { useContext } from "react";
import MyContext from "./MyContext";
import FourthLevel1 from "./FourthLevel1";
import FourthLevel2 from "./FourthLevel2";

function ThirdLevel() {
  const contextValue = useContext(MyContext);
  return (
    <div>
      <p>
        3nd Level Context Value is{" "}
        <span className="font-bold text-red-600">{contextValue}</span>
      </p>

      {/* fourth level */}
      <FourthLevel1 />
      <FourthLevel2 />
    </div>
  );
}

export default ThirdLevel;
