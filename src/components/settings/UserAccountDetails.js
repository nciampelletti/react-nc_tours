import React, { useState } from "react"
import FormInput from "../ui/FormInput"
import { useUserContext } from "../../context/user_context"
import styled from "styled-components"
import Button from "../ui/Button"
import Image from "../../assets/default1.jpg"
import ImagePicker from "../ui/ImagePicker"
import { toast } from "react-toastify"
import TextHeader from "../layout/TextHeader"

const UserAccountDetails = () => {
  const { user, updateMe } = useUserContext()
  const [me, setMe] = useState(user)
  const { email, name } = me

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    //console.log(name, value)
    setMe({ ...me, [name]: value })
  }

  const handleImageChange = (event) => {
    //setState
    console.log(event.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { email, name } = me

    if (!email || !name) {
      toast.error("Please Fill Out All Fields")
      return
    }

    updateMe({ email: email, name: name })
  }

  return (
    <Wrapper>
      <TextHeader text='My Account Details' />
      <div className='form__header_footer'>
        <form className='form' onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='name'
            label='Name'
            value={name}
            required
            handleChange={handleChange}
          />
          <FormInput
            type='email'
            name='email'
            label='Email'
            value={email}
            required
            handleChange={handleChange}
          />

          <ImagePicker image={Image} handleChange={handleImageChange} />

          <div className='form__header_footer'>
            <Button>Save Changes</Button>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}

//type, name, value, handleInputData

export default UserAccountDetails

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

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
