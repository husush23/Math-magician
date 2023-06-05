function Calculator() {
  return (
    <div className="calculator">
      <div className="output">
        <input type="number" readOnly />
      </div>
      <div className="keyboard">
        <button className="span" type="submit">
          AC
        </button>
        <button type="submit">DEL</button>
        <button type="submit">÷</button>
        <button type="submit">1</button>
        <button type="submit">3</button>
        <button type="submit">3</button>
        <button type="submit">*</button>
        <button type="submit">4</button>
        <button type="submit">5</button>
        <button type="submit">6</button>
        <button type="submit">+</button>
        <button type="submit">7</button>
        <button type="submit">8</button>
        <button type="submit">9</button>
        <button type="submit">-</button>
        <button type="submit">.</button>
        <button type="submit">0</button>
        <button className="span" type="submit">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
