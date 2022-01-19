import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Card = (props) => {
  return (
    <Box
      bgColor={props.bgColor}
      display="flex"
      flexDir="column"
      p="5"
      w="500px"
      mt="10px"
      borderRadius="xl"
      boxShadow="2xl"
    >
      <Text
        fontSize="3xl"
        textAlign="center"
        fontWeight="semibold"
        color={props.textColor}
        mb="8px"
      >
        {props.text}
      </Text>
      {props.children}
    </Box>
  );
};

export default Card;
