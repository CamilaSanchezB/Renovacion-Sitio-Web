import React, { useState, useEffect, useRef } from "react";
import { fetchDataMultimediaWeb, borrarMultimedia } from "../functions/dbFunctionalities";
import { FileUpload } from 'primereact/fileupload';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
/**
 * @function Desarrollo
 * @desc Componente para gestionar la sección de Multimedia WEB.
 * @category Sections
 * @returns {JSX.Element} Elemento JSX que muestra la sección de Multimedia WEB.
 */
export default React.memo(
    function Desarrollo(){
        const [multimedia, setMultimedia] = useState([]);
        useEffect(() => {
            /**
             * Función asincrónica para obtener y asignar los datos multimedia de la web.
             */
            async function asignarDatos(){
              let result = await fetchDataMultimediaWeb();
              setMultimedia(result);
            }
            asignarDatos();
        }, [multimedia]);
        const toastUpload = useRef(null);
      const toastDelete = useRef(null);
      /**
        * Función para mostrar el mensaje de carga exitosa.
      */
      const onUpload = () => {
          toastUpload.current.show({ severity: 'info', summary: 'Success', detail: 'Archivo agregado' });
      };
    /**
     * @function
     * @desc Función para eliminar un archivo multimedia.
     * @param {string} id - ID del archivo multimedia.
     * @param {string} nombre - Nombre del archivo multimedia.
    */
    function eliminar(id, nombre){
      borrarMultimedia(id, nombre, 'multimediainnovaweb');
      toastDelete.current.show({ severity: 'info', summary: 'Success', detail: 'Archivo eliminado' });
    }
        return(
            <div>
                <Toast ref={toastUpload}></Toast>
                <Toast ref={toastDelete}></Toast>
                
                <div style={{margin: 'auto', textAlign:'center', marginBottom: '3em', marginTop: '3em'}}>
                    <h1>Multimedia WEB</h1>
                    <FileUpload  mode="basic" name="demo[]" url="http://172.15.0.200:8080/multimedia/upload/multimediainnovaweb" accept="*"  maxFileSize={15000000} onUpload={onUpload} style={{border: '0', marginBottom: '1em', textAlign:'left', marginLeft: '5%'}} chooseLabel='Agregar archivo' auto/>
                </div>
                <table width={'90%'} style={{margin: 'auto', borderCollapse: 'collapse', borderColor: 'white',color:'white', marginLeft: '5%'}} >
                    <thead>
                        <tr>
                            <th>id</th>
                            <th style={{width: '25%'}}>img</th>
                            <th>nombre</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {multimedia.map((archivo, index)=> 
                        <tr key={index}>
                            <td style={{textAlign: 'center'}}>{archivo.id}</td>
                            <td style={{textAlign: 'center'}}><img style={{ width: '50%', margin: '1em', borderRadius: '5px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} src={archivo.ruta} alt={archivo.nombre} /></td>
                            <td>{archivo.nombre}</td>
                            <td style={{ padding:'0.5em'}}><Button icon="pi pi-times" style={{display: 'block', marginLeft:'auto', paddingLeft: '0.2em'}} className="p-button-rounded" severity='danger' onClick={()=>{eliminar(archivo.id, archivo.nombre)}}></Button></td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
)