import React, { Children } from 'react'
import styled from 'styled-components';


const Container = styled.div`
display: flex;`

const Pane = styled.div`
flex: ${props => props.weight};`



function SplitScreen({ children, leftWeight, rightWeight }) {

  const [left, right] = children

  return (
    <Container>
      <Pane weight={leftWeight}>
        {left}
      </Pane>
      <Pane weight={rightWeight}>
        {right}
      </Pane>
    </Container >
  )
}

export default SplitScreen