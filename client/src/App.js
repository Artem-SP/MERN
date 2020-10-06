import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "materialize-css";
import { useRoutes } from "./routes";

function App() {
  const routes = useRoutes((isAuthenticated: false));
  return (
    <Router>
      <div className="contaiter">{routes}</div>
    </Router>
  );
}

export default App;
