import SecondLevel from "./SecondLevel";
import MyContext from "../ContextAPI/MyContext";
function Hooks_useContext2() {
  const contextValue = "Hello! this is testing";

  return (
    <MyContext.Provider value={contextValue}>
      <div className="grid">
        <p>
          1st Level Context Value is{" "}
          <span className="font-bold text-red-600">{contextValue}</span>
        </p>
        {/* First Level Context Value is accesible directelly */}

        {/* second Level */}
        <SecondLevel />
      </div>
    </MyContext.Provider>
  );
}

export default Hooks_useContext2;
