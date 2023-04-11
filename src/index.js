import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

import MainRoutes from "./routes";
import { persistor, store } from "./reducers/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider>
          <MainRoutes />
        </HelmetProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
