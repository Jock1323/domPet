import React, { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import Login from "./pages/Login/Login";
function App() {
  const { token } = useContext(AuthContext);
  return <>{token ? <h1>Hello</h1> : <Login />}</>;
}

export default App;
