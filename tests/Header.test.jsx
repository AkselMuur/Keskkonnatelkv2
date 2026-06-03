import { render, screen } from "@testing-library/react";
import Header from "../src/components/Header/Header.jsx";

test("Header renderdab navigeerimise lingid", () => {
  render(<Header />);

  expect(screen.getByText("Kalender")).toBeInTheDocument();
  expect(screen.getByText("Missioon")).toBeInTheDocument();
  expect(screen.getByText("Töötoad")).toBeInTheDocument();
  expect(screen.getByText("Teemad")).toBeInTheDocument();
  expect(screen.getByText("Kontakt")).toBeInTheDocument();
});

