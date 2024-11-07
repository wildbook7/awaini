import Task from "./Task";

export default {
  component: Task,
  title: "Task",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
  },
};

export const Pinned = {
  args: {
    ...Default.args,
    state: "TASK_PINNED",
  },
};

export const Archived = {
  args: {
    ...Default.args,
    state: "TASK_ARCHIVED",
  },
};
