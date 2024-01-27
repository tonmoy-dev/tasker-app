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
    </TasksProvider>
  );
}

export default App;
