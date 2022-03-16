import React from "react";

const Weather = ({ weatherData }) => {
  const refresh = () => {
    window.location.reload();
  };
  let temp = (weatherData.main.temp - 273.15).toFixed();
  let mintemp = (weatherData.main.temp_min - 273.15).toFixed();
  let maxtemp = (weatherData.main.temp_max - 273.15).toFixed();
  var d = new Date();
  var date = d.getDate();
  var year = d.getFullYear();
  var month = d.toLocaleString("default", { month: "long" });
  var day = d.toLocaleString("default", { weekday: "long" });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card text-dark bg-info mb-3 shadow-lg text-center">
            <div className="card-header">
              WeatherMan
              <i className="fa fa-refresh float-end pt-1" onClick={refresh}></i>
            </div>
            <div className="card-body py-3">
              <h2 className="card-title">{weatherData.name}</h2>
              <p className="card-text lead mb-5">
                {day}, {date} {month}, {year}
              </p>
              <hr />
              <h1 className="display-5 fw-bold mb-5">{temp}&deg;C</h1>
              <hr />
              <p className="lead fw-bold mb-0">{weatherData.weather[0].main}</p>
              <p className="lead fw-bold mb-5">
                {mintemp}&deg;C | {maxtemp}&deg;C
              </p>
              <p>Độ ẩm: {weatherData.main.humidity}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Weather;
