import React from "react";
import ReactDOM from "react-dom";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";

import "../index.css";

const MyPopover = (props) => {
  const content = (
    <PopoverContent boxShadow="2xl" w="200px" _focus={{ outline: "none" }}>
      <PopoverArrow />
      <PopoverCloseButton />
      <PopoverHeader>{props.header}</PopoverHeader>
      <PopoverBody
        className="pop"
        scrollBehavior="smooth"
        w="200px"
        h="300px"
        overflow="scroll"
        overflowX="hidden"
      >
        {props.body}
      </PopoverBody>
    </PopoverContent>
  );

  return (
    <Popover>
      <PopoverTrigger>{props.trigger}</PopoverTrigger>
      {ReactDOM.createPortal(content, document.querySelector("#popover"))}
    </Popover>
  );
};

export default MyPopover;
