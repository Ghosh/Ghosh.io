import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  height: ${ 4 * 80 }px;
  display: flex;
  align-items: center;
`

const Hero = () => {
  return (
    <Wrapper>
      <div>
        <p>
          Hi, I am Indrashish!
        </p>
        <p>
          I am a Product Designer who enjoys designing and building experiences for the next billion users
        </p>
      </div>
    </Wrapper>
  )
}

export default Hero
