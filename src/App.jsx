import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroArea from "./components/HeroArea";
import TaskBoard from "./components/task/TaskBoard";
import TasksProvider from "./contexts/TasksProvider";

function App() {
  return (
    <TasksProvider>
      <Header />
      <HeroArea />
      <TaskBoard />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </TasksProvider>
  );
}

export default App;
