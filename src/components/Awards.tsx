import React from "react"
import { useAllContext } from "./Context"
import styled from "styled-components"

export const Awards: React.FC = () => {
  const context = useAllContext()
  return (
    <div>
      <UserName>1位：{context.userName1}</UserName>
      <UserName>2位：{context.userName2}</UserName>
      <UserName>3位：{context.userName3}</UserName>
      <UserName>4位：{context.userName4}</UserName>
    </div>
  )
}

const UserName = styled.div`
  font-size: 16px;
`

export default Awards
