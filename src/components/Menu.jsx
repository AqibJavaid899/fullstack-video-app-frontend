import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";

import logo from "../assets/images/logo.png";

const Container = styled.div`
  flex: 1.2;
  background-color: ${({ theme }) => theme.backgroundLighter};
  height: 100vh;
  color: ${({ theme }) => theme.textColor};
  font-size: 14px;
  position: sticky;
  top: 0;
  overflow: scroll;
`;

const Wrapper = styled.div`
  padding: 16px 24px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 24px;
`;

const Img = styled.img`
  height: 24px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 12px 8px;
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const HorizontalLine = styled.hr`
  margin: 16px 0px;
  border: 0.5px solid ${({ theme }) => theme.horizontalLineColor};
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 16px;
`;

const Login = styled.div``;

const Button = styled.button`
  padding: 6px 16px;
  color: #3ea6ff;
  border: 1px solid #3ea6ff;
  background-color: transparent;
  border-radius: 4px;
  margin-top: 12px;
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

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={logo} />
            YouTube
          </Logo>
        </Link>
        {/* Menu Items */}
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <HomeIcon />
            Home
          </Item>
        </Link>
        <Item>
          <ExploreOutlinedIcon />
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </Item>
        <HorizontalLine />
        <Item>
          <VideoLibraryOutlinedIcon />
          Libary
        </Item>
        <Item>
          <HistoryOutlinedIcon />
          History
        </Item>
        <HorizontalLine />
        <Login>
          Sign in to like videos, comment, and subscribe.
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button>
              <AccountCircleOutlinedIcon />
              <Text>SIGN IN</Text>
            </Button>
          </Link>
        </Login>
        <HorizontalLine />
        <Title>BEST OF YOUTUBE</Title>
        <Item>
          <LibraryMusicOutlinedIcon />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlinedIcon />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlinedIcon />
          Gaming
        </Item>
        <Item>
          <MovieOutlinedIcon />
          Movies
        </Item>
        <Item>
          <ArticleOutlinedIcon />
          News
        </Item>
        <Item>
          <LiveTvOutlinedIcon />
          Live
        </Item>
        <HorizontalLine />
        <Item>
          <SettingsOutlinedIcon />
          Settings
        </Item>
        <Item>
          <FlagOutlinedIcon />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlinedIcon />
          Help
        </Item>
        <Item onClick={() => setDarkMode((prevState) => !prevState)}>
          <SettingsBrightnessOutlinedIcon />
          {darkMode ? "Dark" : "Light"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
