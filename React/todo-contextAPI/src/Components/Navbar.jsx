import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AddModal from "../Models/AddModal";

export default function Navbar() {
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const handleCloseModal = () => setIsAddModalVisible(false);
  const handleOpenModal = () => setIsAddModalVisible(true);

  return (
    <>
      {isAddModalVisible && (
        <AddModal
          closeModal={handleCloseModal}
          action="Add"
          todo={{}}
        ></AddModal>
      )}
      <div className="navbar">
        <p>todo</p>
        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "pending"
            }
          >
            My Todos
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "pending"
            }
          >
            About Me
          </NavLink>
          <p className="add-btn" onClick={handleOpenModal}>
            +
          </p>
        </div>
      </div>
    </>
  );
}
