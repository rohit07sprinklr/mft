import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

const mount = (el) => {
  // const root = createRoot(el);

  // root.render(<h1>Hello</h1>);
  ReactDOM.render(<App />, el);
};

// In Development/Isolation
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_marketing-app");
  if (el) {
    mount(el);
  }
}
// In Container
export { mount };
