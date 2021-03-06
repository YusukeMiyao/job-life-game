// import React from "react";
import styled from "styled-components"
import { useAllContext } from "./Context"
// import { withRouter } from "react-router-dom";

const NameEntry = () => {
  const context = useAllContext()
  console.log(context)
  const userNameDispatch = context.userNameDispatch
  return (
    <Wrapper>
      <NameWrapper>
        <NameRegistration>ユーザー１の登録名</NameRegistration>
        <NameInput
          onChange={(e) =>
            userNameDispatch({ type: "userName1", payload: e.target.value })
          }
          value={context.userName1}
        />

        <NameRegistration>ユーザー２の登録名</NameRegistration>
        <NameInput
          onChange={(e) =>
            userNameDispatch({ type: "userName2", payload: e.target.value })
          }
          value={context.userName2}
        />
      </NameWrapper>
      <NameWrapper>
        <NameRegistration>ユーザー３の登録名</NameRegistration>
        <NameInput
          onChange={(e) =>
            userNameDispatch({ type: "userName3", payload: e.target.value })
          }
          value={context.userName3}
        />
        <NameRegistration>ユーザー４の登録名</NameRegistration>
        <NameInput
          onChange={(e) =>
            userNameDispatch({ type: "userName4", payload: e.target.value })
          }
          value={context.userName4}
        />
      </NameWrapper>
      <SubmitButton onClick={context.onSubmit}>決定</SubmitButton>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const NameWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  margin-bottom: 30px;
`

const NameRegistration = styled.div`
  font-size: 16px;
`

const NameInput = styled.input`
  width: 100px;
`

const SubmitButton = styled.button``

export default NameEntry
