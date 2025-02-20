
import { useState } from 'react'
import './App.css'

const App = () => {
  const [operand1, setOperand1] = useState('')
  const [operand2, setOperand2] = useState('')
  const [operator, setOperator] = useState('')
  const [display, setDisplay] = useState('')
  const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  const OPERATOR = ['+', '-', 'C', '=']
  const resetDisplay = () => {
    setOperand1('')
    setOperand2('')
    setOperator('')
  }
  const handleClickOperand1 = (number) => {

    setOperand1(operand1 + number.target.textContent)

  }
  const handleClickOperand2 = (number) => {

    setOperand2(operand2 + number.target.textContent)

  }
  const handleClickOperator = (oper) => {
    if (operand1 !== '') {
      if (
        oper.target.textContent === '+' ||
        oper.target.textContent === '-' ||
        oper.target.textContent === ''
      ) {
        setOperator(oper.target.textContent)

      }
    }

    if (oper.target.textContent === 'C') resetDisplay()
    console.log(operator)
    if (oper.target.textContent === '=') {
      if (
        operand1 !== '' ||
        operator !== '' ||
        operand2 !== ''
      ) {
        let sum = null
        operator === '+' ? sum = +operand1 + +operand2 : sum = +operand1 - +operand2
        resetDisplay()
        setDisplay(sum)

      }
    }


  }
  return (
    <div className='bg-gray-400 h-80 w-70 justify-center flex-col p-5 rounded-lg alig'>
      <div className='bg-gray-100  w-60 h-12 rounded-sm mb-5 overflow-hidden   '>
        <p className=' text-right h-full pt-5 '>
          {display !== '' ? display : operand1 + operator + operand2}

        </p>
      </div>
      <div className='flex gap-2 justify-between'>
        <div className='grid grid-cols-3 gap-1 col-end-1'>
          {NUMS.map((number, index) => (
            <button
              className={index === NUMS.length - 1 ? "col-start-2" : ""}
              key={index}
              onClick={e => (
                operator === '' ? handleClickOperand1(e) :
                  handleClickOperand2(e)
              )}
            >
              <p className='text-2xl'>
                {number}
              </p>
            </button>
          ))}
        </div>
        <div className='grid grid-cols-1 gap-1'>
          {OPERATOR.map((oper, index) => (
            <button
              key={index}
              onClick={handleClickOperator.bind(oper)}
            >
              <p className='text-lg'>
                {oper}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div >
  )
}

export default App
