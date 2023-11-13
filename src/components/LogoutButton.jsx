import React, { useContext } from "react";
import { CurrentUser } from "./CurrentUser";

// Create a component that uses the CurrentUser context
export const LogoutButton = () => {
  // Get the currentUser value and the logout function from the context
  const { currentUser, logout } = useContext(CurrentUser);

  // Display a button that calls the logout function when clicked
  return (
    <div>
      {currentUser && <button onClick={logout}>Logout</button>}
    </div>
  );
};
