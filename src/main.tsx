import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import FormsList from "./components/FormsList";
import FormBuilder from "./components/FormBuilder";
import PreviewForm from "./components/PreviewForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "myforms", element: <FormsList /> },
      { path: "create", element: <FormBuilder /> },
      { path: "preview", element: <PreviewForm /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
