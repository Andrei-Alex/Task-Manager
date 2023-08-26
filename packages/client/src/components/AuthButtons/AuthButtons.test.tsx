import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AuthButtons } from "./AuthButtons";
import { NextLink } from "@/utils";

describe("AuthButtons Component", () => {
  it("should renders Register and Login links when not logged in", () => {
    render(<AuthButtons haveProfile={false} />);

    const registerLink = screen.getByText("Register");
    const loginLink = screen.getByText("Login");

    expect(registerLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
  });

  it("should renders Logout link when logged in", () => {
    render(<AuthButtons haveProfile={true} />);

    const logoutLink = screen.getByText("Logout");

    expect(logoutLink).toBeInTheDocument();
  });

  it("should call logout function when Logout link is clicked", () => {
    const logoutMock = jest.fn();
    render(<AuthButtons haveProfile={true} logout={logoutMock} />);

    const logoutLink = screen.getByText("Logout");
    userEvent.click(logoutLink);

    expect(logoutMock).toHaveBeenCalled();
  });

  it("should uses custom paths for register and login when provided", () => {
    const customRegisterPath = "/custom/register" as NextLink;
    const customLoginPath = "/custom/login" as NextLink;

    render(
      <AuthButtons
        haveProfile={false}
        registerPath={customRegisterPath}
        loginPath={customLoginPath}
      />
    );

    const registerLink = screen.getByText("Register");
    const loginLink = screen.getByText("Login");

    expect(registerLink).toHaveAttribute("href", customRegisterPath);
    expect(loginLink).toHaveAttribute("href", customLoginPath);
  });
});
