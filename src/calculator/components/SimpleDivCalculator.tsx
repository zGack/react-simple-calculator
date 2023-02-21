import { ChangeEvent, useState } from "react";

export const SimpleDivCalculator = () => {

  const [num1, setNum1] = useState<number | string>('');
  const [num2, setNum2] = useState<number | string>('');
  const [result, setResult] = useState<number>(0);

  const [isDivByZero, setIsDivByZero] = useState<boolean>(false);

  const handleNumChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    if (isNaN(Number(value))) return;

    const inputValue = (value === '') ? '' : Number(value);
    setIsDivByZero(false);

    (name === 'numerator') ? setNum1( inputValue ) : setNum2( inputValue );
  }

  const onDivideClick = () => {
    const numerator = Number(num1); 
    const denominator = Number(num2); 

    if (denominator === 0) {
      setIsDivByZero(true);
      setNum2('');
      return;
    }

    setIsDivByZero(false);
    setResult(numerator / denominator);
  }

  const onClearClick = () => {
    setNum1('');
    setNum2('');
    setResult(0);
    setIsDivByZero(false);
  }
  
  return (
    <div className="d-flex flex-column align-items-center mb-5 mt-4">
      <div className="row mb-4">
        <h1>Simple Division Calculator</h1>
      </div>
      <div className="row mb-3">
        <div className="col">
          <input type="text" className="form-control" placeholder="Numerator" value={num1} name="numerator" onChange={handleNumChange}/>
        </div>
        <div className="col-md-auto">
          <h3>/</h3>
        </div>
        <div className="col">
          <input type="text" className={`form-control ${isDivByZero && 'is-invalid'}`} placeholder="Denominator" value={num2} name="denominator" onChange={handleNumChange}/>
          <div className="invalid-feedback">
            Division by zero error
          </div>
        </div>
        <div className="col-md-auto">
          <h3> = </h3>
        </div>
        <div className="col-md-auto">
          <h2>{result}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button type="button" className="btn btn-warning me-2" onClick={onClearClick}>C</button>
          <button type="button" className="btn btn-primary" onClick={onDivideClick}>Divide</button>
        </div>
      </div>
    </div>
  )
}