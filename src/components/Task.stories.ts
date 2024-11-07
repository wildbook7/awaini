import Task from "./Task";

export default {
  component: Task,
  title: "Task",
};

// const Template = (args: any) => <Task {...args} />;

export const Default = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_PINNED",
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
  },
};
// Template.bind({});

// export const Pinned = Template.bind({});
// Pinned.args = {
//   task: {
//     ...Default.args.task,
//     state: "TASK_PINNED",
//   },
// };

// export const Archived = Template.bind({});
// Archived.args = {
//   task: {
//     ...Default.args.task,
//     state: "TASK_ARCHIVED",
//   },
// };
