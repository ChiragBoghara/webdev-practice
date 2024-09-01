import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./Components/Store/task-actions";
import Notification from "./Components/Notification";

function AppLayout() {
  const notification = useSelector((state)=>state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      {notification && <Notification {...notification}/>}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
