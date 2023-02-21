import { FC } from "react";

const keyboardLayout = [
  ['C','(',')','/'],
  ['7','8','9','*'],
  ['4','5','6','-'],
  ['1','2','3','+'],
  ['.','0','%','='],
]

interface Props {
  handleKeyboardClick: (name: string) => void;
  inputValue: string;
}

export const CalculatorKeyboard: FC<Props> = ({handleKeyboardClick, inputValue}: Props) => {
  return (
    <div className="container d-grid p-1" style={{height: '60%'}}>
      {
        keyboardLayout.map((row, i) => (
          <div className="row gap-1 p-1" key={i}>
            {
              row.map((btn,j) => (
              <div className="col d-grid px-0" key={j}>
                {
                  (btn === 'C') ? 
                    (
                      <button 
                        className={`btn btn-${( inputValue === '' ?'danger':'warning')} text-light fw-bold`} 
                        type="button" 
                        name={( inputValue === '' ?'AC':btn)} 
                        onClick={(event) => handleKeyboardClick((event.target as HTMLButtonElement).name)}
                      >{( inputValue === '' ?'AC':btn)}</button>
                    )
                  :
                  (
                    <button 
                      className={`btn btn-${((btn === '=')?'primary':'keyboard')} text-light fw-bold`} 
                      type="button" 
                      name={btn} 
                      onClick={(event) => handleKeyboardClick((event.target as HTMLButtonElement).name)}
                    >
                    {btn}
                  </button>
                  )
                }
              </div>
              ))
            }
          </div>
        ))
      }
    </div>
  )
}