import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";

import logo from "../assets/images/logo.png";
import { AccountCircleOutlined } from "@mui/icons-material";

const Container = styled.div`
  flex: 1.4;
  background-color: ${({ theme }) => theme.menuBgColor};
  height: 100vh;
  color: ${({ theme }) => theme.textColor};
  font-size: 14px;
  position: sticky;
  top: 0px;
  scroll-behavior: smooth;
  overflow: scroll;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 25px;
`;

const Image = styled.img`
  height: 25px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  cursor: pointer;
  padding: 8px 0px;
`;

const Divider = styled.hr`
  margin: 16px 0px;
  border: 0.5px solid ${({ theme }) => theme.lineDividerColor};
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.textSoftColor};
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const LoginSection = styled.div``;
const LoginButton = styled.button`
  padding: 6px 16px;
  background-color: transparent;
  outline: none;
  border: 1px solid #339bf7;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 600;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
        {/* Logo with Name */}
        <Logo>
          <Image src={logo}></Image>
          Youtube
        </Logo>
        {/* Menu Items */}
        {/* Section 1 */}
        <MenuItem>
          <HomeIcon />
          Home
        </MenuItem>
        <MenuItem>
          <ExploreOutlinedIcon />
          Explore
        </MenuItem>
        <MenuItem>
          <SubscriptionsOutlinedIcon />
          Subscription
        </MenuItem>
        <Divider />

        {/* Section 2 */}
        <MenuItem>
          <VideoLibraryOutlinedIcon />
          Library
        </MenuItem>
        <MenuItem>
          <HistoryOutlinedIcon />
          History
        </MenuItem>
        <Divider />

        {/* Section 3 */}
        <LoginSection>
          Sign in to like videos, comment and subscribe.
          <LoginButton>
            <AccountCircleOutlined />
            SIGN IN
          </LoginButton>
        </LoginSection>
        <Divider />

        {/* Section 4 */}
        <SectionTitle>Best of Youtube</SectionTitle>
        <MenuItem>
          <LibraryMusicOutlinedIcon />
          Music
        </MenuItem>
        <MenuItem>
          <SportsBasketballOutlinedIcon />
          Sports
        </MenuItem>
        <MenuItem>
          <SportsEsportsOutlinedIcon />
          Gaming
        </MenuItem>
        <MenuItem>
          <MovieCreationOutlinedIcon />
          Movies
        </MenuItem>
        <MenuItem>
          <ArticleOutlinedIcon />
          News
        </MenuItem>
        <MenuItem>
          <LiveTvOutlinedIcon />
          Live
        </MenuItem>
        <Divider />

        {/* Section 5 */}
        <MenuItem>
          <SettingsOutlinedIcon />
          Settings
        </MenuItem>
        <MenuItem>
          <FlagOutlinedIcon />
          Report
        </MenuItem>
        <MenuItem>
          <HelpOutlineOutlinedIcon />
          Help
        </MenuItem>
        <MenuItem onClick={() => setDarkMode((prevState) => !prevState)}>
          <SettingsBrightnessOutlinedIcon />
          Light Mode
        </MenuItem>
      </Wrapper>
    </Container>
  );
};

export default Menu;
