import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory } from "history";
import App from "./App";

// Mount function to start up the app
const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathName }) {
      const { pathname } = history.location;
      // console.log("location", location);
      if (pathname !== nextPathName) {
        history.push(nextPathName);
      }
    },
  };
};
// If we are in development and in isolation,
// call mount immediately
// if (process.env.NODE_ENV === "development") {
//   const devRoot = document.querySelector("#_marketing-dev-root");

//   if (devRoot) {
//     mount(devRoot);
//   }
// }

export { mount };
// We are running through container
// and we should export the mount function
