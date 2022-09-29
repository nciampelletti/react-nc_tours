import React from "react"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { useUserContext } from "../../context/user_context"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import { FormInput, Button } from "../../components/ui"
import { TextHeader } from "../../components/layout"

const initialState = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
}

const SignupForm = () => {
  const [values, setValues] = useState(initialState)
  const { signup, user } = useUserContext()

  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/userprofile")
      }, 1000)
    }
  }, [user, navigate])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { email, password, name, passwordConfirm } = values

    if (!email || !password || !name || !passwordConfirm) {
      toast.error("Please Fill Out All Fields")
      return
    }

    signup({
      name: name,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
    })
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <TextHeader centered='true' text='Create your account' />
      <form className='form form--signup'>
        <FormInput
          type='text'
          name='name'
          label='Name'
          placeholder='your name'
          value={values.name}
          required
          handleChange={handleChange}
        />
        <FormInput
          type='email'
          name='email'
          label='Email'
          placeholder='you@example.com'
          value={values.email}
          required
          handleChange={handleChange}
        />

        <FormInput
          type='password'
          name='password'
          label='Password'
          placeholder='••••••••'
          value={values.password}
          required
          handleChange={handleChange}
        />

        <FormInput
          type='password'
          name='passwordConfirm'
          label='Confirm password'
          placeholder='••••••••'
          value={values.passwordConfirm}
          required
          handleChange={handleChange}
        />

        <div className='form__header_footer'>
          <Button>Sign up</Button>
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
    margin-bottom: 1rem;
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
    padding: 1rem 1.75rem;
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
    margin-bottom: 1rem;
  }

  form {
    display: block;
    margin-top: 0em;
  }
`
