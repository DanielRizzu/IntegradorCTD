import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';


const About = () => {
  return (
    <div>
      <div className={styles.aboutContainer}>
      <h2 className={styles.customH2}>Detrás de Escena: El Equipo que Hace Realidad tus Viajes Soñados</h2>
      <p className={styles.customParagraph}>Somos un equipo de desarrolladores apasionados con el objetivo de brindar a los usuarios la mejor experiencia posible al planificar sus viajes. Utilizando tecnologías innovadoras y un enfoque centrado en el usuario, nos esforzamos por crear una plataforma que garantice confort, facilidad de uso y satisfacción en cada etapa del viaje. Nuestro compromiso con la excelencia nos impulsa a buscar constantemente nuevas formas de mejorar y superar las expectativas de nuestros usuarios.</p>

       <Link to="/" className={styles.backHomeButton}>&larr; Volver al Home</Link>

        <div className={styles.teamMembersContainer}>
          <div className={styles.member}>
          <h3>Scrum Master </h3>
            <img src="/danielRizzuti.jpeg" alt="Daniel Rizzuti" />
            <h4>Daniel Rizzuti </h4>
             <p>Participé en el Front End (galería, íconos, calendario) y colaboré en programación orientada a objetos, estableciendo la conexión con el backend. Logré que todos pudieran colaborar en la infraestructura de la API</p>
          </div>
          <div className={styles.member}>
          <h3>Backend - POO </h3>
            <img src="gonzaloPena.jpeg" alt="Gonzalo Pena" />
            <h4>Gonzalo Pena </h4> 
             <p> Desarrollé la base de datos orientada a objetos y colaboré para mejorar el diseño de la API, su fluidez en la optimización y su rendimiento en el manejo de rutas, obteniendo los dominios necesarios </p>
          </div>
          <div className={styles.member}>
          <h3> Front End </h3> 
            <img src="mathiasSilveira.jpeg" alt="Mathias Silveira" />
            <h4>Mathias Silveira </h4>
            <p> Colaboré en la arquitectura y el diseño en conjunto con UX/UI y trabajé en equipo con el sector de backend. Ayudé en el despliegue de la página, otorgando los estilos visuales necesarios
            </p>
          </div><div className={styles.member}>
          <h3>Front End </h3> 
            <img src="geronimoMonzon.jpeg" alt="Gerónimo Monzón" />
            <h4>Gerónimo Monzón </h4>
            <p> Plasmé mis habilidades en el diseño para lograr una excelente experiencia del usuario. Colaboré para que todos los requerimientos visuales se cumplieran a tiempo, trabajando en conjunto con el equipo
            </p>
          </div>
          <div className={styles.member}>
          <h3>Testing </h3>
            <img src="lilenRomano.png" alt="Lilén Romano" />
            <h4>Lilén Romano </h4>
            <p>  Desarrollé las pruebas correspondientes para que los requerimientos fueran aceptados. Colaboré con el Front End en la identificación de los defectos más significativos y urgentes
            </p>
          </div>
          <div className={styles.member}>
          <h3> Backend - POO </h3>
            <img src="fernandoConil.png" alt="Fernando Conil" />
            <h4>Fernando Conil </h4>
            <p> Desarrollé por completo la base de datos para el correcto funcionamiento de los paquetes. Me comprometí al 100% con cada desafío y estuve detrás del Spring Security, API Rest, Spring Boot y JWT Maven</p>
          </div>
          <div className={styles.member}>
          <h3> UX/UI - Testing </h3>
            <img src="gonzaloOrtizPey.jpeg" alt="Gonzalo Ortiz" />
            <h4>Gonzalo Ortiz </h4>
            <p>  Participé en el diseño a través de la herramienta Figma para plasmar los requisitos del Front End. Colaboré con los tests del Postman y me destaque por estar siempre presente para apoyar al equipo
            </p>
          </div>
          <div className={styles.member}>
          <h3> Front End - Backend </h3>
            <img src="agustinScanavino.png" alt="Agustin Scanavino" />
            <h4>Agustin Scanavino </h4>
            <p>  Participé tanto en el desarrollo del Front End como del Back End. Me destacé en resolver conflictos en primera instancia, demostrando una gran capacidad de conocimientos en el desarrollo full stack
            </p>
          </div>

          </div>
    
        <Link to="/" className={styles.backHomeButton}>&larr; Volver al Home</Link>
      </div>
      
    
    </div>
  );
};

export default About;