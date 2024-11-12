"use client";

import InboxScreen from "@/components/InboxScreen";
import store from "@/lib/store";
import { Provider } from "react-redux";

export default function Page() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}
