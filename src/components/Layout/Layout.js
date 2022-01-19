import React from "react";
import { Center } from "@chakra-ui/react";

const Layout = (props) => {
  return (
    <Center
      display="flex"
      bgColor="#18191a"
      flexDir="column"
      justifyContent="start"
      h="100%"
      p={5}
    >
      {props.children}
    </Center>
  );
};

export default Layout;
