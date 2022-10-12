import React from 'react'

const FormInput = (props) => {
    const {onChange, id, errorMsg, ...inputProps} = props;
  return (
    <div className='formInput'>
        <input {...inputProps} onChange={onChange} />
        <span>{errorMsg}</span>
    </div>
  )
}

export default FormInput