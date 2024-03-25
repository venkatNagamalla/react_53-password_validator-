// Style your elements here

import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #24263c;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CardContainer = styled.div`
  height: 70%;
  width: 80%;
  background-color: #475569;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
  @media screen and (min-width: 992px) {
    width: 40%;
  }
`

export const Heading = styled.h1`
  font-size: 28px;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 450;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`

export const Text = styled.p`
  color: #f8fafc;
  font-size: 13px;
  text-align: center;
`

export const InputElement = styled.input`
  width: 80%;
  background-color: #edeeff;
  margin-top: 40px;
  height: 40px;
  border: none;
  outline: none;
  padding-left: 15px;
`

export const Error = styled.p`
  color: #ef4444;
  font-size: 13px;
  font-family: 'Roboto';
  margin-top: 15px;
  text-align: center;
`
