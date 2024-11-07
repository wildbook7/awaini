import TaskList from "./TaskList";

import * as TaskStories from "./Task.stories";

export default {
  component: TaskList,
  title: "TaskList",
  tags: ["autodocs"],
  args: {
    ...TaskStories.Default,
  },
};

export const Default = {
  args: {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in Task.stories.jsx.
    tasks: [
      { ...TaskStories.Default.args, id: "1", title: "Task 1" },
      { ...TaskStories.Default.args, id: "2", title: "Task 2" },
      { ...TaskStories.Default.args, id: "3", title: "Task 3" },
      { ...TaskStories.Default.args, id: "4", title: "Task 4" },
      { ...TaskStories.Default.args, id: "5", title: "Task 5" },
      { ...TaskStories.Default.args, id: "6", title: "Task 6" },
    ],
  },
};

export const WithPinnedTasks = {
  args: {
    tasks: [
      ...Default.args.tasks.slice(0, 5),
      { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
    ],
  },
};

export const Loading = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty = {
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false,
  },
};
