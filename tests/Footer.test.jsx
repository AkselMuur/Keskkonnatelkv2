import { render, screen } from "@testing-library/react";
import Footer from "../src/components/Footer/Footer.jsx";

test("Footer renderdab © teksti", () => {
  render(<Footer />);
  expect(screen.getByText(/©/)).toBeInTheDocument();
});

