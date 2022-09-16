import styled from "styled-components"

const TextHeader = (props) => {
  return (
    <Wrapper
      className={props.centered === "true" ? "header-center" : "header-left"}
    >
      <div
        className={props.centered === "true" ? "header-center" : "header-left"}
      >
        <h3 className='heading-secondary'>{props.text}</h3>
      </div>
      <div
        className={props.centered ? "underline-center" : "underline-left"}
      ></div>
    </Wrapper>
  )
}

export default TextHeader

const Wrapper = styled.div`
  .header-center {
    text-align: center;
    margin-bottom: 0.5rem;
  }

  .header-left {
    text-align: left;
    margin-bottom: 0.5rem;
  }

  .underline-center {
    width: 10rem;
    height: 0.25rem;
    background: var(--clr-grey-5);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4rem;
  }

  .underline-left {
    width: 10rem;
    height: 0.25rem;
    background: var(--clr-grey-5);
    margin-bottom: 4rem;
  }

  .heading-secondary {
    margin-bottom: 0.5rem;
    text-align: center;
  }
`
