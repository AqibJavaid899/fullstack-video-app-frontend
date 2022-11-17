import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import VideoCard from "../components/VideoCard";
import { cleanVideoState } from "../redux/slices/videoSlice";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanVideoState());
    const fetchVideos = async () => {
      const payload = await axios.get(`/videos/${type}`);
      setVideos(payload.data);
    };

    fetchVideos();
  }, [type, dispatch]);

  return (
    <Container>
      {videos.map((video) => (
        <VideoCard key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;
