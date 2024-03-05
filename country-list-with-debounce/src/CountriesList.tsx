import React, { useEffect, useState } from "react";
import useDebouncedValue from "./useDebounced";

const CountriesList = () => {
  const [inputValue, setInputValue] = useState("");
  const [countries, setCountries] = useState([]);
  const debouncedVal = useDebouncedValue(inputValue, 300);
  const [myList, setMyList] = useState<string[]>([]);

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          `https://algochurn-server.onrender.com/practice/countries/${debouncedVal}`
        );
        const data = await response.json();
        setCountries(data.countries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    if (inputValue.trim() !== "") {
      fetchCountries();
    } else {
      setCountries([]);
    }

    return () => {
      setCountries([]);
    };
  }, [debouncedVal, inputValue]);

  const handleAddMyList = (country: string) => {
    // Add country to myList if it doesn't exist if it does exist, don't add it
    if (!myList.includes(country)) {
      setMyList([...myList, country]);
    }
  };

  const removeCountry = (con: string) => {
    const remove = myList.filter((list: string) => list !== con);

    setMyList(remove);
  };

  return (
    <div className="flex gap-2 m-2">
      <div className="w-1/2">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Type something..."
          className="p-2 rounded-xl w-full bg-gray-300 mb-2"
        />

        <ul>
          {countries.map((country) => (
            <li
              key={country}
              onClick={() => handleAddMyList(country)}
              className="cursor-pointer hover:bg-gray-300 bg-gray-200"
            >
              <div className="flex justify-between w-full space-y-1 p-1">
                <p>{country} </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/2">
        <h1 className="text-center text-2xl font-bold">My List</h1>
        <ul className="bg-gray-300">
          {myList.map((country) => (
            <li key={country}>
              <div className="flex justify-between w-full space-y-1 p-1">
                <p>{country} </p>{" "}
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    removeCountry(country);
                  }}
                >
                  X
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CountriesList;
