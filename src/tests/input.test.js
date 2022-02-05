import { render, fireEvent, screen } from "@testing-library/react";
import Dropdown from "../components/Dropdown";
import SearchInput from "../components/SearchInput";
const order = ["Default", "Ascending", "Descending"];

test("Simulates selection of select options", () => {
  render(<Dropdown options={order} onChange={() => {}} label={"Order"} />);
  //The value should be the key of the option
  fireEvent.change(screen.getByTestId("select"), {
    target: { value: "Ascending Order" },
  });
  let options = screen.getAllByTestId("select-option");
  expect(options[0].selected).toBeFalsy();
  expect(options[1].selected).toBeTruthy();
  expect(options[2].selected).toBeFalsy();
  //...
});

test("see if search input is a controlled component", () => {
  render(<SearchInput />);
  const search = screen.getByTestId("search");
  fireEvent.change(search, {
    target: { value: "Item" },
  });
  expect(search).toHaveValue("Item");
});
