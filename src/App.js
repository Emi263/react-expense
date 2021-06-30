import React from "react";
import { GlobalProvider } from "./Store/GlobalState";
import Parent from "./components/Parent";
function App() {
  return (
    <GlobalProvider>
      <Parent />
    </GlobalProvider>
  );
}

export default App;
