import "./App.css";
import CountriesList from "./CountriesList";

function App() {
  return (
    <>
      <h1 className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 text-white text-center text-3xl font-bold">
        Country List
      </h1>
      <CountriesList />
    </>
  );
}

export default App;
