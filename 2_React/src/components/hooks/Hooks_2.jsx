// https://jsonplaceholder.typicode.com/todos/1
import { useState, useEffect } from "react";

function Hooks_useEffect() {
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const jsonData = await result.json();
        setdata(jsonData);
      } catch (e) {
        console.log(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2 className="text-3xl mb-20">useEffect</h2>

      <div>
        {loading ? (
          "Loading.............."
        ) : (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        )}
      </div>
    </div>
  );
}

export default Hooks_useEffect;
