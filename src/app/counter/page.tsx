"use client";

import Counter from "@/components/Counter";
import store from "@/lib/store";
import { Provider } from "react-redux";

export default function Page() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
