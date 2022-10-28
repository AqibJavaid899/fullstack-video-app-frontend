import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import VideoCard from "../components/VideoCard";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const payload = await axios.get(`/videos/${type}`);
      setVideos(payload.data);
      console.log("Videos Payload received is : ", payload.data);
    };

    fetchVideos();
  }, [type]);
  return (
    <Container>
      {videos.map((video) => (
        <VideoCard key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;
