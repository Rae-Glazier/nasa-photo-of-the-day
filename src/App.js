import React, {useEffect, useState} from "react";
import "./App.css";
import NasaCard from './components/NasaCard';
import axios from 'axios';

export default function App() {

  const [star, setStar] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=xJtBVZqj6zfUfcT621guecx6nn46jNDnydaw2CbC`)
      .then(response => {
        const stars = response.data;
        console.log('nasa is awesome', stars);
        setStar(stars);
      })
      .catch(error => {
        console.log('data wasnt returned', error);
      });
  }, []);

  return (
    <div className="App">
          <NasaCard 
            key={star.id}
            title={star.title}
            img={star.hdurl}
            description={star.explanation}
            copyright={star.copyright}
            date={star.date}
          />
    </div>
  );
}


