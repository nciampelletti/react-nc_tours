import React, { useState } from "react"
// import { useUserContext } from "../../context/user_context"
import styled from "styled-components"
import { Button, FormInput } from "../../components/ui"
import { toast } from "react-toastify"
import { TextHeader } from "../../components/layout"

const initialState = {
  passwordCurrent: "",
  password: "",
  passwordConfirm: "",
}

const UserPasswordReset = () => {
  // const { passwordReset } = useUserContext()
  const [passwords, setPasswords] = useState(initialState)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    //console.log(name, value)
    setPasswords({ ...passwords, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { passwordCurrent, password, passwordConfirm } = passwords

    if (!passwordCurrent || !password || !passwordConfirm) {
      toast.error("Please Fill Out All Fields")
      return
    }

    toast.error("This is a DEMO version")
    //passwordReset({ passwordCurrent, password, passwordConfirm })
  }

  return (
    <Wrapper>
      <TextHeader styling='heading-secondary' text='My password reset' />
      <div>
        <form className='form' onSubmit={handleSubmit}>
          <FormInput
            type='password'
            name='passwordCurrent'
            label='Current password'
            value={passwords.passwordCurrent}
            required
            handleChange={handleChange}
          />

          <FormInput
            type='password'
            name='password'
            label='New password'
            value={passwords.password}
            required
            handleChange={handleChange}
          />

          <FormInput
            type='password'
            name='passwordConfirm'
            label='Confirm password'
            value={passwords.passwordConfirm}
            required
            handleChange={handleChange}
          />

          <div className='form__header_footer'>
            <Button>Save Changes</Button>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}

export default UserPasswordReset

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    text-align: left;
    margin-bottom: 3rem;
  }

  .title .underline {
    width: 6rem;
    height: 0.25rem;
    background: var(--clr-grey-5);
    margin-left: 0;
    margin-right: auto;
  }

  form {
    display: block;
    margin-top: 0em;
  }

  @media screen and (min-width: 630px) {
    .form__input {
      width: 95%;
    }
  }

  @media screen and (min-width: 1025px) {
    .form__input {
      width: 60%;
    }
  }
`
