import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const getConfig = async () => {
  const config = ["MUIButton", "MUIBadge"];
  return config;
};

const getStyles = async () => {
  const styles = [
    {
      MUIButton: {
        variant: "contained",
        color: "primary",
        style: {
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px 20px",
          fontWeight: "bold",
          borderRadius: "5px",
        },
        onClick: () => {
          console.log("Button clicked");
        },
      },
    },
    {
      MUIBadge: {
        color: "secondary",
        style: {
          padding: "10px 20px",
          fontWeight: "bold",
          borderRadius: "5px",
        },
      },
    },
  ];

  return styles
};

(async () => {
  const configProps = await getConfig();
  const styleProps = await getStyles();
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App {...{configProps, styleProps}} />
    </React.StrictMode>
  );
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
