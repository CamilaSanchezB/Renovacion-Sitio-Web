import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputTextarea } from 'primereact/inputtextarea';
import {InputNumber} from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import SelectArchivo from './SelectArchivo';
/**
 * @function ModalEditorRoadmap
 * @desc Modal de edición
 * @category Components
 * @param {string} title - Título del modal
 * @param {any} value - Valor actual del campo del modal
 * @param {function} setValue - Función para actualizar el valor del campo del modal
 * @param {boolean} externalVisible - Indica si el modal es visible externamente
 * @param {function} setVisible - Función para cambiar la visibilidad del modal
 * @param {function} show - Función para mostrar algo
 * @param {function} procesarCambio - Función para procesar el cambio realizado en el modal
 * @param {number} element - Indicador de tipo de elemento
 * @param {string} anio - Valor del campo de año
 * @param {object[]} multimedia - Lista de elementos multimedia
 * @returns {JSX.Element} - Elemento de modal de edición
 */
const ModalEditor = ({ title, value, setValue, externalVisible, setVisible, show, procesarCambio, element, anio, multimedia }) => {
  /**
   * Maneja el cambio en el campo del modal
   * @param {Event} e - Evento de cambio
   */
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  /**
   * Oculta el diálogo del modal
   */
  const hideDialog = () => {
    setVisible(false);
  };

  const [prueba, setPrueba] = useState({ name: 'images.png', id: 27, ruta: '../../assets/images.png' });

  return (
    <div>
      <Dialog
        header={title}
        visible={externalVisible}
        onHide={hideDialog}
        className={element < 2 ? 'modalRoadmap' : 'modalYears'}
      >
        {element < 2 && (<InputNumber value={value} onValueChange={handleOnChange} useGrouping={false} min={0} />)}
        {element >= 2 && (
          <>
            <div style={{ marginBottom: '2em' }}>
              <SelectArchivo multimedia={multimedia} value={prueba} cambio={(e) => setPrueba(e.target.value)} roadmap={true} />
            </div>
            <InputTextarea autoResize defaultValue={value} onChange={handleOnChange} rows={5} cols={30} style={{ width: '100%' }} />
          </>
        )}
        <Button
          className='buttonRoadmap'
          icon="pi pi-check"
          onClick={() => {
            show(); setVisible(false); procesarCambio(value, element, anio, prueba.id);
          }}
          style={{ float: element >= 2 ? 'right' : '', width: element >= 2 ? '100%' : '' }}
        />
      </Dialog>
    </div>
  );
};


export default ModalEditor;
