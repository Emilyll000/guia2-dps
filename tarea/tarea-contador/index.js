"use client";
import { useState } from "react";

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contador</h1>
      <p style={{ fontSize: "3rem" }}>{contador}</p>
      <button
        onClick={() => setContador(contador + 1)}
        style={boton}
      >
        ➕ Incrementar
      </button>
      <button
        onClick={() => setContador(contador - 1)}
        style={boton}
      >
        ➖ Decrementar
      </button>
    </main>
  );
}

const boton = {
  margin: "10px",
  padding: "10px 20px",
  backgroundColor: "#4caf50",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};