import { useRef, useState } from "react";
import "./App.css";
import useClickOutside from "./useOutsideClick";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useClickOutside(ref, () => {
    setIsOpen(false);
  });

  return (
    <div
      className={`h-screen flex items-center justify-center`}
      style={{
        backgroundColor: isOpen ? "rgba(169, 169, 169, 0.5)" : "transparent",
        transition: "background-color 0.5s ease-in-out",
      }}
    >
      <button className="button" onClick={() => setIsOpen(!isOpen)}>
        Open Model
      </button>
      {isOpen && (
        <div
          className="bg-white flex items-center flex-col justify-center gap-4 button z-50 delay-300 ease-in duration-500 absolute h-[200px] w-[200px]"
          style={{
            opacity: isOpen ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
          ref={ref}
        >
          <h1>Don't forget to like this repo</h1>
          <a
            href="https://www.hevin.site/"
            className="hover:border-b  text-blue-500 border-blue-500 font-bold"
            target="_blank"
          >
            Visit My World
          </a>
          <button className="button" onClick={() => setIsOpen(false)}>
            Close Model
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
