"use client";
import styles from "./page.module.css";

const Equipos = ({ equipos }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Equipos de Fútbol</h2>
      {equipos.map((equipo) => (
        <div key={equipo.id} className={styles.equipo}>
          <h3 className={styles.club}>{equipo.nombre}</h3>
          <ul className={styles.listaJugadores}>
            {equipo.plantilla.map((jugador) => (
              <li key={jugador.id} className={styles.jugador}>
                <img
                  src={jugador.foto}
                  alt={jugador.nombre}
                  className={styles.foto}
                />
                <div>
                  <strong>{jugador.nombre}</strong>
                  <p>
                    Altura: {jugador.Altura}m <br />
                    Peso: {jugador.Peso}Kg
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const equiposData = [
    {
      id: 1,
      nombre: "Real Madrid",
      plantilla: [
        {
          id: 1,
          nombre: "Eden Hazard",
          Altura: "1.75",
          Peso: "74",
          foto: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
          id: 2,
          nombre: "Karim Benzema",
          Altura: "1.85",
          Peso: "81",
          foto: "https://randomuser.me/api/portraits/men/2.jpg",
        },
      ],
    },
    {
      id: 2,
      nombre: "Barcelona",
      plantilla: [
        {
          id: 1,
          nombre: "Gavi",
          Altura: "1.75",
          Peso: "68",
          foto: "https://randomuser.me/api/portraits/men/3.jpg",
        },
        {
          id: 2,
          nombre: "Pedri",
          Altura: "1.74",
          Peso: "65",
          foto: "https://randomuser.me/api/portraits/men/4.jpg",
        },
      ],
    },
  ];

  return (
    <main className={styles.main}>
      <h1>Aplicación de Equipos con Fotos</h1>
      <Equipos equipos={equiposData} />
    </main>
  );
}