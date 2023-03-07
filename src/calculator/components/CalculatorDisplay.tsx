import { ChangeEvent, FC, KeyboardEvent, useEffect, useRef, useState } from "react";
import { Calc } from "./CalculatorWithUi";

interface Props {
  resultList: Calc[];
  inputValue: string;
  handleEnterKey: (event: KeyboardEvent<HTMLInputElement>) => void;
  setInputValue: (value: string) => void;
}

export const CalculatorDisplay: FC<Props>= ({resultList, inputValue, handleEnterKey, setInputValue}: Props) => {
  
  const inputRef = useRef<HTMLInputElement>(null);
  const listBoxRef = useRef<HTMLDivElement>(null);

  // handle keyboard input
  const handleKeyDown = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const regex = /^[0-9+\-*.()%/]+$/; // allow only [0-9], '+', '-', '*', '/', '.', '(', ')', '%' characters

    if (!(value === '' || regex.test(value))) return;

    setInputValue(value);
  }

  // Make scroll to bottom automatically when result is added to resultList
  useEffect(() => {
    if (listBoxRef.current) {
      listBoxRef.current.scrollTop = listBoxRef.current.scrollHeight;
    }
  }, [resultList]);

  return (
    <div ref={inputRef} className="row bg-display" style={{height: '40%'}} onClick={() => (inputRef.current?.querySelector('input') as HTMLInputElement).focus()}>
      <div className="col-12 align-self-end">
        <div className="overflow-auto" style={{maxHeight: 120}} ref={listBoxRef}>
          {
            resultList.map(({exp,result,},i) => (
              <p className="mb-0" key={i}>{`${exp} = ${result}`}</p>  
            ))
          }
        </div>
        <hr className="m-0 base-shell"/>
        <input type="text" name="display_input" placeholder="Type" value={inputValue} className="display bg-display text-light border-0 fs-2 w-100" onChange={handleKeyDown} onKeyDown={handleEnterKey} />
      </div>
    </div>
  )
} 
