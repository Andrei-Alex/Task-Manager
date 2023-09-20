import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { WithMockLayoutContext } from "@/__MOCK__";

describe("Modal component", () => {
  it("should have body as parent", async () => {
    const modal = render(<WithMockLayoutContext />);
    const parent = modal.container.parentElement;

    expect(parent).toBe(document.body);
  });
  it("should be visible when the isVisible state is true and false when clicked outside of the container", async () => {
    render(<WithMockLayoutContext />);

    const footer = screen.getByText("Footer");
    const body = screen.getByText("Body");
    expect(footer).toBeInTheDocument();
    expect(body).toBeInTheDocument();

    const modalContainer = screen.getByTestId("ModalTestID");
    fireEvent.click(modalContainer);

    await waitFor(() => {
      expect(screen.queryByText("Footer")).toBeNull();
      expect(screen.queryByText("Body")).toBeNull();
    });
  });
});
