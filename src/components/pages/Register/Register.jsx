
import React from 'react'
 import {Agreement, Container,Wrapper,Title,Input,Form,Button,Label,InputContainer} from './registerElements'

function Register() {
    return (
        <Container>
            <Wrapper>
                <Title>Register an Account</Title>
                <Form>
                    <InputContainer>
                        <Label>Name</Label>
                        <Input placeholder='name'/>
                    </InputContainer>
                    <InputContainer>
                        <Label>Last Name</Label>
                        <Input placeholder='name'/>
                    </InputContainer>
                    <InputContainer>
                        <Label>Email</Label>
                        <Input placeholder='name'/>
                    </InputContainer>
                    <InputContainer>
                        <Label>Username</Label>
                        <Input placeholder='username'/>
                    </InputContainer>
                    <InputContainer>
                        <Label>Password</Label>
                        <Input placeholder='password'/>
                    </InputContainer>
                    <InputContainer>
                        <Label>Confirm Password</Label>
                        <Input placeholder='name'/>
                    </InputContainer>
               
                    <Agreement>I agree to Creanos Store’s Terms and Privacy Policy</Agreement>
                    <Button>Register</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
