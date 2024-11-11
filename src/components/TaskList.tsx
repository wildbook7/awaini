import "./task.css";
import Task, { TaskType } from "./Task";
import { useSelector } from "react-redux";

export type TaskListType = {
  onPinTask: () => void;
  onArchiveTask: () => void;
};

export default function TaskList({ onPinTask, onArchiveTask }: TaskListType) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  // We're retrieving our state from the store
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tasks = useSelector((state: any) => {
    const tasksInOrder = [
      ...state.taskbox.tasks.filter((t: TaskType) => t.state === "TASK_PINNED"),
      ...state.taskbox.tasks.filter((t: TaskType) => t.state !== "TASK_PINNED"),
    ];
    const filteredTasks = tasksInOrder.filter(
      (t) => t.state === "TASK_INBOX" || t.state === "TASK_PINNED"
    );
    return filteredTasks;
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { status } = useSelector((state: any) => state.taskbox);

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (status === "loading") {
    return (
      <div className="list-items" data-testid="loading" key={"loading"}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (tasks.length === 0) {
    return (
      <div className="list-items" key={"empty"} data-testid="empty">
        <div className="wrapper-message">
          <span className="icon-check" />
          <p className="title-message">You have no tasks</p>
          <p className="subtitle-message">Sit back and relax</p>
        </div>
      </div>
    );
  }

  return (
    <div className="list-items">
      {tasks.map((task) => (
        <Task key={task.id} {...task} {...events} />
      ))}
    </div>
  );
}
