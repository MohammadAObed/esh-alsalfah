import { AppContextProvider } from "./setup/app-context-manager/app-context";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesManager from "./setup/routes-manager";
// import "./App.css";
function App() {
  return (
    <AppContextProvider>
      <RoutesManager />
    </AppContextProvider>
  );
}

export default App;
