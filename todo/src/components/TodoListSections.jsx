import { useDispatch } from "react-redux";
import { changeStatus, deleteTodo } from "../redux/features/todoSlice";

const TodoListSections = ({ label, color, data }) => {
  const dispatch = useDispatch();
  return (
    <div className="todoListSection">
      <div className="label">
        <h2 style={{ color: color }}>{label}</h2>
      </div>
      <div>
        <div className="todos">
          {data?.map((todo) => (
            <div key={todo.id} className="singleTodo">
              <h3 className="todoLabel">{todo.title}</h3>
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="delete-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    color="#fff"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
                  />
                </svg>
              </button>
              <div className="status">
                <p>Status:</p>
                <select
                  value={todo.status}
                  onChange={(e) =>
                    dispatch(
                      changeStatus({ id: todo.id, status: e.target.value })
                    )
                  }
                  className=""
                  style={{
                    color: "#000",
                    backgroundColor: color,
                    padding: ".5rem",
                    fontWeight: "bold",
                    borderRadius: ".5rem",
                  }}
                >
                  <option value="pending">Pending</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="complete">Complete</option>
                  <option value="archive">Archive</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoListSections;
