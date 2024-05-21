import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import { RouterProvider } from "react-router-dom";
import routerConfig from "./router";
import "antd/dist/reset.css";
import "./public-path";
// import './index.css'
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

let root: ReactDOM.Root | null;

// function render(props: { container: Element }) {
//   root = ReactDOM.createRoot(props.container.querySelector("#wenquan")!);
//   root.render(
//     <React.StrictMode>
//       <Provider store={store}>
//         <RouterProvider router={routerConfig}></RouterProvider>
//       </Provider>
//     </React.StrictMode>
//   );
// }

function render(props: any) {
  const { container } = props;
  root =
    root ||
    ReactDOM.createRoot(
      container
        ? container.querySelector("#micro-app")
        : document.getElementById("micro-app")
    );
  root.render(
    // <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? "/wenquan" : "/"}>
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={routerConfig}></RouterProvider>
      </Provider>
    </React.StrictMode>
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("[react18] react app bootstraped");
}

export async function mount(props: any) {
  console.log("[react18] props from main framework", props);
  render(props);
}

export async function unmount() {
  if (root) {
    root.unmount();
    root = null;
  }
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
