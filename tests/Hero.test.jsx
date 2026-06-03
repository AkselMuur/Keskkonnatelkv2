import { render, screen } from "@testing-library/react";
import Hero from "../src/components/Hero/Hero.jsx";

test("Hero renderdab pealkirja", () => {
  render(<Hero />);
  expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
});

