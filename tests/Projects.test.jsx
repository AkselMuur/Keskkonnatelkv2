import { render, screen } from "@testing-library/react";
import Workshops from "../src/components/Workshop/Workshops.jsx";

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 1,
          title: "Töötuba 1",
          img: "/img1.jpg",
          description: "Kirjeldus 1"
        },
        {
          id: 2,
          title: "Töötuba 2",
          img: "/img2.jpg",
          description: "Kirjeldus 2"
        }
      ])
  })
);

test("Workshops renderdab vähemalt ühe töötoa", async () => {
  render(<Workshops />);

  // Otsime <h4> pealkirju, sest need on alati olemas
  const titles = await screen.findAllByRole("heading", { level: 4 });

  expect(titles.length).toBeGreaterThan(0);
});

