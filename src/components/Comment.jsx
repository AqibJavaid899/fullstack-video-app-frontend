import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-content: center;
  margin: 30px 0px;
  gap: 12px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;

const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.textColor};
`;

const Username = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Datetime = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.horizontalLineColor};
  margin-left: 6px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__480.jpg" />
      <CommentContent>
        <Username>
          Aqib Javaid <Datetime>2 days ago</Datetime>
        </Username>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsa
          aspernatur molestias quidem modi excepturi provident odit illo non?
          Libero in dolores saepe est dicta mollitia culpa ab, beatae velit?
        </Text>
      </CommentContent>
    </Container>
  );
};

export default Comment;
