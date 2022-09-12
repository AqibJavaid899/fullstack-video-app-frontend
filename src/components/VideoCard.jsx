import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.cardSize !== "small" && "360px"};
  margin-bottom: ${(props) => (props.cardSize === "small" ? "10px" : "44px")};
  cursor: pointer;
  display: ${(props) => props.cardSize === "small" && "flex"};
  gap: 12px;
`;

const Image = styled.img`
  background-color: #999;
  width: 100%;
  height: ${(props) => (props.cardSize === "small" ? "110px" : "220px")};
  flex: 1;
`;

const VideoDetails = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: ${(props) => props.cardSize !== "small" && "16px"};
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #999;
  display: ${(props) => props.cardSize === "small" && "none"};
`;

const VideoText = styled.div``;

const TitleText = styled.h1`
  font-size: ${(props) => (props.cardSize === "small" ? "14px" : "16px")};
  color: ${({ theme }) => theme.textColor};
  font-weight: 500;
`;

const ChannelName = styled.h2`
  font-size: ${(props) => (props.cardSize === "small" ? "12px" : "14px")};
  color: ${({ theme }) => theme.horizontalLineColor};
  margin-top: 8px;
  font-weight: 400;
`;

const VideoAnalytics = styled.p`
  font-size: ${(props) => (props.cardSize === "small" ? "12px" : "14px")};
  color: ${({ theme }) => theme.horizontalLineColor};
  margin-top: 4px;
`;

const VideoCard = ({ cardSize }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none", color: "inherit" }}>
      <Container cardSize={cardSize}>
        <Image
          cardSize={cardSize}
          src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__480.jpg"
        />
        {/* Details */}
        <VideoDetails cardSize={cardSize}>
          {/* Channel Image */}
          <ChannelImage
            cardSize={cardSize}
            src="https://cdn.pixabay.com/photo/2020/04/10/12/26/nature-5025558__480.jpg"
          />
          <VideoText>
            <TitleText cardSize={cardSize}>
              To create a prod build, use yarn run build command...
            </TitleText>
            <ChannelName cardSize={cardSize}>Aqib Javaid</ChannelName>
            <VideoAnalytics cardSize={cardSize}>
              120K • 1 day ago
            </VideoAnalytics>
          </VideoText>
        </VideoDetails>
      </Container>
    </Link>
  );
};

export default VideoCard;
