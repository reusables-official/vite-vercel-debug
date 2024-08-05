import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [imagesDir, setImagesDir] = useState("");
  useEffect(() => {
    (async () => {
      const request = await fetch("/api/wallet/apple/someId");
      const body = await request.json();
      setImagesDir(body.data);
    })();
  }, []);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <code>{imagesDir}</code>
      </div>
    </>
  );
}

export default App;
