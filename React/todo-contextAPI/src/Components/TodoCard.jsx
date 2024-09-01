import React, { useContext, useState } from "react";
import Category from "./Category";
import { categories as availableCategories } from "../data";
import { TasksDispatchContext } from "../context";
import AddModal from "../Models/AddModal";

export default function TodoCard({ todo }) {
  const dispatch = useContext(TasksDispatchContext);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const handleCloseModal = () => setIsAddModalVisible(false);
  const handleOpenModal = () => setIsAddModalVisible(true);

  const handleDelete = (id) => {
    dispatch({
      type: "deleted",
      id,
    });
  };

  const handleDoneStatus = () => {
    dispatch({
      type: "changed",
      task: {
        id: todo.id,
        text: todo.text,
        description: todo.description,
        categories: todo.categories,
        completed: !todo.completed,
      },
    });
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
