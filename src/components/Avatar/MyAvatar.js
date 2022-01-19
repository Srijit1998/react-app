import React from "react";
import { Avatar } from "@chakra-ui/react";

const MyAvatar = (props) => {
  return (
    <Avatar
      size={props.size}
      name={props.name}
      my="10px"
      mx="8px"
      src={props.imageUrl}
    />
  );
};

export default MyAvatar;
