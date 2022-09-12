import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const Container = styled.div``;

const AddCommentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  padding: 5px;
  width: 100%;
  outline: none;
`;

const CommentSection = () => {
  return (
    <Container>
      <AddCommentContainer>
        <Avatar src="https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__480.jpg" />
        <Input placeholder="Add a comment..." />
      </AddCommentContainer>
      {/* Previously Added Comments */}
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default CommentSection;
