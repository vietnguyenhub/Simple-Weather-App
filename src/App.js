import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "./component/Weather";

function App() {
  const [lat, setLat] = useState([]); //Latitude
  const [long, setLong] = useState([]); //Longitude
  const [data, setData] = useState([]); //Weather Data
  let componentMounted = true;
  const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=8bd8205ed4d246f5440cf2123325baea`
    );
    if (componentMounted) {
      setData(await response.json());
      console.log(data);
    }
    return () => {
      componentMounted = false;
    };
  };
  useEffect(() => {
    fetchData();
  }, [lat, long]);
  return (
    <>
      {typeof data.main !== "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default App;
