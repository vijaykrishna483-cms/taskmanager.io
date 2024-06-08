import React, { useState } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo, status) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false, status: status },
    ]);
  };

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const changeStatus = (id, newStatus) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: newStatus } : todo
      )
    );
  };

  function header() {
    return (
      <div className="header">
        <h1 className="header-text">TASK MANAGER</h1>
        <p> Plan, Execute, Succeed..!</p>
      </div>
    );
  }

  return (
    <div className="TodoWrapper">
      {header()}
    <div className="thebox">
      <div className="todo-container">
        <h2>To Do</h2>
        <TodoForm addTodo={(task) => addTodo(task, 'todo')} />
        {todos.filter((todo) => todo.status === 'todo').map((todo) =>
          todo.isEditing ? (
            <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
          ) : (
            <Todo
              key={todo.id}
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
              changeStatus={changeStatus}
            />
          )
        )}
      </div>

      <div className="in-progress-container">
        <h2>In Progress</h2>
        <TodoForm addTodo={(task) => addTodo(task, 'inProgress')} />
        {todos.filter((todo) => todo.status === 'inProgress').map((todo) =>
          todo.isEditing ? (
            <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
          ) : (
            <Todo
              key={todo.id}
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
              changeStatus={changeStatus}
            />
          )
        )}
      </div>

      <div className="completed-container">
        <h2>Completed</h2>
        <TodoForm addTodo={(task) => addTodo(task, 'completed')} />
        {todos.filter((todo) => todo.status === 'completed').map((todo) =>
          todo.isEditing ? (
            <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
          ) : (
            <Todo
              key={todo.id}
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
              changeStatus={changeStatus}
            />
          )
        )}
      </div>
      </div>
    </div>
  );
};
