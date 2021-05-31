import React, { useEffect, useState } from "react";
import { useAllContext } from "./Context";
import styled from "styled-components";

const Game = () => {
  const context = useAllContext();
  const [a, setA] = useState([]);
  console.log(context);
  useEffect(() => {
    context.fetchClient();
  }, []);
  return (
    <Container>
      <Wrapper>
        <UserWrapper>
          <UserName>a</UserName>
          <Point>仕事pt</Point>
          <Point>資産</Point>
          <Point>恋愛/家族</Point>
          <Point>友人</Point>
          <NumInput />
          <FormButton>更新</FormButton>
        </UserWrapper>
        <UserWrapper>
          <UserName>b</UserName>
          <Point>仕事pt</Point>
          <Point>資産</Point>
          <Point>恋愛/家族</Point>
          <Point>友人</Point>
          <NumInput />
          <FormButton>更新</FormButton>
        </UserWrapper>
      </Wrapper>
      <Wrapper>
        <UserWrapper>
          <UserName>c</UserName>
          <Point>仕事pt</Point>
          <Point>資産</Point>
          <Point>恋愛/家族</Point>
          <Point>友人</Point>
          <NumInput />
          <FormButton>更新</FormButton>
        </UserWrapper>
        <UserWrapper>
          <UserName>d</UserName>
          <Point>仕事pt</Point>
          <Point>資産</Point>
          <Point>恋愛/家族</Point>
          <Point>友人</Point>
          <NumInput />
          <FormButton>更新</FormButton>
        </UserWrapper>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  height: 50%;
`;

const UserWrapper = styled.div`
  width: 50%;
`;

const UserName = styled.div`
  font-size: 16px;
`;

const Point = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
`;

const FormButton = styled.button`
  width: 48px;
`;

const NumInput = styled.input`
  width: 48px;
  height: 21px;
`;

export default Game;
