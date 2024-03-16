import React, { useState, useEffect } from "react";
import Todos from "./Todos";
import { useDispatch, useSelector } from "react-redux";
import { hide } from "./Store/DataSlice";

const Taskform = () => {
  const [showTask, setShowTask] = useState(false);
  const [title, setTitle] = useState("");
  const [array, setArray] = useState([]);
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const show = useSelector((store) => store.showData);

  useEffect(() => {
    const getTodosFromLocalStorage = () => {
      const storedTodos = JSON.parse(localStorage.getItem("Todos"));
      if (storedTodos) {
        setArray(storedTodos);
      }
    };
    getTodosFromLocalStorage();
  }, []);

  const addTask = () => {
    setShowTask(true);
    dispatch(hide());
  };

  const hideForm = () => {
    setShowTask(false);
  };

  const showValues = () => {
    if (title.trim().length > 0) {
      const newArr = [...array, { title, description }];
      localStorage.setItem("Todos", JSON.stringify(newArr));
      setArray(newArr);
      setTitle("");
      setDescription("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = array.filter((t, i) => i !== index);
    localStorage.setItem("Todos", JSON.stringify(updatedTodos));
    setArray(updatedTodos);
  };

  return (
    <>
      <div>
        {array.map((todo, index) => (
          <Todos
            key={index}
            todo={todo}
            index={index}
            deleteTodo={deleteTodo}
            show={showTask}
          />
        ))}
        {(!showTask || show) && (
          <div className="w-1/2 mx-auto">
            <button
              onClick={addTask}
              className="bg-red-200 mt-2 hover:text-red-600 text-zinc-5   00 font-['satoshi_variable'] text-lg rounded-lg px-2 py-1"
            >
              Add Task +
            </button>
          </div>
        )}
        {showTask && !show && (
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
              <button
                className="bg-red-400 px-2 py-1 rounded-lg"
                onClick={hideForm}
              >
                Cancel
              </button>
              <button
                className="bg-green-400 px-2 py-1 rounded-lg"
                onClick={showValues}
              >
                Submit Task
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Taskform;
