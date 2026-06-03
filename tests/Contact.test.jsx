import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "../src/components/ContactForm/Form.jsx";

test("ContactForm sisestamine töötab", () => {
  render(<ContactForm />);

  // esimene tekstiväli on Eesnimi
  const inputs = screen.getAllByRole("textbox");
  const eesnimi = inputs[0];

  fireEvent.change(eesnimi, { target: { value: "Aksel" } });

  expect(eesnimi.value).toBe("Aksel");
});

