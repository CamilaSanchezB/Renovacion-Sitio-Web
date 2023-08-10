import React, { useEffect, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import '../styles/estiloCrud.css'
/**
 * @function SelectArchivo
 * @desc Componente que representa un selector de archivos.
 * @category Components
 * @param {Object[]} multimedia - La lista de archivos multimedia disponibles.
 * @param {Object} value - El archivo seleccionado actualmente.
 * @param {Function} cambio - La función de cambio que se ejecuta cuando se selecciona un archivo.
 *
 * @returns {JSX.Element} - Selector de archivos representado como un elemento JSX.
 */
export default function SelectArchivo({ multimedia, value, cambio }) {
    const [archivos, setArchivos] = useState([]);

    useEffect(() => {
        function asignacionArchivos() {
            const nuevosArchivos = multimedia.map((item) => {
                return { name: item.nombre, id: item.id, ruta: item.ruta };
            });
            setArchivos(nuevosArchivos);
        }
        asignacionArchivos();
    }, [multimedia]);

    /**
     * Plantilla para mostrar el archivo seleccionado.
     *
     * @param {Object} option - El archivo seleccionado.
     * @param {Object} props - Las propiedades del componente Dropdown.
     * @returns {JSX.Element} - Plantilla para mostrar el archivo seleccionado.
     */
    const plantillaArchivoElegido = (option, props) => {
        if (option) {
            return (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img alt={option.name} src={option.ruta} className="mr-2 flag" style={{ width: '5%' }} />
                    <div>{option.name}</div>
                </div>
            );
        }
        return <span>{props.placeholder}</span>;
    };

    /**
     * Plantilla para mostrar cada opción de archivo en la lista desplegable.
     *
     * @param {Object} option - La opción de archivo.
     * @returns {JSX.Element} - Plantilla para mostrar la opción de archivo.
     */
    const plantillaOpcionArchivo = (option) => {
        return (
            <div className="flex align-items-center" style={{ display: 'flex', alignItems: 'center' }}>
                <img alt={option.name} src={'../../' + option.ruta} className="mr-2 flag" style={{ width: '5%' }} />
                <div>{option.name}</div>
            </div>
        );
    };

    return (
        <>
            <Dropdown
                required
                value={value}
                onChange={cambio}
                options={archivos}
                optionLabel="name"
                placeholder="Elija un archivo"
                valueTemplate={plantillaArchivoElegido}
                itemTemplate={plantillaOpcionArchivo}
                className="w-full md:w-14rem dropMax"
                style={{marginTop: '0.5em' }}
            />
        </>
    );
}
