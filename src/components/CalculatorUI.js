import { useState } from 'react';
import calculate from '../logic/calculate';

function CalculatorUI() {
  const [values, setValues] = useState({
    total: null,
    next: null,
    operation: null,
  });
  function handleClick(e) {
    setValues(calculate(values, e.target.innerText));
  }

  return (
    <div className="calculator">
      <div className="output" title="Output">
        <span>{values.total && values.total}</span>
        <span>{values.operation && values.operation}</span>
        <span>{values.next && values.next}</span>
      </div>
      <div className="keyboard">
        <button
          type="submit"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          AC
        </button>
        <button
          type="submit"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          +/-
        </button>
        <button
          type="submit"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          %
        </button>
        <button
          type="submit"
          className="side"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          ÷
        </button>
        <button
          type="submit"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          7
        </button>
        <button
          type="submit"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          8
        </button>
        <button
          type="submit"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          9
        </button>
        <button
          type="submit"
          className="side"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          x
        </button>
        <button
          type="submit"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          4
        </button>
        <button
          type="submit"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          5
        </button>
        <button
          type="submit"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          6
        </button>
        <button
          type="submit"
          className="side"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          -
        </button>
        <button
          type="submit"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          1
        </button>
        <button
          type="submit"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          2
        </button>
        <button
          type="submit"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          3
        </button>
        <button
          type="submit"
          className="side"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          +
        </button>
        <button
          type="submit"
          className="span"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          0
        </button>
        <button
          type="submit"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          .
        </button>
        <button
          type="submit"
          className="side"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          =
        </button>
      </div>
    </div>
  );
}
export default CalculatorUI;
