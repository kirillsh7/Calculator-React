
import { useState } from 'react'
import './App.css'

const App = () => {
  const [operand1, setOperand1] = useState('')
  const [operand2, setOperand2] = useState('')
  const [operator, setOperator] = useState('')
  const [isActive, setIsActive] = useState(false)
  const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  const OPERATOR = ['+', '-', 'C', '=']
  const resetDisplay = () => {
    setOperand1('')
    setOperand2('')
    setOperator('')
  }
  const handleClickOperand = (number) => {
    !operator ? setOperand1(operand1 + number) : setOperand2(operand2 + number)
  }

  const handleClickOperator = (oper) => {
    let sum = null
    if (operand1) {
      if (oper === '+' || oper === '-' || oper === '') {
        setIsActive(false)
        setOperator(oper)
      }
    }
    if (oper === 'C') {
      resetDisplay()
      setIsActive(false)
    }
    if (oper === '=') {

      if (operand1 && operator && operand2) {
        setIsActive(true)
        operator === '+' ? sum = +operand1 + +operand2 : sum = +operand1 - +operand2
        resetDisplay()
        setOperand1(sum)

      }
    }

  }
  return (
    <div className='bg-gray-400 h-80 w-70 justify-center flex-col p-5 rounded-lg alig'>
      <div className='bg-gray-100  w-60 h-12 rounded-sm mb-5 overflow-hidden   '>
        <p className={isActive ? ' text-right h-full pt-5 text-orange-800 ' : ' text-right h-full pt-5 '}>
          {operand1 + operator + operand2}

        </p>
      </div>
      <div className='flex gap-2 justify-between'>
        <div className='grid grid-cols-3 gap-1 col-end-1'>
          {NUMS.map((number, index) => (
            <button
              className={index === NUMS.length - 1 ? "col-start-2" : ""}
              key={index}
              onClick={handleClickOperand.bind(null, number)}
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
              className={'click:'}
              key={index}
              onClick={handleClickOperator.bind(null, oper)}
            >
              <p className={'text-lg'}>
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
