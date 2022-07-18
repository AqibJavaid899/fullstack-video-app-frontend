import { AccountCircleOutlined, SearchOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.menuBgColor};
  position: sticky;
  top: 0;
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const SearchComponent = styled.div`
  position: absolute;
  width: 48%;
  left: 0px;
  right: 0px;
  margin: auto;
  border: 0.5px solid #ccc;
  border-radius: 3px;
  padding: 0px;
  display: flex;
  justify-content: space-between;
`;

const InputComponent = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 0px 8px;
  color: ${({ theme }) => theme.textSoftColor};
`;

const SearchButton = styled.button`
  padding: 6px 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  background-color: #c9c6c6;
  display: flex;
  align-content: center;
`;

const LoginButton = styled.button`
  padding: 6px 16px;
  background-color: transparent;
  outline: none;
  border: 1px solid #339bf7;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <SearchComponent>
          <InputComponent placeholder="Search" />
          <SearchButton>
            <SearchOutlined />
          </SearchButton>
        </SearchComponent>
        <LoginButton>
          <AccountCircleOutlined />
          SIGN IN
        </LoginButton>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
