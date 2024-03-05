import { useState } from "react";
import { items as defaultItems } from "./items";
import "./App.css";

export default function MultipleFilters() {
    const [items, setItems] = useState(defaultItems);
    const [filterdCat, setFilterdCat] = useState<string[]>([]);

    const filters = ["Bags", "Watches", "Sports", "Sunglasses"];

    const handleFilterClick = (el: string) => {
        // Add or remove the clicked category from the filtered categories
        const updatedFilterCat = filterdCat.includes(el)
            ? filterdCat.filter((category) => category !== el)
            : [...filterdCat, el];

        setFilterdCat(updatedFilterCat);

        // If no categories are selected, reset to default items
        if (updatedFilterCat.length === 0) {
            setItems(defaultItems);
        } else {
            // Filter items based on the selected categories
            const filteredItems = defaultItems.filter((item) =>
                updatedFilterCat.includes(item.category)
            );
            setItems(filteredItems);
        }
    };

    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Algochurn Filters</h2>
            <div className="buttons-container">
                {filters.map((el, idx) => (
                    <button
                        onClick={() => handleFilterClick(el)}
                        className={`button ${filterdCat.includes(el) ? "active" : ""} `}
                        key={`filters-${idx}`}
                    >
                        {el}
                    </button>
                ))}
            </div>
            <div className="items-container">
                {items.map((item, idx) => (
                    <div key={`items-${idx}`} className="item">
                        <p>{item.name}</p>
                        <p className="category">{item.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
