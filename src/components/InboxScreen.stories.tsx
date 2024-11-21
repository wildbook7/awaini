import { Provider } from "react-redux";
import InboxScreen from "./InboxScreen";
import store from "@/lib/store";

export default {
  component: InboxScreen,
  title: "InboxScreen",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  decorators: [(story: any) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};
export const Error = {};
