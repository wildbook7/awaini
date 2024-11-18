import { render, screen } from "@testing-library/react";
import Task from "../Task";

describe("Task コンポーネント", () => {
  test("ボタンの数", async () => {
    render(
      <Task
        id={""}
        title={""}
        state={""}
        onArchiveTask={() => {}}
        onPinTask={() => {}}
      />
    );
    const buttonList = await screen.findAllByRole("button");
    // console.log(buttonList);
    expect(buttonList).toHaveLength(1);
  });
});
