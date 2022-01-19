import React from "react";
import { Button } from "@chakra-ui/react";

const MyButton = (props) => {
  return (
    <Button
      _focus={{ outline: "none" }}
      mt={10}
      w={props.width}
      bgColor={props.bgColor}
      color={props.color}
      variant={props.variant}
      onClick={props.onClick}
      _hover={{ bgColor: props.color, color: props.bgColor }}
    >
      {props.text}
    </Button>
  );
};

export default MyButton;
