import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/PLAYBOY_RHOADES_BG.png');
`

const InputInfo = styled.div``

export default function Home() {
  const [email, setEmail] = React.useState('')
  return (
    <Container>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          // need to add validator and error states
          if (email) {
            fetch('/api/email-capture', { method: 'POST', body: JSON.stringify({ email }) })
          }
        }}
      >
        <InputInfo>Enter your email to receive updates on centerfolds</InputInfo>
        <input type="email" onChange={(e) => setEmail(e.target.value.trim())} />
        <button type="submit">Submit</button>
      </form>
    </Container>
  )
}
