import React, { useState } from "react";
import Category from "./Category";
import { categories as availableCategories, categories } from "../data";
import AddModal from "../Models/AddModal";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "./Store/task-actions";

export default function TodoCard({ todo }) {
  const dispatch = useDispatch();
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const handleCloseModal = () => setIsAddModalVisible(false);
  const handleOpenModal = () => setIsAddModalVisible(true);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleDoneStatus = () => {
    dispatch(
      updateTodo({
        id: todo.id,
        text: todo.text,
        description: todo.description,
        categories: [...todo.categories],
        completed: !todo.completed,
      })
    );
  };

  return (
    <>
      {isAddModalVisible && (
        <AddModal
          closeModal={handleCloseModal}
          action="Edit"
          todo={todo}
        ></AddModal>
      )}
      <div className="todo">
        <div className="todo-header">
          <div
            className="todo-title"
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </div>
          <div className="todo-action">
            <div className="edit-btn" onClick={handleOpenModal}>
              <i className="bx bxs-edit bx-sm"></i>
            </div>
            <div
              className="delete-btn"
              onClick={() => {
                handleDelete(todo.id);
              }}
            >
              <i className="bx bxs-trash bx-sm"></i>
            </div>
          </div>
        </div>
        <div
          className="todo-desc"
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.description}
        </div>
        <div className="todo-footer">
          <div className="footer-tags">
            {todo.categories.map((category) => {
              return (
                <Category
                  key={category}
                  color={
                    availableCategories.find((ele) => ele.name === category)
                      .color
                  }
                  marginRight={"0px"}
                  marginBottom={"0px"}
                />
              );
            })}
          </div>
          <div className="footer-checkbox">
            <input
              type="checkbox"
              name="done"
              id="todo-done"
              onChange={handleDoneStatus}
              checked={todo.completed}
            />
            &nbsp;
            <label className="done-label" htmlFor="footer-checkbox">
              {" "}
              Done{" "}
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
