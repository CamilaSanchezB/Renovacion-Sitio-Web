import React from 'react'
import '../styles/estiloCrud.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
import "primeicons/primeicons.css";
import { Button } from 'primereact/button';
import { Fieldset } from 'primereact/fieldset';
import {Link} from "react-router-dom";

/**
 * @function Noticia
 * @desc Componente que representa una noticia
 * @category Components
 * @param {Object} noticia - Objeto que contiene los datos de la noticia
 * @returns {JSX.Element} - Elemento JSX que muestra la noticia
 */
export default function Noticia({ noticia }) {
    /**
     * @constant legendTemplate
     * @desc Template JSX para el título de la noticia
     */
    let legendTemplate = (
      <div className="flex align-items-center text-primary">
        <span className="font-bold text-lg">{noticia.titulo}</span>
      </div>
    );
  
    return (
      <>
        <div style={{ width: "100%" }}>
          <Fieldset
            legend={legendTemplate}
            toggleable
            style={{ borderWidth: "0.15em" }}
            className="cardNoticia"
          >
            <p className="m-0">{noticia.descripcion}</p>
            <Link to={"/Editor/Noticias/Detail/" + noticia.id}>
              <Button
                severity="help"
                label={<i className="pi pi-chevron-right"></i>}
                text
                style={{ float: "right" }}
                size="small"
              />
            </Link>
          </Fieldset>
        </div>
      </>
    );
  }
  