export default function Task({ task, onEditTask, onDeleteTask, onFavorite }) {
  let bgColors = ["bg-[#00D991A1]", "bg-[#FE1A1AB5]", "bg-[#BD560BB2]"];
  bgColors = null;

  // generating random background colors for tags
  function getBgRandomColor() {
    return Math.floor(Math.random() * bgColors.length);
  }
  return (
    <>
      <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
        <td>
          <button onClick={() => onFavorite(task.id)}>
            {task.isFavorite ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-star"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="yellow"
                fill="yellow"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-star"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
              </svg>
            )}
          </button>
        </td>
        <td>{task.title}</td>
        <td>
          <div>{task.description}</div>
        </td>
        <td>
          <ul className="flex justify-center gap-1.5 flex-wrap">
            {task.tags.map((tag) => (
              <li key={tag}>
                <span
                  className={`inline-block h-5 whitespace-nowrap rounded-[45px] ${
                    bgColors ? bgColors[getBgRandomColor()] : "bg-[#00D991A1]"
                  } px-2.5 text-sm capitalize text-[#F4F5F6]`}
                >
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        </td>
        <td className="text-center">{task.priority}</td>
        <td>
          <div className="flex items-center justify-center space-x-3">
            <button
              className="text-red-500"
              onClick={() => onDeleteTask(task.id)}
            >
              Delete
            </button>
            <button className="text-blue-500" onClick={() => onEditTask(task)}>
              Edit
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
