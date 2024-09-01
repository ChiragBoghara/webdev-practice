import ReactDOM from "react-dom";
import { categories } from "../data";
import Category from "../Components/Category";
import { useContext, useEffect, useRef, useState } from "react";
import { TasksDispatchContext } from "../context";

const AddModal = ({ closeModal, action, todo }) => {
  const dispatch = useContext(TasksDispatchContext);
  const todoTitle = useRef();
  const todoDesc = useRef();
  const [tags, setTags] = useState(action==="Add" ? ["Work"] : todo.categories);

  function handleSelect(name) {
    if (!tags.some((tag) => tag === name)) {
      setTags([...tags, name]);
    } else {
      setTags(tags.filter((tag) => tag !== name));
    }
  }

  const handleAdd = () => {
    dispatch({
      type: "added",
      text: todoTitle.current.value,
      description: todoDesc.current.value,
      categories: tags,
      completed: false,
    });
  };
  const handleEdit = () => {
    dispatch({
      type: "changed",
      task: {
        id: todo.id,
        text: todoTitle.current.value,
        description: todoDesc.current.value,
        categories: tags,
        completed: todo.completed,
      },
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    action === "Add" ? handleAdd() : handleEdit();
    closeModal();
  }

  useEffect(() => {
    if (action === "Edit") {
      todoTitle.current.value = todo.text;
      todoDesc.current.value = todo.description;
    }
  });

  return ReactDOM.createPortal(
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <form action="" onSubmit={handleSubmit}>
          <div className="modal-actions">
            <div className="transparent-btn" onClick={closeModal}>
              Cancel
            </div>
            <button className="dark-btn" type="submit">
              {action}
            </button>
          </div>
          <div className="modal-body">
            <div className="field-title">Title</div>
            <input
              placeholder="add a title..."
              className="input-field"
              type="text"
              name="title"
              id="task-title"
              ref={todoTitle}
              required
            />
            <div className="field-title">Description</div>
            <textarea
              placeholder="add a description..."
              className="input-field"
              name="desc"
              id="task-desc"
              ref={todoDesc}
              required
            ></textarea>
            <div className="field-title">Tags</div>
            <div className="tags-bar">
              {categories.map((category) => {
                return (
                  <Category
                    key={category.name}
                    name={category.name}
                    color={category.color}
                    marginRight={"30px"}
                    marginBottom={"20px"}
                    isSelected={tags.some((tag) => tag === category.name)}
                    onSelect={handleSelect}
                  />
                );
              })}
            </div>
          </div>
        </form>
      </div>
    </>,
    document.getElementById("addPortalDiv")
  );
};

export default AddModal;
