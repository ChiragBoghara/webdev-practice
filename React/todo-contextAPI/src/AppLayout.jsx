import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import { TasksProvider } from "./context";
import Footer from "./Components/Footer";

function AppLayout() {
  return (
    <TasksProvider>
      <Navbar />
      <Outlet />
      <Footer/>
    </TasksProvider>
  );
}

export default AppLayout;
