import "./task.css";
import Task, { TaskType } from "./Task";

export type TaskListType = {
  loading: boolean;
  tasks: TaskType[];
  onPinTask: () => void;
  onArchiveTask: () => void;
};

export default function TaskList({
  loading,
  tasks,
  onPinTask,
  onArchiveTask,
}: TaskListType) {
  const events = {
    onPinTask,
    onArchiveTask,
  };
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (loading) {
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
