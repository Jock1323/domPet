import React, { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import Login from "./pages/Login/Login";
import Private from "./pages/Private/Private";
function App() {
  const { token } = useContext(AuthContext);
  return (
    <>
      {/* {token ? <Private /> : <Login />} */}
      <Private />
    </>
  );
}

export default App;
