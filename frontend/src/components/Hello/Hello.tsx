import React from 'react'
import styled from 'styled-components'

type Props = {
  message: string
}

export function Hello({ message }: Props) {
  return <Container>{message}</Container>
}

const Container = styled.div`
  color: darkorange;
`
