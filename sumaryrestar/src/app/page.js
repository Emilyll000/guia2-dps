"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(null);

  const operaciones = {
    sumar: () =>
      setResultado(`Suma: ${parseFloat(numero1) + parseFloat(numero2)}`),
    restar: () =>
      setResultado(`Resta: ${parseFloat(numero1) - parseFloat(numero2)}`),
    multiplicar: () =>
      setResultado(`Multiplicación: ${parseFloat(numero1) * parseFloat(numero2)}`),
    dividir: () => {
      if (parseFloat(numero2) === 0) {
        setResultado("❌ Error: División por cero");
      } else {
        setResultado(
          `División: ${parseFloat(numero1) / parseFloat(numero2)}`
        );
      }
    },
    potencia: () =>
      setResultado(`Potencia: ${Math.pow(parseFloat(numero1), parseFloat(numero2))}`),
    raiz: () =>
      setResultado(`Raíz cuadrada de ${numero1}: ${Math.sqrt(parseFloat(numero1))}`),
    limpiar: () => {
      setNumero1("");
      setNumero2("");
      setResultado(null);
    },
  };

  return (
    <main className={styles.main}>
      <div className={styles.calculadora}>
        <h2>Calculadora Avanzada</h2>
        <input
          className={styles.inputnum}
          type="number"
          placeholder="Número 1"
          value={numero1}
          onChange={(e) => setNumero1(e.target.value)}
        />
        <input
          className={styles.inputnum}
          type="number"
          placeholder="Número 2"
          value={numero2}
          onChange={(e) => setNumero2(e.target.value)}
        />
        <div className={styles.botones}>
          <button onClick={operaciones.sumar}>➕ Sumar</button>
          <button onClick={operaciones.restar}>➖ Restar</button>
          <button onClick={operaciones.multiplicar}>✖️ Multiplicar</button>
          <button onClick={operaciones.dividir}>➗ Dividir</button>
          <button onClick={operaciones.potencia}>🔼 Potencia</button>
          <button onClick={operaciones.raiz}>√ Raíz</button>
          <button onClick={operaciones.limpiar}>🧹 Limpiar</button>
        </div>
        {resultado && <div className={styles.resultado}>{resultado}</div>}
      </div>
    </main>
  );
}