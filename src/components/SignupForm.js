import React from "react"
import styled from "styled-components"

const SignupForm = () => {
  return (
    <Wrapper>
      <div className='form__header_footer'>
        <h3 className='heading-secondary'>create your account</h3>
      </div>
      <div className='underline'></div>
      <form className='form form--signup'>
        <div className='form__group'>
          <label className='form__label' htmlFor='name'>
            Your name
          </label>
          <input
            className='form__input'
            id='name'
            type='text'
            placeholder=''
            required
          />
        </div>
        <div className='form__group'>
          <label className='form__label' htmlFor='email'>
            Email address
          </label>
          <input
            className='form__input'
            id='email'
            type='email'
            placeholder='you@example.com'
            required
          />
        </div>
        <div className='form__group ma-bt-md'>
          <label className='form__label' htmlFor='password'>
            Password
          </label>
          <input
            className='form__input'
            id='password'
            type='password'
            placeholder='••••••••'
            required=''
            minlength='8'
          />
        </div>
        <div className='form__group ma-bt-md'>
          <label className='form__label' htmlFor='passwordConfirm'>
            Confirm password
          </label>
          <input
            className='form__input'
            id='passwordConfirm'
            type='password'
            placeholder='••••••••'
            required=''
            minlength='8'
          />
        </div>

        <div className='form__header_footer'>
          <button className='btn btn--blue form__header_wide'> Sign up </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default SignupForm

const Wrapper = styled.div`
  margin: 0 auto;
  width: 25rem;
  box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 45%);
  padding: 3rem 3rem;
  margin: 3rem auto;
  border-radius: 3px;

  .form__header_footer {
    text-align: center;
    margin-bottom: 2rem;
  }
  .form__header_wide {
    padding-right: 2rem;
    padding-left: 2rem;
  }

  @media screen and (min-width: 630px) {
    width: 50rem;
  }

  .form__label {
    display: block;
    font-size: 1.1rem;
    font-weight: 700;
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
    background-color: #f2f2f2;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    transition: all 0.3s;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .form__group:not(:last-child) {
    margin-bottom: 2.5rem;
  }

  form {
    display: block;
    margin-top: 0em;
  }
`
