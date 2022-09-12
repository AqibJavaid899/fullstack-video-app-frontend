import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 110px);
  color: ${({ theme }) => theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  border: 1px solid ${({ theme }) => theme.soft};
  background-color: ${({ theme }) => theme.backgroundLighter};
  padding: 24px 60px;
  border-radius: 4px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 10px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.horizontalLineColor};
  color: ${({ theme }) => theme.textColor};
  width: 100%;
  border-radius: 4px;
  outline: none;
`;

const Button = styled.button`
  color: ${({ theme }) => theme.horizontalLineColor};
  background-color: ${({ theme }) => theme.soft};
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 4px;
`;

const ExtraLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  color: ${({ theme }) => theme.horizontalLineColor};
  cursor: pointer;
  margin-top: 8px;
  font-size: 13px;
`;

const Language = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 8px;
`;

const Link = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Subtitle>to continue to YouTube</Subtitle>
        <Input placeholder="username" />
        <Input type="password" placeholder="password" />
        <Button>Sign In</Button>
        <Title>or</Title>
        <Input placeholder="username" />
        <Input placeholder="email" />
        <Input type="password" placeholder="password" />
        <Button>Sign Up</Button>
      </Wrapper>
      {/* Extra Links */}
      <ExtraLinks>
        <Language>English (USA)</Language>
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </ExtraLinks>
    </Container>
  );
};

export default Login;
