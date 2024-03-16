import React, { useRef, useState } from "react";
import { FaPen } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { hide, show } from "./Store/DataSlice";
import Form from "./Form";

const Todos = ({ todo, index, deleteTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const data = useSelector((store) => store.showData);

  const dispatch = useDispatch();
  console.log(data);

  const Edit = (yy) => {
    setIsEdit(true);
    dispatch(show());

    console.log(index);
    console.log(yy);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      console.log("checked", index);
      deleteTodo(index);
    }
  };
  //   console.log(isEdit);
  return (
    <>
      {isEdit && data ? (
        <Form todo={todo} index={index} />
      ) : (
        <div className="flex items-center w-1/2 mx-auto p-4 justify-between font-['satoshi_variable']  border-b-[1px] m-2 border-b-zinc-300">
          <div className="flex items-center gap-5 w-full">
            <input
              type="checkbox"
              value={isChecked}
              onChange={handleCheckboxChange}
            />
            <div className="flex flex-col  w-full">
              <p className="font-medium text-lg break-all">{todo.title}</p>
              <p className="font-medium text-base text-zinc-400">
                {todo.description}
              </p>
            </div>
          </div>

          <FaPen
            className="text-red-400 hover:block cursor-pointer"
            onClick={() => {
              Edit(index);
            }}
          />
        </div>
      )}
    </>
  );
};

export default Todos;

////////////////////// New CODE

// import React, { useState } from "react";

// function TodoApp() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [editingIndex, setEditingIndex] = useState(null);

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleAddTodo = () => {
//     if (inputValue.trim() !== "") {
//       if (editingIndex !== null) {
//         const updatedTodos = [...todos];
//         updatedTodos[editingIndex] = inputValue;
//         setTodos(updatedTodos);
//         setEditingIndex(null);
//       } else {
//         setTodos([...todos, inputValue]);
//       }
//       setInputValue("");
//     }
//   };

//   const handleEditTodo = (index) => {
//     setInputValue(todos[index]);
//     setEditingIndex(index);
//   };

//   const handleDeleteTodo = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div>
//       <h1>Todo App</h1>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Add a todo"
//       />
//       <button onClick={handleAddTodo}>
//         {editingIndex !== null ? "Edit Todo" : "Add Todo"}
//       </button>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {editingIndex === index ? (
//               <input
//                 type="text"
//                 value={inputValue}
//                 onChange={handleInputChange}
//               />
//             ) : (
//               todo
//             )}
//             <button onClick={() => handleEditTodo(index)}>
//               {editingIndex === index ? "Save" : "Edit"}
//             </button>
//             <button onClick={() => handleDeleteTodo(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoApp;
