# AlgoChurn Country Search

This web page features a real-time country search functionality.

## Features

1. **Live Search:** The page includes an input box that takes user input for country names.

2. **API Integration:** On every keystroke, the page makes API calls to `https://algochurn-server.onrender.com/practice/countries/:country`.

3. **Debouncing:** API calls are debounced with a 500ms duration, ensuring no calls during typing but triggering after the user stops typing for at least 500ms.

4. **Dropdown Display:** The API returns a list of countries matching the input, displayed in a dropdown.

5. **Selection Update:** Users can select a country from the dropdown, updating the input box.

## Usage

1. Enter a country name in the input box.
2. API calls are debounced, providing a seamless search experience.
3. The dropdown dynamically updates with matching countries.
4. Select a country from the dropdown to update the input box.
