import styled from "styled-components";

const Container = styled.div`
  width: 280px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  height: 36px;
  width: 36px;
  object-fit: contain;
  border-radius: 50%;
`;
const VideoInfo = styled.div``;

const VideoTitle = styled.h1`
  font-size: 15px;
  color: ${({ theme }) => theme.textColor};
  font-weight: 500;
`;

const ChannelName = styled.h2`
  font-size: 13px;
  color: ${({ theme }) => theme.textSoftColor};
  margin: 10px 0px;
`;

const ViewsCount = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.textSoftColor};
`;

const Card = () => {
  return (
    <Container>
      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1GNulVbDJQ8E-OBbOWxiAeIUE7hthzkn1wQ&usqp=CAU"></Image>
      <Details>
        <ChannelImage src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"></ChannelImage>
        <VideoInfo>
          <VideoTitle>This is an Awesome Video!</VideoTitle>
          <ChannelName>Lama Dev</ChannelName>
          <ViewsCount>300,123 views - 4 days ago</ViewsCount>
        </VideoInfo>
      </Details>
    </Container>
  );
};

export default Card;
