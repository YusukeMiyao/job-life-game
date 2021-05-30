import React, { useReducer } from "react";
import styled from "styled-components";
import { useAllContext } from "./Context";

const NameEntry = () => {
  const context = useAllContext();
  const dispatch = context.dispatch;
  return (
    <Wrapper>
      <NameWrapper>
        <NameRegistration>ユーザー１の登録名</NameRegistration>
        <NameInput
          onChange={(e) =>
            dispatch({ type: "userName1", payload: e.target.value })
          }
          value={context.userName1}
        />
        <NameRegistration>ユーザー２の登録名</NameRegistration>
        <NameInput
          onChange={(e) =>
            dispatch({ type: "userName2", payload: e.target.value })
          }
        />
      </NameWrapper>
      <NameWrapper>
        <NameRegistration>ユーザー３の登録名</NameRegistration>
        <NameInput
          onChange={(e) =>
            dispatch({ type: "userName3", payload: e.target.value })
          }
        />
        <NameRegistration>ユーザー４の登録名</NameRegistration>
        <NameInput
          onChange={(e) =>
            dispatch({ type: "userName4", payload: e.target.value })
          }
        />
      </NameWrapper>
      <SubmitButton onSubmit={context.onSubmit}>決定</SubmitButton>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const NameWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  margin-bottom: 30px;
`;

const NameRegistration = styled.div`
  font-size: 16px;
`;

const NameInput = styled.input`
  width: 100px;
`;

const SubmitButton = styled.button``;

export default NameEntry;
