import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { KeyboardEvent, useState } from "react";
import { CalculatorDisplay } from "./CalculatorDisplay";
import { CalculatorKeyboard } from "./CalculatorKeyboard";

export interface Calc {
  exp: string;
  result: string;
}

export const CalculatorWithUi = () => {

  const [resultList, setResultList] = useState<Calc[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleCalculateOperation = () => {
    let exp = inputValue;
    let transformExp = inputValue;

    if (exp === '') return;
    if (exp.includes('%')) transformExp = exp.replaceAll('%','/100');

    try {
      const newCalc = {
        exp,
        result: eval(transformExp)
      }

      setResultList([...resultList, newCalc]);
      setInputValue('');
    } catch {
      setInputValue('Error');
    }
    
  }

  const handleEnterKey = (event: KeyboardEvent<HTMLInputElement>) => {
      
    if (event.code !== 'Enter') return;

    handleCalculateOperation();
  }

  const handleClearKey = () => {
    setInputValue('');
  }

  const handleClearResultList = () => {
    setResultList([]);
  }

  // handle buttons input
  const handleKeyboardClick = (btnName: string) => {
    switch (btnName) {
      case 'C':
        handleClearKey();
        break;
    
      case '=':
        handleCalculateOperation();
        break;

      case 'AC':
        handleClearResultList();
        break;

      default:
        setInputValue(inputValue + btnName);
        break;
    }
  }

  return (
    <div className="d-flex flex-column align-items-center mt-4 ">
      <h1>
        <FontAwesomeIcon icon={faCalculator} className='me-2' />
        Calculator with UI
        </h1>
      
      <div className="container w-25 base-shell text-light rounded" style={{height: 450}}>

        <CalculatorDisplay 
          inputValue={inputValue} 
          setInputValue={setInputValue} 
          resultList={resultList} 
          handleEnterKey={handleEnterKey}  
        /> 
        
        <CalculatorKeyboard handleKeyboardClick={handleKeyboardClick} inputValue={inputValue} /> 
      </div>
    </div>
  )
}