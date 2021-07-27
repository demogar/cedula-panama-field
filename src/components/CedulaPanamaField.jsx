import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classNames from 'classnames';
import { validate } from 'cedula-panama';

import CedulaEvent from '../events/CedulaEvent';

const CedulaPanamaField = ({
  id,
  label,
  labelStyle,
  inputStyle,
  placeholder,
  onChangeHandler,
  onBlurHandler,
}) => {
  const [isValid, setIsValid] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const hasLabel = _.isString(label) && label.trim().length > 0;
  const fieldId = id || _.uniqueId('cedula-panama-field');
  const [cedula, setCedula] = useState('');

  const executeValidation = () => {
    const validationResult = cedula && validate(cedula);
    CedulaEvent.triggerFieldChanged(validationResult);

    if (validationResult) {
      setIsValid(validationResult.isValid);
      setIsComplete(validationResult.isComplete);
    }

    return validationResult;
  };

  const handleOnChange = (e) => {
    setCedula(e.currentTarget.value);
    const validationResult = executeValidation();

    if (onChangeHandler && _.isFunction(onChangeHandler)) {
      onChangeHandler(validationResult);
    }
  };

  const handleOnBlur = (e) => {
    setCedula(e.currentTarget.value);
    const validationResult = executeValidation();

    if (onBlurHandler && _.isFunction(onBlurHandler)) {
      onBlurHandler(validationResult);
    }
  };

  // Styles
  const inputStyles = classNames({
    [inputStyle]: true,
    'is-valid': isValid,
    'is-complete': isComplete,
  });
  const labelStyles = classNames({
    [labelStyle]: true,
    'is-valid': isValid,
    'is-complete': isComplete,
  });

  return (
    <>
      {hasLabel && (
        <label htmlFor={fieldId} className={labelStyles}>
          {label}
        </label>
      )}

      <input
        id={fieldId}
        type="text"
        name="cedula-field"
        className={inputStyles}
        placeholder={placeholder}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      />
    </>
  );
};

CedulaPanamaField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  labelStyle: PropTypes.string,
  inputStyle: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeHandler: PropTypes.func,
  onBlurHandler: PropTypes.func,
};

CedulaPanamaField.defaultProps = {
  id: '',
  label: '',
  labelStyle: '',
  inputStyle: '',
  placeholder: '',
  onChangeHandler: () => {},
  onBlurHandler: () => {},
};

export default CedulaPanamaField;
