// Write your code here

import {useState} from 'react'

import {
  MainContainer,
  CardContainer,
  Heading,
  Text,
  InputElement,
  Error,
} from './styledComponents'

const PasswordValidator = () => {
  const [updatePassword, setUpdatePassword] = useState('')

  const onChangePassword = e => setUpdatePassword(e.target.value)

  return (
    <MainContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Text>Check how strong and secure is your password</Text>
        <InputElement onChange={onChangePassword} type="password" />
        {updatePassword.length <= 8 && (
          <Error>Your password must be at least 8 characters</Error>
        )}
      </CardContainer>
    </MainContainer>
  )
}

export default PasswordValidator
