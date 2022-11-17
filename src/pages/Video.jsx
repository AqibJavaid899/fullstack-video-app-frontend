import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { format } from "timeago.js";
import styled from "styled-components";

import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";

import CommentSection from "../components/CommentSection";
import VideoCard from "../components/VideoCard";
import {
  fetchVideoFailure,
  fetchVideoStart,
  fetchVideoSuccess,
  incrementDislikeCount,
  incrementLikeCount,
} from "../redux/slices/videoSlice";
import { ThumbDown, ThumbUp } from "@mui/icons-material";
import { userSubscription } from "../redux/slices/userSlice";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;

const VideoSection = styled.div`
  flex: 5;
`;

const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: contain;
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
  const [channel, setChannel] = useState({});

  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);

  const dispatch = useDispatch();

  // Fetching the Link using useLocation() Hook
  const videoLink = useLocation().pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchVideoStart());
        const videoData = await axios.get(`/videos/get/${videoLink}`);
        const channelData = await axios.get(
          `/users/get/${videoData.data.userId}`
        );
        dispatch(fetchVideoSuccess(videoData.data));
        setChannel(channelData.data);
      } catch (error) {
        dispatch(fetchVideoFailure());
      }
    };
    fetchData();
  }, [videoLink, dispatch]);

  const handleLikeButtonClick = async () => {
    await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(incrementLikeCount(currentUser._id));
  };

  const handleDislikeButtonClick = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(incrementDislikeCount(currentUser._id));
  };

  const handleSubscription = async () => {
    currentUser.subscribedUsers.includes(currentVideo.userId)
      ? await axios.put(`/users/unsubscribe/${currentVideo.userId}`)
      : await axios.put(`/users/subscribe/${currentVideo.userId}`);
    const channelData = await axios.get(`/users/get/${currentVideo.userId}`);
    setChannel(channelData.data);
    dispatch(userSubscription(currentVideo.userId));
  };

  return (
    <Container>
      <VideoSection>
        <VideoFrame src={currentVideo.videoUrl} />
        {/* Video Details */}
        <VideoDetails>
          <VideoTitle>{currentVideo.title}</VideoTitle>
          {/* Analytics + Buttons */}
          <VideoInfo>
            <VideoAnalytics>
              {currentVideo.views} views • {format(currentVideo.createdAt)}
            </VideoAnalytics>
            <VideoButtons>
              <VideoButton onClick={() => handleLikeButtonClick()}>
                {currentVideo.likes?.includes(currentUser?._id) ? (
                  <ThumbUp />
                ) : (
                  <ThumbUpOutlinedIcon />
                )}{" "}
                {currentVideo.likes?.length}
              </VideoButton>
              <VideoButton onClick={() => handleDislikeButtonClick()}>
                {currentVideo.dislikes?.includes(currentUser?._id) ? (
                  <ThumbDown />
                ) : (
                  <ThumbDownOffAltOutlinedIcon />
                )}{" "}
                Dislike
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
              <ChannelImage src={channel.img} />
              <ChannelInfo>
                <ChannelName>{channel.name}</ChannelName>
                <SubscriptionCount>
                  {channel.subscribers} subscribers
                </SubscriptionCount>
              </ChannelInfo>
            </SubscriptionDetails>
            {/* Subscription Button */}
            <SubscriptionButton onClick={() => handleSubscription()}>
              {currentUser.subscribedUsers.includes(currentVideo.userId)
                ? "SUBSCRIBED"
                : "SUBSCRIBE"}
            </SubscriptionButton>
          </ChannelSubscribeSection>
        </ChannelDetails>
        {/* Video Description */}
        <VideoDescription>{currentVideo.desc}</VideoDescription>
        <HorizontalLine />

        {/* Comments Section */}
        <CommentSection />
      </VideoSection>
      <RecommendationSection>
        {/*
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
        */}
      </RecommendationSection>
    </Container>
  );
};

export default Video;
