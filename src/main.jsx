import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { DarkModeProvider } from "./components/DarkMode.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DarkModeProvider>
      <MantineProvider>
        <App />
      </MantineProvider>
    </DarkModeProvider>
  </BrowserRouter>
);
