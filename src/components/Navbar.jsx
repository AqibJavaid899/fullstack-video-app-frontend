import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { useSelector } from "react-redux";

const Container = styled.div`
  position: sticky;
  top: 0px;
  background-color: ${({ theme }) => theme.backgroundLighter};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 20px;
  height: 100%;
  position: relative;
`;

const SearchContainer = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 38%;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 16px;
  padding: 5px 20px;
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.textColor};
`;

const Avatar = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: #999;
  cursor: pointer;
`;

const Input = styled.input`
  border: none;
  flex: 1;
  background-color: transparent;
  text-decoration: none;
  outline: none;
  color: ${({ theme }) => theme.textColor};
`;

const Button = styled.button`
  padding: 6px 16px;
  color: #3ea6ff;
  border: 1px solid #3ea6ff;
  background-color: transparent;
  border-radius: 4px;
  cursor: pointer;
  gap: 6px;
  display: flex;
  align-content: center;
`;

const Text = styled.h4`
  display: flex;
  align-items: center;
  font-weight: 500;
  margin-top: 4px;
`;

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <Container>
      <Wrapper>
        <SearchContainer>
          <Input placeholder="Search" />
          <SearchOutlined />
        </SearchContainer>

        {currentUser?._id ? (
          <UserDetails>
            <VideoCallOutlinedIcon />
            <Avatar src={currentUser?.img} />
            {currentUser?.name}
          </UserDetails>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleOutlinedIcon />
              <Text>SIGN IN</Text>
            </Button>
          </Link>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
