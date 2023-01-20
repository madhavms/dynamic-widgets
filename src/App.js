import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";

export const componentRegistry = {
  MUIButton: React.lazy(() => import("@material-ui/core/Button")),
  MUIBadge: React.lazy(() => import("@material-ui/core/Badge")),
};

function App({ configProps, styleProps}) {
  const [Widget, setWidget] = React.useState(null);
  const [config, setConfig] = React.useState([]);
  const [styles, setStyles] = React.useState([]);
  const [currentStyle, setCurrentStyle] = React.useState({});

  useEffect(() => {
    setConfig([...configProps]);
    setStyles([...styleProps]);
  }, [configProps, styleProps]);

  const widgetClickHandler = (widgetName) => {
    if (!!componentRegistry[widgetName]) {
      setWidget(componentRegistry[widgetName]);
      const widgetStyle = styles.filter(style => style.hasOwnProperty(widgetName))[0][widgetName]
      setCurrentStyle(widgetStyle);
      console.log(widgetStyle)
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <br />
        {Widget && (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Widget {...currentStyle}>Widget</Widget>
          </React.Suspense>
        )}
        <br />
        <br />
        {config.map((item) => (
          <div key={item}>
          <button onClick={(e) => widgetClickHandler(item)} key={item}>
           {item}
          </button>
          <br/><br/>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
