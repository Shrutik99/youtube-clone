import { useState, useRef, useEffect } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;

  const z = useRef(0);
  /* 
    not like => z= 0;
    but z= {current: 0}
  */

  console.log("Rendering...");

  // let i = { current: null };
  const i = useRef(null);
  useEffect(() => {
    i.current = setInterval(() => {
      console.log("Namaste React", Math.random());
    }, 1000);
  }, []);

  return (
    <div className="w-96 h-96 m-4 p-2 bg-slate-50 border border-black">
      <div>
        <button
          className="m-4 p-2 bg-green-200"
          onClick={() => {
            x = x + 1;
            console.log("x=" + x);
          }}
        >
          Increase x
        </button>
        <span className="font-bold text-xl">Let x = {x}</span>
      </div>
      <div>
        <button
          className="m-4 p-2 bg-green-200"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase y
        </button>
        <span className="font-bold text-xl">State y = {y}</span>
      </div>
      <div>
        <button
          className="m-4 p-2 bg-green-200"
          onClick={() => {
            z.current++;
            console.log("Ref=" + z.current);
          }}
        >
          Increase z
        </button>
        <span className="font-bold text-xl">Ref z = {z.current}</span>
      </div>
      <div>
        <button
          className="bg-red-900 p-4 m-4 text-white font-bold rounded-lg"
          onClick={() => clearInterval(i.current)}
        >
          Stop Printing
        </button>
      </div>
    </div>
  );
};

export default Demo2;
