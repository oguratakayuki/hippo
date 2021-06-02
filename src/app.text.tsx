import React from "react";
import { render, screen } from "@testing-library/react";
import { Hippo } from "./hippo";

test("renders learn react link", () => {
  render(<Hippo id={1} name="fuga" age={9} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
