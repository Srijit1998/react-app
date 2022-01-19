import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";

ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.querySelector("#root")
);
