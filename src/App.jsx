import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("red");
  function changeBgHandler() {
    let colorValue = "#";
    for (let i = 0; i < 6; i++) {
      colorValue += Math.floor(Math.random() * 16).toString(16);
    }
    console.log(colorValue);
    setBgColor(colorValue);
  }

  return (
    <>
      <div className="MainContainer  flex flex-col items-center justify-center border-4 w-80 shadow-2xl">
        <main
          style={{ backgroundColor: `${bgColor}` }}
          className="text-white border-2 w-full h-96 flex justify-center items-center font-bold text-4xl"
        >
          {bgColor.toUpperCase()}
        </main>
        <footer className="text-white p-5 flex gap-14 items-center ">
          <button
            className="px-4 py-2 bg-red-500 rounded shadow-md font-semibold"
            onClick={() => changeBgHandler()}
          >
            Change Color
          </button>
          <p style={{ color: `${bgColor}` }} className="font-semibold">
            {bgColor.toUpperCase()}
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
