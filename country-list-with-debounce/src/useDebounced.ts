import { useState, useEffect } from "react";

// This is a custom hook that returns a debounced value of the input value.
// Debouncing is a technique that batches rapid successive calls into single call after specified delay.
// It's useful in scenarios like search input where you want to perform some action after user has stopped typing.
const useDebouncedValue = (value: string, delay: number) => {
  // State to hold the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  // useEffect hook to handle the side effect of debouncing
  useEffect(() => {
    // Setting a timeout to update the debounced value after the specified delay
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clearing the timeout when the value or delay changes. This is cleanup function that runs before
    // the next time the effect is run and when the component unmounts.
    return () => clearTimeout(timeoutId);
  }, [value, delay]); // Adding value and delay as dependencies so the effect runs whenever they change

  // Returning the debounced value
  return debouncedValue;
};

export default useDebouncedValue;
