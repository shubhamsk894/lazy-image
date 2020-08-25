import React from "react";
import "./styles.css";
import LazyImage from "./LazyImage";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <LazyImage src="https://cdn.vox-cdn.com/thumbor/Guer0rnI00zMV8vaCg_JOCB7vTY=/0x0:1190x793/1200x800/filters:focal(500x302:690x492)/cdn.vox-cdn.com/uploads/chorus_image/image/60671473/firefox_logos.0.jpg" />
    </div>
  );
}
