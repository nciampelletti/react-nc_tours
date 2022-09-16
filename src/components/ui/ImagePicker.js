import React from "react"
import styled from "styled-components"

const ImagePicker = (props) => {
  const { handleChange } = props
  return (
    <Wrapper className='form__photo-upload'>
      <input
        className='form__upload'
        type='file'
        accept='image/*'
        id='photo'
        name='photo'
        onChange={handleChange}
      />
      <label htmlFor='photo'>Choose new photo</label>
    </Wrapper>
  )
}

export default ImagePicker

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  margin-bottom: 2rem;

  .form__user-photo {
    height: 5.5rem;
    width: 5.5rem;
    border-radius: 50%;
    margin-right: 2rem;
  }

  .form__upload {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .form__upload + label {
    color: var(--clr-grey-5);
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid var(--clr-grey-5);
    padding: 3px;
    transition: all 0.2s;
    cursor: pointer;
  }
`
