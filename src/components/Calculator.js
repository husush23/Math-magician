function Calculator() {
  return (
    <div className='calculator'>
      <div className='output'>89</div>
      <div className='keyboard'>
        <button type='submit'>AC</button>
        <button type='submit'>+/-</button>
        <button type='submit'>%</button>
        <button type='submit' className='side'>
          ÷
        </button>
        <button type='submit'>7</button>
        <button type='submit'>8</button>
        <button type='submit'>9</button>
        <button type='submit' className='side'>
          *
        </button>
        <button type='submit'>4</button>
        <button type='submit'>5</button>
        <button type='submit'>6</button>
        <button type='submit' className='side'>
          -
        </button>
        <button type='submit'>1</button>
        <button type='submit'>2</button>
        <button type='submit'>3</button>
        <button type='submit' className='side'>
          +
        </button>
        <button type='submit' className='span'>
          0
        </button>
        <button type='submit'>.</button>
        <button type='submit' className='side'>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
