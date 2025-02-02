import { describe, it, expect } from "vitest";
import todoReducer, { addTodo, deleteTodo, changeStatus } from "./todoSlice";

describe("todoSlice", () => {
  it("should return the initial state", () => {
    const initialState = {
      todos: [
        { id: 1, title: "Learn Vitest", status: "pending" },
        { id: 2, title: "Write Tests", status: "ongoing" },
        { id: 3, title: "Read React Testing Library Doc", status: "complete" },
        { id: 4, title: "Jest Dom", status: "archive" },
      ],
    };
    expect(todoReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it("should add a new todo with 'pending' status", () => {
    const previousState = { todos: [] };
    const newState = todoReducer(previousState, addTodo("New Task"));

    expect(newState.todos).toHaveLength(1);
    expect(newState.todos[0]).toMatchObject({
      title: "New Task",
      status: "pending",
    });
  });

  it("should delete a todo by id", () => {
    const previousState = {
      todos: [
        { id: 1, title: "Task to be deleted", status: "pending" },
        { id: 2, title: "Another task", status: "ongoing" },
      ],
    };

    const newState = todoReducer(previousState, deleteTodo(1));

    expect(newState.todos).toHaveLength(1);
    expect(newState.todos.find((t) => t.id === 1)).toBeUndefined();
  });

  it("should change the status of a todo", () => {
    const previousState = {
      todos: [{ id: 1, title: "Task", status: "pending" }],
    };

    const newState = todoReducer(
      previousState,
      changeStatus({ id: 1, status: "complete" })
    );

    expect(newState.todos[0].status).toBe("complete");
  });

  it("should not change status if todo id is invalid", () => {
    const previousState = {
      todos: [{ id: 1, title: "Task", status: "pending" }],
    };

    const newState = todoReducer(
      previousState,
      changeStatus({ id: 999, status: "archive" })
    );

    expect(newState).toEqual(previousState);
  });
});
