import React from 'react'
 import {Agreement, Container,Wrapper,Title,Input,Form,Button,Label,InputContainer} from './LoginElements'

function Login() {
    return (
        <Container>
            <Wrapper>
                <Title>Sign-In with your credentials</Title>
                <Form>
                    <InputContainer>
                        <Label>Email</Label>
                        <Input placeholder='name'/>
                    </InputContainer>
                    <InputContainer>
                        <Label>Password</Label>
                        <Input placeholder='password'/>
                    </InputContainer>
               
                    <Agreement>Do you remember your password</Agreement>
                    <Agreement>Create an Acount</Agreement>
                    <Button>Login</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
