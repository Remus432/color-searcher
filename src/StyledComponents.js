import styled from "styled-components"

export const ColorDiv = styled.div`
  width: 100px;
  height: 100px;
  border: 2px solid #ecf0f1;
  background-color: ${props => props.color};
`

export const ColorGrid = styled.div`
  display: flex;
`