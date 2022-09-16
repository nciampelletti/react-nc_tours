import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useUserContext } from "../../context/user_context"
import { image_user_url } from "../../utils/constants"

const NavUsers = () => {
  const { user, logout } = useUserContext()

  return (
    <Wrapper>
      {!user && (
        <Link to='/login' className='nav__el'>
          LOGIN
        </Link>
      )}
      {user && (
        <button type='button' className='nav__el' onClick={() => logout()}>
          Logout
        </button>
      )}

      {!user && (
        <Link to='/signup' className='nav__el nav__el--cta'>
          Sign Up
        </Link>
      )}

      {user && (
        <Link to='/userprofile' className='nav__el'>
          <img
            className='nav__user-img'
            src={`${image_user_url}${user.photo}`}
            alt='user'
          />
          <span>{user.name}</span>
        </Link>
      )}
    </Wrapper>
  )
}

export default NavUsers

const Wrapper = styled.div`
  /* flex: 0 1 40%; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  .nav__user-img {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%;
    margin-right: 1rem;
  }

  .nav__el--cta {
    padding: 1rem 3rem;
    border-radius: 10rem;
    border: 1px solid white !important;
    transition: all 0.3s;
  }

  @media (max-width: 992px) {
    display: none;
  }
`
