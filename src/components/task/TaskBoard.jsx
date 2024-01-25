import TaskActions from "./TaskActions";
import TasksList from "./TasksList";

export default function TaskBoard() {
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <TaskActions />
          </div>
          <TasksList />
        </div>
      </div>
    </section>
  );
}
