import React, { useRef, useEffect} from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { InputTextarea } from "primereact/inputtextarea";
import SelectArchivo from '../components/SelectArchivo';
import { crearNoticia } from '../functions/dbFunctionalities';
import NavbarNoticia from '../components/NavbarNoticia'
import Opciones from '../components/Opciones'
import '../styles/estiloCrud.css'
import { useNavigate } from 'react-router-dom';

/**
 * @function Creation
 * @category Pages - CRUD
 * @desc Componente de creación de noticia
 * @param {Object} props - Propiedades del componente
 * @param {Array} props.multimedia - Lista de archivos multimedia
 * @param {Array} props.noticias - Lista de noticias
 * @param {string} props.token - Token de autenticación
 * @param {Function} props.setNextHop - Función para establecer la siguiente ruta
 * @returns {JSX.Element} Componente de creación de noticia
 */
export default function Creation({ multimedia, noticias, token, setNextHop }) {
    const navigate = useNavigate();
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Noticia creada con éxito' });
    };

    const defaultValues = {
        titulo: '',
        cuerpo: null,
        multimedia: '',
        link: null,
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({ defaultValues });

    const onSubmit = (data) => {
        // Verificar que los campos requeridos estén completos antes de crear la noticia
        data.titulo && data.multimedia && crear(data.titulo, data.cuerpo, data.multimedia.id, data.link);
        clearNotRequiredValues();
        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] ? <small className="p-error">{errors[name].message}</small> : <small className="p-error">&nbsp;</small>;
    };

    /**
     * @desc Crea una nueva noticia
     * @param {string} titulo - Título de la noticia
     * @param {string} text - Cuerpo de la noticia
     * @param {string} multimediaId - ID del archivo multimedia
     * @param {string} link - Enlace de la noticia
     */
    function crear(titulo, text, multimediaId, link) {
        try {
            crearNoticia(titulo, text, multimediaId, link); // Ejecuta la función crearNoticia
            show();
        } catch (error) {
            console.log("ERROR: " + error); // Si hay un error, lo imprime en la consola
        }
    }

    /**
     * @desc Limpia los valores que no son obligatorios en el formulario
     */
    function clearNotRequiredValues() {
        document.getElementById('cuerpo').value = "";
        document.getElementById('link').value = "";
    }

    useEffect(() => {
        // Verificar si no hay un token de autenticación
        if (!token) {
            let path = window.location.href.split('/');
            let relativePath = "";
            for (let i = 3; i < path.length; i++) {
                relativePath += path[i] + '/';
            }
            setNextHop('/' + relativePath);
            navigate("/Login");
        }
    }, []);

    if (!token) {
        return (<></>);
    }

    return (
        <div className='bCRUD'>
            <NavbarNoticia />
            <Opciones noticias={noticias} />
            <div className="cardDetail flex justify-content-center" style={{ width: '80%' }}>
                <Card
                    title={"Crear nueva noticia"}
                    subTitle={"Ingrese los datos solicitados"}
                >
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column gap-2" style={{ marginTop: '1em' }}>
                        <Toast ref={toast} />
                        <Controller
                            name="multimedia"
                            control={control}
                            rules={{ required: 'Elija un archivo' }}
                            render={({ field }) => (
                                <div style={{ marginBottom: '2em' }}>
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.multimedia })} style={{ marginTop: "0.5em" }}></label>
                                    <span className="p-float-label">
                                        <SelectArchivo multimedia={multimedia} value={field.value} cambio={(e) => field.onChange(e.target.value)} />

                                        <label htmlFor={field.name}>Multimedia</label>
                                    </span>
                                    <span style={{ display: 'block', marginBottom: '1em' }}>{getFormErrorMessage(field.name)}</span>
                                </div>
                            )}
                        />
                        <Controller
                            name="titulo"
                            control={control}
                            rules={{ required: 'Complete el título' }}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.titulo })} style={{ marginTop: "0.5em" }}></label>
                                    <span className="p-float-label">
                                        <InputTextarea style={{ width: "100%" }} autoResize cols={100} rows={1} id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                        <label htmlFor={field.name}>Título</label>
                                    </span>
                                    <span style={{ display: 'block', marginBottom: '1em' }}>{getFormErrorMessage(field.name)}</span>
                                </>
                            )}
                        />
                        <Controller
                            name="cuerpo"
                            control={control}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.cuerpo })} style={{ marginTop: "0.5em" }}></label>
                                    <span className="p-float-label">
                                        <InputTextarea style={{ width: "100%" }} autoResize cols={100} rows={5} id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                        <label htmlFor={field.name}>Descripción</label>
                                    </span>
                                    <span style={{ display: 'block', marginBottom: '1em' }}>{getFormErrorMessage(field.name)}</span>
                                </>
                            )}
                        />
                        <Controller
                            name="link"
                            control={control}
                            render={({ field, fieldState }) => (
                                <>
                                    <label htmlFor={field.name} className={classNames({ 'p-error': errors.link })} style={{ marginTop: "0.5em" }}></label>
                                    <span className="p-float-label">
                                        <InputTextarea style={{ width: "100%" }} autoResize cols={100} rows={1} id={field.name} value={field.value} className={classNames({ 'p-invalid': fieldState.error })} onChange={(e) => field.onChange(e.target.value)} />
                                        <label htmlFor={field.name}>Link</label>
                                    </span>
                                    <span style={{ display: 'block', marginBottom: '1em' }}>{getFormErrorMessage(field.name)}</span>
                                </>
                            )}
                        />
                        <Button label={<>Crear <i className="pi pi-check"></i> </>} type="submit" severity='success' style={{ marginTop: '1em', width: '50%', display: 'block', margin: 'auto' }} />
                    </form>
                </Card>
            </div>
        </div>
    );
}
