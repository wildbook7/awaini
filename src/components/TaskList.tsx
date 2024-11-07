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

  if (loading) {
    return <div className="list-items">loading</div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items">empty</div>;
  }

  return (
    <div className="list-items">
      {tasks.map((task) => (
        <Task key={task.id} {...task} {...events} />
      ))}
    </div>
  );
}
