import { useState } from "react";

const AppClima = () => {
  const urlBase = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = '53f13d3610b1d6f93738622ba20636eb';
  const difKelvin = 273.15

  const [ciudad, setCiudad] = useState("");
  const [dataClima, setDataClima] = useState(null);

  const handleCambioCiudad = (e) => {
    setCiudad(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.length > 0) fetchClima();
  };

  const fetchClima = async () => {
    try {
      const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`);
      const data = await response.json();
      setDataClima(data);
    } catch (err) {
      console.error("Error al obtener la información del clima: ", err);
    }
  };

  return (
    <div className="container">
      <h1 className="title">AppClima</h1>
      <p className="subtit">Ingresa tu provincia: </p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={ciudad} onChange={handleCambioCiudad} />
        <button type="submit">Buscar</button>
      </form>

      {dataClima && (
        <div>
          <h2 className="letra">Clima en {dataClima.name}</h2>
          <p className="letra">Temperatura: {parseInt(dataClima?.main?.temp - difKelvin)}°C</p>
          <p className="letra">Condiciones: {dataClima.weather[0].description}</p>
          <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`}/>
        </div>
      )}
    </div>
  );
};

export default AppClima;