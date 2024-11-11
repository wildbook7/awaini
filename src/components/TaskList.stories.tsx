import TaskList from "./TaskList";

import * as TaskStories from "./Task.stories";

import { TasksSlice } from "../lib/store";

import { Provider } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";

// A super-simple mock of the state of the store
const MockedState = {
  tasks: [
    { ...TaskStories.Default.args, id: "1", title: "Task 1" },
    { ...TaskStories.Default.args, id: "2", title: "Task 2" },
    { ...TaskStories.Default.args, id: "3", title: "Task 3" },
    { ...TaskStories.Default.args, id: "4", title: "Task 4" },
    { ...TaskStories.Default.args, id: "5", title: "Task 5" },
    { ...TaskStories.Default.args, id: "6", title: "Task 6" },
  ],
  status: "idle",
  error: null,
};

// A super-simple mock of a redux store
const Mockstore = ({
  taskboxState,
  children,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  taskboxState: any;
  children: React.ReactNode;
}) => (
  <Provider
    store={configureStore({
      reducer: {
        taskbox: TasksSlice.reducer,
      },
      preloadedState: {
        taskbox: taskboxState,
      },
    })}
  >
    {children}
  </Provider>
);

export default {
  component: TaskList,
  title: "TaskList",
  tags: ["autodocs"],
  args: {
    ...TaskStories.Default,
  },
};

export const Default = {
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (story: any) => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>,
  ],
};

export const WithPinnedTasks = {
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (story: any) => {
      const pinnedtasks = [
        ...MockedState.tasks.slice(0, 5),
        { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
      ];

      return (
        <Mockstore
          taskboxState={{
            ...MockedState,
            tasks: pinnedtasks,
          }}
        >
          {story()}
        </Mockstore>
      );
    },
  ],
};

export const Loading = {
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (story: any) => (
      <Mockstore
        taskboxState={{
          ...MockedState,
          status: "loading",
        }}
      >
        {story()}
      </Mockstore>
    ),
  ],
};

export const Empty = {
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (story: any) => (
      <Mockstore
        taskboxState={{
          ...MockedState,
          tasks: [],
        }}
      >
        {story()}
      </Mockstore>
    ),
  ],
};
