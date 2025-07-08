"use client";
import { useState } from "react";

export default function Conversor() {
  const [temperatura, setTemperatura] = useState("");
  const [unidad, setUnidad] = useState("C");
  const [resultado, setResultado] = useState("");

  const convertir = () => {
    if (unidad === "C") {
      const fahrenheit = (parseFloat(temperatura) * 9) / 5 + 32;
      setResultado(`${fahrenheit.toFixed(2)} °F`);
    } else {
      const celsius = ((parseFloat(temperatura) - 32) * 5) / 9;
      setResultado(`${celsius.toFixed(2)} °C`);
    }
  };

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Conversor de Temperatura</h1>
      <input
        type="number"
        placeholder="Temperatura"
        value={temperatura}
        onChange={(e) => setTemperatura(e.target.value)}
        style={input}
      />
      <br />
      <select
        value={unidad}
        onChange={(e) => setUnidad(e.target.value)}
        style={input}
      >
        <option value="C">Celsius a Fahrenheit</option>
        <option value="F">Fahrenheit a Celsius</option>
      </select>
      <br />
      <button onClick={convertir} style={boton}>
        Convertir
      </button>
      <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>{resultado}</p>
    </main>
  );
}

const input = {
  margin: "10px",
  padding: "8px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const boton = {
  margin: "10px",
  padding: "10px 20px",
  backgroundColor: "#2196f3",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};