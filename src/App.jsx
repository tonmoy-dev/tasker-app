import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroArea from "./components/HeroArea";
import TaskBoard from "./components/task/TaskBoard";

function App() {
  return (
    <>
      <Header />
      <HeroArea />
      {/* <AddTaskModal /> */}
      <TaskBoard />
      <Footer />
    </>
  );
}

export default App;
