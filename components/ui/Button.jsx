import React from 'react'

const Button = ({text, theme}) => {
  return (
    <button className={`outline-none border-none py-4 px-5 font-bold ${theme === 'white' ? 'text-primary bg-white' :'text-white bg-primary'}`}>{text}</button>
  )
}

export default Button