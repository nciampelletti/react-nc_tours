import React from "react"
import styled from "styled-components"

const FormInput = (props) => {
  const { name, type, placeholder, value, required, handleChange, label } =
    props
  return (
    <Wrapper>
      <label className='form__label' htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        label={label}
        placeholder={placeholder}
        value={value}
        required={required}
        className='form__input'
        onChange={handleChange}
      />
    </Wrapper>
  )
}

export default FormInput

const Wrapper = styled.div`
  margin-bottom: 2.5rem;

  .form__label {
    display: block;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  .form__input {
    display: block;
    font-family: inherit;
    font-size: 1.1rem;
    color: inherit;
    padding: 1.25rem 1.75rem;
    border: none;
    width: 100%;
    background-color: #fff;

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    transition: all 0.3s;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .form__input {
    border: none;
  }

  .form__input:focus {
    outline: none;
  }

  .form__input:focus-within {
    border-bottom: 4px solid var(--clr-grey-6);
  }
`
