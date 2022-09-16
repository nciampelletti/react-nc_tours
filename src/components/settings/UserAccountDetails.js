import React, { useState } from "react"
import FormInput from "../ui/FormInput"
import { useUserContext } from "../../context/user_context"
import styled from "styled-components"
import Button from "../ui/Button"

import ImagePicker from "../ui/ImagePicker"
import { toast } from "react-toastify"
import TextHeader from "../layout/TextHeader"
import { image_user_url } from "../../utils/constants"

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

  const fileSelectedHandler = (event) => {
    let file = event.target.files[0]

    setMe({ ...me, photo: file })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { email, name } = me

    if (!email || !name) {
      toast.error("Please Fill Out All Fields")
      return
    }

    updateMe(me)
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

          <div className='image-picker'>
            <img
              className='form__user-photo'
              src={`${image_user_url}${user.photo}`}
              alt=''
            />
            <ImagePicker handleChange={fileSelectedHandler} />
          </div>

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

  .image-picker {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .form__user-photo {
    height: 5.5rem;
    width: 5.5rem;
    border-radius: 50%;
    margin-right: 2rem;
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
