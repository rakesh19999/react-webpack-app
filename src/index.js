import React, { useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
  useEffect(() => {
    // Log environment variable (this will be replaced during build)
    console.log("API URL:", process.env.REACT_APP_API_URL);
  }, []);

  return (
    <div>
      <h1>React App with Webpack</h1>
      <p>API URL: {process.env.REACT_APP_API_URL}</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
