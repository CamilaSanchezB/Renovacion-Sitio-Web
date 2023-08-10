import React, {useState} from 'react';
import '../styles/estiloCrud.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
import "primeicons/primeicons.css";
import { Button } from 'primereact/button';
import {Link} from "react-router-dom";
import { Sidebar } from 'primereact/sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUp19, faCalendar} from '@fortawesome/free-solid-svg-icons'

/**
 * @function Opciones
 * @desc Componente que muestra las opciones del editor
 * @category Components
 * @param {Array} noticias - Array de noticias
 * @returns {JSX.Element} - Elemento JSX que muestra las opciones del editor
 */
export default React.memo(
    function Opciones({ noticias }) {
        const [activo, setActivo] = useState(false);
      
        /**
         * @function handleClick
         * @desc Manejador de evento para cambiar el estado de 'activo'
         */
        function handleClick() {
          setActivo(!activo);
        }
      
        const [visible, setVisible] = useState(false);
      
        const data = (
          <div style={{ marginTop: "1em" }}>
            {/* Inicio */}
            <div style={{ marginBottom: ".6em" }}>
              <Link to={"/Editor"}>
                <Button
                  label={
                    <>
                      <i className="pi pi-home" style={{ fontSize: "1.25rem" }}></i>{" "}
                      Inicio
                    </>
                  }
                  text
                  style={{
                    color: "#fff",
                    fontSize: "1.25rem",
                    width: "100%",
                    textAlign: "left",
                  }}
                />
              </Link>
            </div>
      
            {/* Contador */}
            <div style={{ marginBottom: ".6em" }}>
              <Link to={"/Editor/Contador"}>
                <Button
                  label={
                    <>
                      <FontAwesomeIcon icon={faArrowUp19} /> <span> Contador </span>
                    </>
                  }
                  text
                  style={{
                    color: "#fff",
                    fontSize: "1.25rem",
                    width: "100%",
                    textAlign: "left",
                  }}
                />
              </Link>
            </div>
      
            {/* Multimedia */}
            <div style={{ marginBottom: ".6em" }}>
              <Link to={"/Editor/Multimedia"}>
                <Button
                  label={
                    <>
                      <i className="pi pi-images" style={{ fontSize: "1.25rem" }}></i>{" "}
                      Multimedia
                    </>
                  }
                  text
                  style={{
                    color: "#fff",
                    fontSize: "1.25rem",
                    width: "100%",
                    textAlign: "left",
                  }}
                />
              </Link>
            </div>
      
            {/* Noticias */}
            <div style={{ marginBottom: ".6em" }}>
              <Button
                onClick={handleClick}
                label={
                  <span style={{ color: "#fff" }}>
                    <i
                      className={!activo ? "pi pi-angle-right" : "pi pi-angle-down"}
                      style={{ color: "#fff", fontSize: "1.25rem" }}
                    ></i>{" "}
                    Noticias
                  </span>
                }
                text
                className="accordion"
                style={{
                  fontSize: "1.25rem",
                  width: "100%",
                  textAlign: "left",
                }}
              />
              <div
                className="panel"
                style={{
                  maxHeight: !activo ? "0" : "100vh",
                  paddingBottom: "0.3em",
                }}
              >
                {/* Crear noticia */}
                <Link to={"/Editor/Noticias/Crear"}>
                  <Button
                    size="small"
                    raised
                    label={
                      <>
                        <i className="pi pi-plus-circle"></i> Crear noticia
                      </>
                    }
                    style={{
                      backgroundColor: "#1e40af",
                      borderColor: "#1e40af",
                      color: "#fff",
                      fontSize: "1.1rem",
                      width: "100%",
                      textAlign: "left",
                      marginTop: "1em",
                    }}
                  />
                </Link>
      
                {/* Ver todas las noticias */}
                <Link to={"/Editor/Noticias"}>
                  <Button
                    size="small"
                    raised
                    label={
                      <>
                        Ver todas <i className="pi pi-chevron-right"></i>{" "}
                      </>
                    }
                    style={{
                      backgroundColor: "#1e40af",
                      borderColor: "#1e40af",
                      color: "#fff",
                      fontSize: "1.1rem",
                      width: "100%",
                      textAlign: "left",
                      marginTop: "1em",
                    }}
                  />
                </Link>
      
                {/* Lista de noticias */}
                {noticias.map((noticia, index) => (
                  <Link to={"/Editor/Noticias/Detail/" + noticia.id} key={index}>
                    <Button
                      severity="secondary"
                      label={noticia.titulo}
                      text
                      style={{ width: "100%", textAlign: "left", marginTop: ".3em" }}
                      size="small"
                    />
                  </Link>
                ))}
              </div>
            </div>
      
            {/* Roadmap */}
            <div style={{ marginBottom: ".6em" }}>
              <Link to={"/Editor/Roadmap"}>
                <Button
                  label={
                    <>
                      <FontAwesomeIcon icon={faCalendar} /> <span> Roadmap </span>
                    </>
                  }
                  text
                  style={{
                    color: "#fff",
                    fontSize: "1.25rem",
                    width: "100%",
                    textAlign: "left",
                  }}
                />
              </Link>
            </div>
      
            {/* Newsletter */}
            <div style={{ marginBottom: ".6em" }}>
              <Link to={"/Editor/Newsletter"}>
                <Button
                  label={
                    <>
                      <i className={"pi pi-envelope"} /> <span> Newsletter </span>
                    </>
                  }
                  text
                  style={{
                    color: "#fff",
                    fontSize: "1.25rem",
                    width: "100%",
                    textAlign: "left",
                  }}
                />
              </Link>
            </div>
          </div>
        );
      
        return (
          <div
            style={{
              position: "fixed",
              width: "100%",
              bottom: 10,
              right: 10,
              display: "flex",
              flexWrap: "wrap-reverse",
              flexDirection: "row-reverse",
            }}
          >
            <Sidebar
              style={{ backgroundColor: "var(--surface-900)" }}
              visible={visible}
              onHide={() => setVisible(false)}
            >
              {data}
            </Sidebar>
            <Button
              style={{ backgroundColor: "#1e40af", borderColor: "#1e40af" }}
              icon="pi pi-th-large"
              onClick={() => setVisible(true)}
            />
          </div>
        );
      }
)
  