import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Video from "./Video";
import "./App.css";
import { MovieContextProvider } from "./MovieContext";

function App() {
  return (
    <div className="app">
      <MovieContextProvider>
        <Header />
        <div className="container">
          {/* <SideBar/> */}
          <Video />
        </div>
      </MovieContextProvider>
    </div>
  );
}

export default App;
