import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { validate } from 'cedula-panama';

import CedulaEvent from '../events/CedulaEvent';

const CedulaPanamaMultiField = ({ id, onChangeHandler, inputStyle }) => {
  const provincias = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
  const others = ['E', 'N', 'PE'];
  const provinciasSuffix = ['AV', 'PI'];
  const fieldId = id || _.uniqueId('cedula-panama-field');

  const [isValid, setIsValid] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const [provincia, setProvincia] = useState('');
  const [provinciaSuffix, setProvinciaSuffix] = useState('');
  const [libro, setLibro] = useState('');
  const [tomo, setTomo] = useState('');

  const [cedula, setCedula] = useState('');

  useEffect(() => {
    // Examples:
    // 1-1234-12345
    // PE-1234-123456
    // 1AV-1234-12345
    setCedula(`${provincia}${provinciaSuffix}-${libro}-${tomo}`);

    const validationResult = validate(cedula);
    CedulaEvent.triggerFieldChanged(validationResult);

    if (validationResult) {
      setIsValid(validationResult.isValid);
      setIsComplete(validationResult.isComplete);
    }

    if (onChangeHandler && _.isFunction(onChangeHandler)) {
      onChangeHandler(validationResult);
    }
  }, [provincia, provinciaSuffix, libro, tomo]);

  const styles = classNames({
    [inputStyle]: true,
    'is-valid': isValid,
    'is-complete': isComplete,
  });

  return (
    <>
      <select
        id={`${fieldId}-part1`}
        onChange={(e) => setProvincia(e.currentTarget.value)}
        className={styles}
      >
        <option value="">--</option>
        <optgroup label="Provincias">
          {provincias.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </optgroup>
        <optgroup label="Otros">
          {others.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </optgroup>
      </select>

      <select
        id={`${fieldId}-part2`}
        onChange={(e) => setProvinciaSuffix(e.currentTarget.value)}
        className={styles}
      >
        <option value="">--</option>
        {provinciasSuffix.map((suffix) => (
          <option key={suffix} value={suffix}>
            {suffix}
          </option>
        ))}
      </select>

      <input
        id={`${fieldId}-part3`}
        className={styles}
        type="number"
        onChange={(e) => setLibro(e.currentTarget.value)}
      />
      <input
        id={`${fieldId}-part4`}
        className={styles}
        type="number"
        onChange={(e) => setTomo(e.currentTarget.value)}
      />
    </>
  );
};

CedulaPanamaMultiField.propTypes = {
  id: PropTypes.string,
  inputStyle: PropTypes.string,
  onChangeHandler: PropTypes.func,
};

CedulaPanamaMultiField.defaultProps = {
  id: '',
  inputStyle: '',
  onChangeHandler: () => {},
};

export default CedulaPanamaMultiField;
