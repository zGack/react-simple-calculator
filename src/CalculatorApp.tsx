import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ChangeEvent, useState } from 'react'
import { CalculatorWithUi, IconsDemo, SimpleDivCalculator } from './calculator'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function CalculatorApp() {


  return (
    <div className="container">
      {/* <SimpleDivCalculator/> */}
      {/* <hr /> */}
      <CalculatorWithUi/>
      <IconsDemo />   
    </div>
  )
}

export default CalculatorApp
