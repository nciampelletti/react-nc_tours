import React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"
import { useUserContext } from "../../context/user_context"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { Button, FormInput } from "../../components/ui/"
import { TextHeader } from "../../components/layout/"

const initialState = {
  email: "",
  password: "",
}

const LoginForm = () => {
  const [values, setValues] = useState(initialState)
  const { login, user } = useUserContext()
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

    const { email, password } = values

    if (!email || !password) {
      toast.error("Please Fill Out All Fields")
      return
    }

    login({ email: email, password: password })
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <TextHeader centered='true' text='Login into your account' />
      <form className='form form--signup'>
        <FormInput
          type='email'
          name='email'
          label='Email'
          placeholder='you@example.com'
          value={values.name}
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

        <div className='form__header_footer'>
          <Button>Login</Button>
        </div>
      </form>
    </Wrapper>
  )
}

export default LoginForm

const Wrapper = styled.div`
  width: 25rem;
  box-shadow: 0 1.5rem 4rem rgb(0 0 0 / 45%);
  padding: 3rem 3rem;
  margin: 3rem auto;
  border-radius: 3px;

  .form__header_wide {
    padding-right: 2rem;
    padding-left: 2rem;
  }
  @media screen and (min-width: 630px) {
    width: 50rem;
  }

  .form__group:not(:last-child) {
    margin-bottom: 2.5rem;
  }
  form {
    display: block;
    margin-top: 0em;
  }
  .form__header_footer {
    text-align: center;
    margin-bottom: 1rem;
  }
`
