import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import MyAvatar from "../Avatar/MyAvatar";
import UserDetail from "../User/UserDetail";

const PostItem = (props) => {
  return (
    <Box display="flex" flexDir="column" justifyContent="center">
      <Box display="flex" alignItems="start" mb={5}>
        <MyAvatar
          size="lg"
          name="Srijit Bhattacharjee"
          imageUrl="https://bit.ly/dan-abramov"
        />
        <UserDetail
          name="Srijit Bhattacharjee"
          color="#e4e6eb"
          location="Kolkata, India"
        />
      </Box>
      <Text size="lg" mb={3} fontWeight="semibold" color="#e4e6eb">
        {props.post.postTitle}
      </Text>
      <Image
        fallbackSrc="https://cdn.impression.co.uk/2021/03/loading1.gif"
        src={props.post.gifUrl}
        w="full"
        cursor="pointer"
      />
    </Box>
  );
};

export default PostItem;
