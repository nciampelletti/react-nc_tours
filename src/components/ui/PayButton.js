import axios from "axios"

// import { booking_url as url } from "../../utils/constants"
import styled from "styled-components"

const PayButton = ({ id }) => {
  //`${url}${id}`
  const handleOnClick = () => {
    axios
      .get(`/api/v1/booking/${id}`, { withCredentials: true })
      .then((res) => {
        const ses_url = res.data.session.url
        console.log(ses_url)
        if (ses_url) {
          window.location.href = ses_url
          //navigate(ses_url, { replace: false })
        }
      })
      .catch((err) => console.log(err))

    //
  }

  return (
    <div>
      <Wrapper className='btn btn--blue' onClick={handleOnClick}>
        Book it
      </Wrapper>
    </div>
  )
}

export default PayButton

const Wrapper = styled.button`
  padding: 1rem 3rem;
`
