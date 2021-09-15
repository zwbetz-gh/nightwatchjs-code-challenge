import React from 'react';
import './App.css';
import {useForm} from 'react-hook-form';

function App() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: {errors}
  } = useForm();

  const requiredAsterisk = <span className="custom-required">*</span>;

  const operationToAction = {
    '+': (number1, number2) => number1 + number2,
    '-': (number1, number2) => number1 - number2,
    '*': (number1, number2) => number1 * number2,
    '/': (number1, number2) => number1 / number2
  };

  const createNumberLabel = (id, label) => {
    return (
      <label htmlFor={id} className="form-label">
        {label} {requiredAsterisk}
      </label>
    );
  };

  const createNumberInput = (id, name) => {
    return (
      <input
        id={id}
        type="number"
        className="form-control"
        {...register(name, {required: true})}
      />
    );
  };

  const createRequiredMessage = (name, label) => {
    return (
      <p id={`${name}Error`} className="custom-error">
        {label} is required
      </p>
    );
  };

  const onSubmit = (data) => {
    const number1 = Number(data.number1);
    const number2 = Number(data.number2);
    const {operation} = data;
    const action = operationToAction[operation];
    const result = action(number1, number2);
    setValue('result', result);
  };

  React.useEffect(() => {
    console.log('once');
  }, []);

  return (
    <div className="container custom-container">
      <h1 className="custom-h1">Calculator</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          {createNumberLabel('number1', 'Number 1')}
          {createNumberInput('number1', 'number1')}
          {errors.number1 && createRequiredMessage('number1', 'Number 1')}
        </div>

        <div className="mb-3">
          {createNumberLabel('number2', 'Number 2')}
          {createNumberInput('number2', 'number2')}
          {errors.number2 && createRequiredMessage('number2', 'Number 2')}
        </div>

        <div className="mb-3">
          <label htmlFor="operation" className="form-label">
            Operation {requiredAsterisk}
          </label>
          <select
            id="operation"
            defaultValue=""
            className="form-control"
            {...register('operation', {required: true})}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          {errors.operation && createRequiredMessage('operation', 'Operation')}
        </div>

        <div className="mb-3">
          <label htmlFor="result" className="form-label">
            Result
          </label>
          <input
            id="result"
            type="number"
            className="form-control"
            readOnly
            {...register('result')}
          />
        </div>

        <button
          id="submit"
          type="submit"
          className="btn btn-primary custom-button"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
