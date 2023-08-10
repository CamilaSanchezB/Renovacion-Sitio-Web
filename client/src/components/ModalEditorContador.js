import React, {useState, useEffect} from 'react';
import { Dialog } from 'primereact/dialog';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from "primereact/checkbox";
import {InputNumber} from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import PropTypes from 'prop-types';

/**
 * @function ModalEditorContador
 * @desc Modal de edición
 * @category Components
 * @param {string} title - Título del modal
 * @param {object} value - Valor actual de los campos del modal
 * @param {function} setValue - Función para actualizar el valor de los campos del modal
 * @param {boolean} externalVisible - Indica si el modal es visible externamente
 * @param {function} setVisible - Función para cambiar la visibilidad del modal
 * @param {function} show - Función para mostrar el modal
 * @param {function} procesarCambio - Función para procesar el cambio realizado en el modal
 * @param {number} element - Indicador de tipo de elemento
 * @returns {JSX.Element} - Elemento de modal de edición
 */
const ModalEditor = ({ title, value, setValue, externalVisible, setVisible, show, procesarCambio, element }) => {
  const hideDialog = () => {
    setVisible(false);
  };
  const [checked, setChecked] = useState(true);

  // Actualiza el valor de los campos si el checkbox está desmarcado
  useEffect(() => {
    if (!checked) {
      setValue({ id: value.id, cantidad: value.cantidad, texto: value.texto, moneda: null });
    }
  }, [checked]);

  return (
    <div>
      <Dialog
        header={title}
        visible={externalVisible}
        onHide={hideDialog}
        className={element !== 2 ? 'modalRoadmap' : 'modalYears'}
      >
        <InputNumber value={value.cantidad} onValueChange={(e) => setValue({ id: value.id, cantidad: e.target.value, texto: value.texto, moneda: value.moneda })} useGrouping={false} min={0} />

        {element === 2 && (
          <>
            <div style={{ margin: '1em 0 1em 0' }}>
              Moneda <Checkbox onChange={(e) => setChecked(e.checked)} checked={checked}></Checkbox>
            </div>
            {checked && (
              <InputText value={value.moneda} onChange={(e) => setValue({ id: value.id, cantidad: value.cantidad, texto: value.texto, moneda: e.target.value })} maxLength={3} />
            )}
            <InputTextarea autoResize defaultValue={value.texto} onChange={(e) => setValue({ id: value.id, cantidad: value.cantidad, texto: e.target.value, moneda: value.moneda })} rows={5} cols={30} style={{ width: '100%', marginTop: '1em' }} />
          </>
        )}

        <Button
          className='buttonRoadmap'
          icon="pi pi-check"
          onClick={() => {
            show();
            setVisible(false);
            procesarCambio(value, element);
          }}
          style={{ float: element >= 2 ? 'right' : '', width: element >= 2 ? '100%' : '' }}
        />
      </Dialog>
    </div>
  );
};

ModalEditor.propTypes = {
  value: PropTypes.any.isRequired
};

export default React.memo(ModalEditor);

