import React from "react";
import Card from "../UI/Card";
import PostItem from "./PostItem";

const PostList = (props) => {
  return (
    <React.Fragment>
      {props.posts.map((post) => {
        return (
          <Card key={post.id} bgColor="#242526" textColor="#e4e6eb">
            <PostItem post={post} />
          </Card>
        );
      })}
    </React.Fragment>
  );
};

export default PostList;
