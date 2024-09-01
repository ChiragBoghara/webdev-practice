import { taskActions } from "./task-slice";
import { uiActions } from "./ui-slice";

const URL = `${process.env.REACT_APP_API_BASE_URL}/${process.env.REACT_APP_API_TODOS_ENDPOINT}`;
const NOTIFICATION_TIMER = 1500;

const showPendingNotification = (dispatch, title, message) => {
  dispatch(
    uiActions.showNotification({
      status: "Pending",
      title,
      message,
    })
  );
};
const showSuccessNotification = (dispatch, title, message) => {
  dispatch(
    uiActions.showNotification({
      status: "Success",
      title,
      message,
    })
  );
};

const showFailedNotification = (dispatch, title, message) => {
  dispatch(
    uiActions.showNotification({
      status: "error",
      title,
      message,
    })
  );
};

const clearNotification = (dispatch) => {
  setTimeout(() => {
    dispatch(uiActions.showNotification(null));
  }, NOTIFICATION_TIMER);
};

export const fetchTodos = () => {
  return async (dispatch) => {
    showPendingNotification(dispatch, "Loading", "Fetching your todos...");

    const fetchData = async () => {
      const response = await fetch(`${URL}`);
      if (!response.ok) {
        throw new Error("Could not fetch todos");
      }
      const data = await response.json();
      return data;
    };

    try {
      const data = await fetchData();
      dispatch(
        taskActions.setTasks({
          tasks: data || [],
        })
      );
      showSuccessNotification(dispatch, "Success", "Fetched your todos...");
      clearNotification(dispatch);
    } catch (e) {
      showFailedNotification(dispatch, "Error", e.message);
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    showPendingNotification(dispatch, "Pending", "Deleting your todo...");
    const deleteData = async () => {
      const response = await fetch(`${URL}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Could not delete task");
      }
      const data = await response.json();
      return data;
    };

    try {
      await deleteData();
      dispatch(taskActions.deleteTask(id));
      showSuccessNotification(
        dispatch,
        "Success",
        "To-do deleted successfully..."
      );
      clearNotification(dispatch);
    } catch (e) {
      dispatch(showFailedNotification(dispatch, "Error", e.message));
    }
  };
};

export const updateTodo = (newTodo) => {
  return async (dispatch) => {
    showPendingNotification(dispatch, "Pending", "Updating your todo...");
    const updateData = async () => {
      const response = await fetch(`${URL}/${newTodo.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      if (!response.ok) {
        throw new Error("Could not update task");
      }
      const data = await response.json();
      return data;
    };

    try {
      const updatedData = await updateData();
      dispatch(taskActions.updateTask(updatedData));
      showSuccessNotification(
        dispatch,
        "Success",
        "To-do Updated Successfully..."
      );
      clearNotification(dispatch);
    } catch (e) {
      showFailedNotification(dispatch, "Error", e.message);
    }
  };
};

export const addTodo = (newTodo) => {
  return async (dispatch) => {
    showPendingNotification(dispatch, "Pending", "Adding your todo...");
    const addData = async () => {
      const response = await fetch(`${URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      if (!response.ok) {
        throw new Error("Could not add task");
      }
      const data = await response.json();
      return data;
    };

    try {
      const addedData = await addData();
      dispatch(taskActions.addTask(addedData));
      showSuccessNotification(
        dispatch,
        "Success",
        "To-do added successfully..."
      );
      clearNotification(dispatch);
    } catch (e) {
      showFailedNotification(dispatch, "Error", e.message);
    }
  };
};
