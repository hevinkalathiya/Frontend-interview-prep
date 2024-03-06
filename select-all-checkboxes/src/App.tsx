import { useState } from "react";
import "./App.css";
import { Checkbox } from "./Checkbox";
import { list } from "./list";

function App() {
  const [checkedList, setCheckedList] = useState(list);

  const handleCheck = (li: any, checked: boolean) => {
    const addChecked = checkedList.map((list) =>
      list.id === li.id ? { id: li.id, name: li.name, checked: checked } : list
    );

    setCheckedList(addChecked);
  };

  const handleSelectAll = (checked: boolean) => {
    const addChecked = checkedList.map((list) => ({
      id: list.id,
      name: list.name,
      checked: checked,
    }));

    setCheckedList(addChecked);
  };
  return (
    <div className="h-screen mx-auto flex flex-col justify-center items-center">
      <div className="w-[500px] p-4 bg-gray-300">
        <Checkbox
          label="select All"
          onChange={(checked) => {
            handleSelectAll(checked);
          }}
          checked={
            checkedList.filter((list: any) => list?.checked !== true).length < 1
              ? true
              : false
          }
        />
      </div>
      {checkedList.map((list) => {
        return (
          <div className="w-[500px] p-4 bg-gray-100">
            <Checkbox
              label={list.name}
              onChange={(checked) => {
                handleCheck(list, checked);
              }}
              // @ts-expect-error
              checked={list.checked}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
