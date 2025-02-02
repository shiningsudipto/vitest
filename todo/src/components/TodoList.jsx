import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../redux/features/todoSlice";
import TodoListSections from "./TodoListSections";

export default function TodoList() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  return (
    <div>
      <div className="addTodo">
        <input
          type="text"
          className="border p-2"
          placeholder="New Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="ml-2 bg-blue-500 text-white px-4 py-2"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <div className="todoSections">
        <TodoListSections
          label={"Pending"}
          color={"#facc15"}
          data={todos?.filter((todo) => todo.status === "pending")}
        />
        <TodoListSections
          label={"On-going"}
          color={"#38bdf8"}
          data={todos?.filter((todo) => todo.status === "ongoing")}
        />
        <TodoListSections
          label={"Completed"}
          color={"#22c55e"}
          data={todos?.filter((todo) => todo.status === "complete")}
        />
        <TodoListSections
          label={"Achieved"}
          color={"#f97316"}
          data={todos?.filter((todo) => todo.status === "archive")}
        />
      </div>
    </div>
  );
}
