import React from "react";
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";

import CommentSection from "../components/CommentSection";
import VideoCard from "../components/VideoCard";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

const VideoSection = styled.div`
  flex: 5;
`;

const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideoTitle = styled.h1`
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.textColor};
`;

const VideoInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const VideoAnalytics = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.horizontalLineColor};
`;

const VideoButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${({ theme }) => theme.textColor};
  font-size: 14px;
`;

const VideoButton = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

const HorizontalLine = styled.hr`
  margin: 16px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const ChannelDetails = styled.div``;

const ChannelSubscribeSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SubscriptionDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ChannelImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;

const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.textColor};
`;

const ChannelName = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const SubscriptionCount = styled.span`
  margin-top: 6px;
  font-size: 12px;
  color: ${({ theme }) => theme.horizontalLineColor};
`;

const SubscriptionButton = styled.button`
  height: max-content;
  background-color: #cc1a00;
  color: white;
  padding: 8px 16px;
  font-weight: 500;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const VideoDescription = styled.span`
  font-size: 13px;
  margin-left: 66px;
  display: flex;
  width: 80%;
`;

const RecommendationSection = styled.div`
  flex: 2;
`;

const Video = () => {
  return (
    <Container>
      <VideoSection>
        <iframe
          width="100%"
          height="540px"
          src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        {/* Video Details */}
        <VideoDetails>
          <VideoTitle>
            React Node.js Video Sharing App Full Tutorial (Redux, JWT, Cookies)
            | MERN Stack Youtube Clone
          </VideoTitle>
          {/* Analytics + Buttons */}
          <VideoInfo>
            <VideoAnalytics>7,948,154 views • Jun 22, 2022</VideoAnalytics>
            <VideoButtons>
              <VideoButton>
                <ThumbUpOutlinedIcon /> 123
              </VideoButton>
              <VideoButton>
                <ThumbDownOffAltOutlinedIcon /> Dislike
              </VideoButton>
              <VideoButton>
                <ReplyOutlinedIcon /> Share
              </VideoButton>
              <VideoButton>
                <AddTaskOutlinedIcon /> Save
              </VideoButton>
            </VideoButtons>
          </VideoInfo>
        </VideoDetails>
        <HorizontalLine />
        {/* Channel Details + Description */}
        <ChannelDetails>
          <ChannelSubscribeSection>
            <SubscriptionDetails>
              <ChannelImage src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__480.jpg" />
              <ChannelInfo>
                <ChannelName>Lama Dev</ChannelName>
                <SubscriptionCount>200K subscribers</SubscriptionCount>
              </ChannelInfo>
            </SubscriptionDetails>
            {/* Subscription Button */}
            <SubscriptionButton>SUBSCRIBE</SubscriptionButton>
          </ChannelSubscribeSection>
        </ChannelDetails>
        {/* Video Description */}
        <VideoDescription>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          laborum delectus unde quaerat dolore culpa sit aliquam at. Vitae
          facere ipsum totam ratione exercitationem. Suscipit animi accusantium
          dolores ipsam ut.
        </VideoDescription>
        <HorizontalLine />

        {/* Comments Section */}
        <CommentSection />
      </VideoSection>
      <RecommendationSection>
        <VideoCard cardSize="small" />
        <VideoCard cardSize="small" />
        <VideoCard cardSize="small" />
        <VideoCard cardSize="small" />
        <VideoCard cardSize="small" />
        <VideoCard cardSize="small" />
        <VideoCard cardSize="small" />
        <VideoCard cardSize="small" />
        <VideoCard cardSize="small" />
        <VideoCard cardSize="small" />
        <VideoCard cardSize="small" />
        <VideoCard cardSize="small" />
      </RecommendationSection>
    </Container>
  );
};

export default Video;
