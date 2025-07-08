"use client";
import { useState } from "react";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");

  const login = () => {
    if (usuario === "admin" && contrasena === "1234") {
      setMensaje(`✅ Bienvenido ${usuario}!`);
    } else {
      setMensaje("❌ Usuario o contraseña incorrectos");
    }
  };

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        style={input}
      />
      <br />
      <input
        type="password"
        placeholder="Contraseña"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
        style={input}
      />
      <br />
      <button onClick={login} style={boton}>Iniciar sesión</button>
      <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{mensaje}</p>
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
  backgroundColor: "#673ab7",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};