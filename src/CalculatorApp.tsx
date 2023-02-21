import React, { ChangeEvent, useState } from 'react'
import { CalculatorWithUi, SimpleDivCalculator } from './calculator'

function CalculatorApp() {


  return (
    <div className="container">
      {/* <SimpleDivCalculator/> */}
      {/* <hr /> */}
      <CalculatorWithUi/>
    </div>
  )
}

export default CalculatorApp
