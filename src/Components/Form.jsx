import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { hide } from "./Store/DataSlice";

const Form = ({ todo, index }) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  //   const [arr, setArr] = useState([]);
  //   setArr([...arr, { title, description }]);
  //   localStorage.setItem("Todos", JSON.stringify(arr));
  const dispatch = useDispatch();
  const saveValues = (y) => {
    console.log(y);
    console.log(title);
    // setTitle(title);
    todo.title = title;
    todo.description = description;
    dispatch(hide());
  };
  const hideForm = () => {
    dispatch(hide());
  };
  return (
    <div className="w-1/2 p-2 border-[1px] border-zinc-600 mt-4 rounded-lg m-auto">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-2 outline-none  font-bold"
        placeholder="Title"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 outline-none font-normal"
        placeholder="Description"
      />
      <div className="flex justify-between w-1/3 m-auto">
        <button className="bg-red-400 px-2 py-1 rounded-lg" onClick={hideForm}>
          Cancel
        </button>
        <button
          className="bg-green-400 px-2 py-1 rounded-lg"
          onClick={() => {
            saveValues(index);
          }}
        >
          Save Task
        </button>
      </div>
    </div>
  );
};

export default Form;
