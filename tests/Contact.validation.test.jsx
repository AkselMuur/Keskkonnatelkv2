import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "../src/components/ContactForm/Form.jsx";

test("Tühja vormi ei saadeta", () => {
  render(<ContactForm />);

  // Leiame vormi otse DOM-ist
  const form = document.querySelector("form");

  // Leiame nupu
  const button = screen.getByRole("button", { name: "Saada" });

  // Loome spiooni submiti jaoks
  const submitSpy = jest.fn(e => e.preventDefault());
  form.addEventListener("submit", submitSpy);

  // Klikime submit nuppu
  fireEvent.click(button);

  // HTML5 required takistab submiti → submitSpy EI kutsuta
  expect(submitSpy).not.toHaveBeenCalled();
});

