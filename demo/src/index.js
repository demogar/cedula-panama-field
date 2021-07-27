import React from 'react';
import { render } from 'react-dom';
import { CedulaPanamaField, CedulaPanamaMultiField } from '../../src';

const Demo = () => {
  return (
    <div>
      <h1>cedula-panama-field Demo</h1>

      <h2>Simple</h2>
      <div>
        <CedulaPanamaField />
      </div>

      <h2>Con estilos, label y placeholder</h2>
      <div>
        <CedulaPanamaField label="Cédula" inputStyle="cedula-field-css-class" errorStyle="error-class" placeholder="Ejemplo: 8-888-888" />
      </div>

      <h2>Varios campos</h2>
      <div>
        <CedulaPanamaMultiField />
      </div>
    </div>
  );
};

render(<Demo />, document.querySelector('#demo'));
