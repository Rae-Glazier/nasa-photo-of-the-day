import React from "react";
import "./App.css";

import axios from 'axios';

axios.get(`https://api.nasa.gov/planetary/apod?api_key=xJtBVZqj6zfUfcT621guecx6nn46jNDnydaw2CbC`)
    .then(response => {
        console.log('nasa is cool', response);
    })


function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
