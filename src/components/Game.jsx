import React, { useEffect, useState } from "react"
import { useAllContext } from "./Context"
import styled from "styled-components"

const Game = () => {
  const context = useAllContext()
  const inputedDispatch = context.inputedDispatch
  const dataDispatch = context.dataDispatch
  const user1 = context.user1
  const user2 = context.user2
  const user3 = context.user3
  const user4 = context.user4
  console.log(context)
  return (
    <Container>
      <Wrapper>
        <UserWrapper>
          <UserName>{context.userName1}</UserName>
          <Point>業界/職種:</Point>
          <Point>仕事pt:{user1.jobPt}</Point>
          <Point>資産:{user1.money}</Point>
          <Point>恋愛/家族:{user1.lovePt}</Point>
          <Point>友人:{user1.friendPt}</Point>
          <Point>趣味:{user1.hobbyPt}</Point>
          <Point>ポジション:{user1.position}</Point>
          <NumInput
            onChange={(e) =>
              inputedDispatch({
                type: "user1",
                payload: e.target.value,
              })
            }
            value={context.user1Inputed}
          />
          <FormButton
            onClick={() =>
              dataDispatch({
                type: "user1",
                fetchData: context.fetchData,
                inputedNum: context.user1Inputed,
              })
            }
          >
            更新
          </FormButton>
        </UserWrapper>
        <UserWrapper>
          <UserName>{context.userName2}</UserName>
          <Point>業界/職種:</Point>
          <Point>仕事pt:{user2.jobPt}</Point>
          <Point>資産:{user2.money}</Point>
          <Point>恋愛/家族:{user2.lovePt}</Point>
          <Point>友人:{user2.friendPt}</Point>
          <Point>趣味:{user2.hobbyPt}</Point>
          <Point>ポジション:{user2.position}</Point>
          <NumInput
            onChange={(e) =>
              inputedDispatch({
                type: "user2",
                payload: e.target.value,
              })
            }
            value={context.user2Inputed}
          />
          <FormButton
            onClick={() =>
              dataDispatch({
                type: "user2",
                fetchData: context.fetchData,
                inputedNum: context.user1Inputed,
              })
            }
          >
            更新
          </FormButton>
        </UserWrapper>
      </Wrapper>
      <Wrapper>
        <UserWrapper>
          <UserName>{context.userName3}</UserName>
          <Point>業界/職種:</Point>
          <Point>仕事pt:{user3.jobPt}</Point>
          <Point>資産:{user3.money}</Point>
          <Point>恋愛/家族:{user3.lovePt}</Point>
          <Point>友人:{user3.friendPt}</Point>
          <Point>趣味:{user3.hobbyPt}</Point>
          <Point>ポジション:{user3.position}</Point>
          <NumInput
            onChange={(e) =>
              inputedDispatch({
                type: "user3",
                payload: e.target.value,
              })
            }
            value={context.user3Inputed}
          />
          <FormButton
            onClick={() =>
              dataDispatch({
                type: "user3",
                fetchData: context.fetchData,
                inputedNum: context.user1Inputed,
              })
            }
          >
            更新
          </FormButton>
        </UserWrapper>
        <UserWrapper>
          <UserName>{context.userName4}</UserName>
          <Point>業界/職種:</Point>
          <Point>仕事pt:{user4.jobPt}</Point>
          <Point>資産:{user4.money}</Point>
          <Point>恋愛/家族:{user4.lovePt}</Point>
          <Point>友人:{user4.friendPt}</Point>
          <Point>趣味:{user4.hobbyPt}</Point>
          <Point>ポジション:{user4.position}</Point>
          <NumInput
            onChange={(e) =>
              inputedDispatch({
                type: "user4",
                payload: e.target.value,
              })
            }
            value={context.user4Inputed}
          />
          <FormButton
            onClick={() =>
              dataDispatch({
                type: "user4",
                fetchData: context.fetchData,
                inputedNum: context.user1Inputed,
              })
            }
          >
            更新
          </FormButton>
        </UserWrapper>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
`

const Wrapper = styled.div`
  display: flex;
  height: 50%;
`

const UserWrapper = styled.div`
  width: 50%;
`

const UserName = styled.div`
  font-size: 16px;
`

const Point = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
`

const FormButton = styled.button`
  width: 48px;
`

const NumInput = styled.input`
  width: 48px;
  height: 21px;
`

export default Game
